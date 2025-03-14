import { Link } from '@inertiajs/react';
import { RiGlobeLine } from '@remixicon/react';

import { SupportedLanguage } from '@/types';
import Dropdown from '@/components/base/Dropdown';
import useLanguage from '@/hooks/useLanguage';

const languages: Record<SupportedLanguage, string> = {
  en: 'English',
  de: 'Deutsch',
  zh: '中文',
} as const;

const switchLanguage = (lang: SupportedLanguage) => {
  document.documentElement.lang = lang;
};

const LanguageSwitcher = () => {
  const lang = useLanguage();

  return (
    <Dropdown>
      <button>
        <RiGlobeLine size={18} />
        {languages[lang]}
      </button>
      <Dropdown.Menu>
        <Link
          as="button"
          method="post"
          className="button"
          href={route('locale.update', { locale: 'zh' })}
          onClick={() => switchLanguage('zh')}
        >
          {languages.zh}
        </Link>
        <Link
          as="button"
          method="post"
          className="button"
          href={route('locale.update', { locale: 'de' })}
          onClick={() => switchLanguage('de')}
        >
          {languages.de}
        </Link>
        <Link
          as="button"
          method="post"
          className="button"
          href={route('locale.update', { locale: 'en' })}
          onClick={() => switchLanguage('en')}
        >
          {languages.en}
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
