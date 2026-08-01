export interface SiteLinks {
  whatsapp: string | null;
  telegram: string | null;
}

const ENV_FALLBACK: SiteLinks = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? null,
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? null,
};

// TEMPORARY: link manager API is down — bypass it and serve links straight
// from env vars. Set to false to restore API usage when the API is back.
const BYPASS_LINK_MANAGER_API = true;

export async function getSiteLinks(): Promise<SiteLinks> {
  if (BYPASS_LINK_MANAGER_API) {
    return ENV_FALLBACK;
  }

  const apiBase = process.env.LINKMANAGER_API_URL;
  const slug = process.env.LINKMANAGER_SLUG;

  if (apiBase && slug) {
    try {
      const url = `${apiBase.replace(/\/$/, '')}/api/public/websites/${slug}/links`;
      const res = await fetch(url, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        return {
          whatsapp: data.whatsapp ?? null,
          telegram: data.telegram ?? null,
        };
      }
    } catch {
    }
  }

  return ENV_FALLBACK;
}
