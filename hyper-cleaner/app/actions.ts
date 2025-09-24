'use server'

import { Reader, CountryResponse } from 'maxmind';
import { cookies, headers } from 'next/headers';
import fs from 'fs';

const CF_CONNECTING_IP = 'cf-connecting-ip';
const REMOTE_ADDR = "remote_addr";
const X_REAL_IP = "x-real-ip";

const COUNTRY_COOKIE_NAME = 'country_code_debug';
const COUNTRY_IP_DEBUG = 'country_ip_debug';

/**
 * Отримує IP користувача з cookie або заголовків
 */
export async function getUserIpByHeader(): Promise<string | undefined> {
    // Отримуємо cookie
    const cookieStore = await cookies();
    const ipCookie = cookieStore.get(COUNTRY_IP_DEBUG)?.value;

    if (ipCookie) return ipCookie;

    // Отримуємо заголовки
    const headersList = await headers();
    const cfConnectingIp = headersList.get(CF_CONNECTING_IP);
    const remoteAddr = headersList.get(REMOTE_ADDR);
    const xRealIP = headersList.get(X_REAL_IP);

    // Конвертуємо null в undefined
    return cfConnectingIp ?? xRealIP ?? remoteAddr ?? undefined;
}

/**
 * Повертає код країни користувача
 */
export async function getCountryCode(): Promise<string | null> {
    const cookieStore = await cookies();
    const countryCookie = cookieStore.get(COUNTRY_COOKIE_NAME)?.value;

    if (countryCookie) return countryCookie;

    const ip = await getUserIpByHeader();
    if (!ip) return null;

    try {
        const buffer = fs.readFileSync('./app/resources/maxmind/GeoIP2-City.mmdb');
        const lookup = new Reader<CountryResponse>(buffer);
        const geo = lookup.get(ip);

        const countryCode = geo?.country?.iso_code;
        return countryCode ?? null;
    } catch (error) {
        console.error(`Error detecting country for IP (${ip}):`, error);
        return null;
    }
}

/**
 * Повертає назву та код країни користувача
 */
export async function getCountryName(): Promise<{ countryCode: string; countryName: string }> {
    const ip = await getUserIpByHeader(); // Додано await
    if (!ip) return { countryCode: '', countryName: '' };

    try {
        const buffer = fs.readFileSync('./app/resources/maxmind/GeoIP2-City.mmdb');
        const lookup = new Reader<CountryResponse>(buffer);
        const geo = lookup.get(ip);

        const countryCode = geo?.country?.iso_code ?? '';
        const countryName = geo?.country?.names?.en ?? '';

        return { countryCode, countryName };
    } catch (error) {
        console.error(`Error detecting country for IP (${ip}):`, error);
        return { countryCode: '', countryName: '' };
    }
}