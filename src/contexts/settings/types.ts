export type Theme = 'light' | 'dark';

export interface SettingsState {
  theme: Theme;
  muiTheme: any;
  toggleThemeMode?: () => void;
}
