import Image from 'next/image';
import Link from 'next/link';
import { getSiteLinks } from '@/lib/links';

export async function FloatingActionButtons() {
  const { whatsapp, telegram } = await getSiteLinks();

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {whatsapp && (
        <Link
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        >
          <Image
            src="/logo/whatsapplogo.png"
            alt="WhatsApp"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </Link>
      )}
      {telegram && (
        <Link
          href={telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#0088cc] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        >
          <Image
            src="/logo/telegramlogo.png"
            alt="Telegram"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </Link>
      )}
    </div>
  );
}
