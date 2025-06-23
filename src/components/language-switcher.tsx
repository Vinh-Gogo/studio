
'use client';

import { useLanguage } from '@/contexts/language-context';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('vi')}
        aria-label="Chuyển sang tiếng Việt"
        className={cn(
            'w-8 h-8 flex items-center justify-center rounded-full transition-all',
            language === 'vi' ? 'ring-2 ring-primary ring-offset-2' : ''
        )}
      >
        <span role="img" aria-label="Cờ Việt Nam" className="text-2xl select-none">🇻🇳</span>
      </button>
      <button
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
        className={cn(
            'w-8 h-8 flex items-center justify-center rounded-full transition-all',
            language === 'en' ? 'ring-2 ring-primary ring-offset-2' : ''
        )}
      >
        <span role="img" aria-label="Cờ Vương quốc Anh" className="text-2xl select-none">🇬🇧</span>
      </button>
    </div>
  );
}
