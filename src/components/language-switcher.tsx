'use client';

import { useLanguage } from '@/contexts/language-context';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('vi')}
        aria-label="Chuyển sang tiếng Việt"
        className={cn(
            'w-8 h-8 relative rounded-full overflow-hidden transition-all',
            language === 'vi' ? 'ring-2 ring-primary-foreground/50 ring-offset-2 ring-offset-primary' : ''
        )}
      >
        <Image src="https://flagcdn.com/vn.svg" alt="Cờ Việt Nam" fill className="object-cover" />
      </button>
      <button
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
        className={cn(
            'w-8 h-8 relative rounded-full overflow-hidden transition-all',
            language === 'en' ? 'ring-2 ring-primary-foreground/50 ring-offset-2 ring-offset-primary' : ''
        )}
      >
        <Image src="https://flagcdn.com/gb.svg" alt="Cờ Vương quốc Anh" fill className="object-cover" />
      </button>
    </div>
  );
}
