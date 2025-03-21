import { useCallback, useEffect, useState } from 'react';
import { RiMoonClearLine, RiSunLine } from '@remixicon/react';

const LIGHT = 'light';
const DARK = 'dark';
const SYSTEM = 'system';
const MEDIA = '(prefers-color-scheme: dark)';

const getTheme = (theme: string | null) =>
  theme && [LIGHT, DARK, SYSTEM].includes(theme) ? theme : LIGHT;

const getPersistedTheme = () => {
  try {
    return getTheme(localStorage.getItem('theme'));
  } catch (error) {
    return LIGHT;
  }
};

const setPersistedTheme = (theme: string) => {
  try {
    return localStorage.setItem('theme', theme);
  } catch (error) {}
};

const handlePreferredTheme = (
  query: MediaQueryListEvent | MediaQueryList,
  theme = getPersistedTheme()
) => {
  setPersistedTheme(theme);

  const classList = document.documentElement.classList;
  const preferDark = theme === SYSTEM ? query.matches : theme === DARK;

  preferDark ? classList.add(DARK) : classList.remove(DARK);

  return preferDark;
};

const ThemeSwitcher = () => {
  const [preferDark, setPreferDark] = useState(false);

  useEffect(() => {
    const theme = getPersistedTheme();
    const query = window.matchMedia(MEDIA);

    setPreferDark(handlePreferredTheme(query, theme));

    const handleMediaQuery = (event: MediaQueryListEvent) =>
      setPreferDark(handlePreferredTheme(event));

    query.addEventListener('change', handleMediaQuery);

    return () => query.removeEventListener('change', handleMediaQuery);
  }, [setPreferDark]);

  const toggle = useCallback(() => {
    const media = window.matchMedia(MEDIA);
    const darkTheme = media.matches ? SYSTEM : DARK;
    const lightTheme = media.matches ? LIGHT : SYSTEM;

    setPreferDark((dark) => handlePreferredTheme(media, dark ? lightTheme : darkTheme));
  }, [setPreferDark]);

  return (
    <button className="icon" onClick={toggle}>
      {preferDark ? <RiMoonClearLine size={18} /> : <RiSunLine size={18} />}
    </button>
  );
};

export default ThemeSwitcher;
