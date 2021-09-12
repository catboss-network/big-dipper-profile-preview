export type Theme = 'light' | 'dark' | 'device' | 'deuteranopia' | 'tritanopia' | 'achromatopsia';

export interface ThemeState {
  theme: Theme;
  muiTheme: any;
  themeSelection: string;
  themeList: string[];
  changeTheme?: (value: string) => void;
}

export type SettingsState = ThemeState;
