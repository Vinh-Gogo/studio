
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations, TranslationKey } from '@/lib/translations';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey, templateParams?: {[key: string]: string | number}) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('vi'); // Default to Vietnamese

  const t = (key: TranslationKey, templateParams?: {[key: string]: string | number}): string => {
    let text = translations[language][key] || translations['en'][key];
    if (templateParams) {
      Object.keys(templateParams).forEach(pKey => {
        text = text.replace(`{${pKey}}`, String(templateParams[pKey]));
      });
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
