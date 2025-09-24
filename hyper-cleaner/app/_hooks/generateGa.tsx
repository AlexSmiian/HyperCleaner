"use client"

export function generateGA() {
  function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()!.split(";").shift();
  }

  const rawGA = getCookie("_ga");

  let gaClientId = null;
  if (rawGA) {
    const parts = rawGA.split(".");
    if (parts.length >= 2) {
      gaClientId = parts.slice(-2).join(".");
    }
  }

  let gaSessionId = null;
  const rawSessionGA = getCookie("_ga_KZK9D3B5G0");
  if (rawSessionGA) {
    gaSessionId = rawSessionGA.split(".", 3)[2];
  }

  return {
    ga_client_id: gaClientId,
    ga_session_id: gaSessionId,
  };
}

export default generateGA;
