import { useEffect } from 'react';
import {
  darkTheme,
  lightTheme,
} from '@styles';
import { usePersistedState } from '@hooks';
import { SettingsState } from './types';

/**
 *
 * @param initialState
 */
export const useTheme = (initialState:SettingsState) => {
  const [theme, setTheme] = usePersistedState('theme', initialState.theme);

  useEffect(() => {
    // checks browser preference if theme isn't persisted
    const persistedTheme = localStorage.getItem('theme');
    const isClient = typeof window === 'object';
    if (
      !persistedTheme
      && isClient
      && window?.matchMedia('(prefers-color-scheme: dark)')?.matches
    ) {
      setTheme('dark');
    }
  }, []);

  const toggleThemeMode = () => {
    const value = theme === 'light' ? 'dark' : 'light';
    setTheme(value);
  };

  return {
    theme,
    muiTheme: theme === 'dark' ? darkTheme : lightTheme,
    toggleThemeMode,
  };
};
