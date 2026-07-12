export interface SiteLinks {
  whatsapp: string | null;
  telegram: string | null;
}

const ENV_FALLBACK: SiteLinks = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? null,
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? null,
};

export async function getSiteLinks(): Promise<SiteLinks> {
  const apiBase = process.env.LINKMANAGER_API_URL;
  const slug = process.env.LINKMANAGER_SLUG;

  if (apiBase && slug) {
    try {
      const url = `${apiBase.replace(/\/$/, '')}/api/public/websites/${slug}/links`;
      const res = await fetch(url, { next: { revalidate: 60 } });
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
