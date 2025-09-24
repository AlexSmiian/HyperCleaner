import Page from "./_modules/Page";
import Home from "./_modules/Home";
import meta from "./meta";
import getRobots from "./_utils/getRobots";
import { getCountryCode } from "./actions";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return {
        title: meta[lang]?.title || meta.en.title,
        description: meta[lang]?.description || meta.en.description,
        ...getRobots(),
    };
}

interface PageProps {
    params: Promise<{ lang: string }>;
    searchParams?: Promise<Record<string, string | string[]>>;
}

export default async function HomePage({ params, searchParams }: PageProps) {
    const { lang } = await params;
    const resolvedSearchParams = searchParams ? await searchParams : {};
    const country = await getCountryCode();

    console.log(country);
    console.log(lang);
    console.log(resolvedSearchParams);

    return (
        <Page>
            <Home />
        </Page>
    );
}