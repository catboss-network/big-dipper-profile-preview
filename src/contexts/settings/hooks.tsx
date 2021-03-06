import {
  useEffect,
  useState,
} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  lightTemplate,
  darkTemplate,
} from '@styles';
import { usePersistedState } from '@hooks';
import {
  Theme,
  ThemeState,
} from './types';

/**
 *
 * @param initialState
 */
export const useTheme = (initialState:ThemeState) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [themeSelection, setThemeSelection] = usePersistedState('themeSelection', initialState.themeSelection);

  const themeList = [
    'light',
    'dark',
    'deuteranopia',
    'tritanopia',
  ];

  const themeDictionary = {
    light: lightTemplate,
    dark: darkTemplate,
  };

  useEffect(() => {
    const isClient = typeof window === 'object';
    if (themeSelection === 'device') {
      if (
        isClient
        && window?.matchMedia('(prefers-color-scheme: dark)')?.matches
      ) {
        setTheme('light');
      }
    } else if (themeDictionary[themeSelection]) {
      setTheme(themeSelection as Theme);
    } else {
      setTheme('light');
    }
  }, [themeSelection]);

  const changeTheme = (value: string) => {
    if (themeDictionary[value]) {
      setThemeSelection(value);
    }
  };

  return {
    theme,
    muiTheme: createMuiTheme(themeDictionary[theme] || lightTemplate),
    themeSelection,
    themeList,
    themeDictionary,
    changeTheme,
  };
};
