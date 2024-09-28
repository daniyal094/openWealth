export const themeTokens = {
  margin: {
    small: '4px',
    medium: '8px',
    large: '16px',
    xLarge: '24px',
  },
  padding: {
    small: '4px',
    medium: '8px',
    large: '16px',
    xLarge: '24px',
  },
  gap: {
    small: '4px',
    medium: '8px',
    large: '16px',
    xLarge: '24px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
  },
  fontSize: {
    small: '14px',
    medium: '18px',
    large: '28px',
    xLarge: '36px',
  },
  boxShadow: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
}


export const lightTheme = {
  colors: {
    primary: '#306AFF',
    secondary: '#9E9E9E',
    background: '#ffffff',
    backgroundSecondary: '#dedddd',
    text: '#000000',
    textReverse: '#ffffff',
    error: '#b00020',
    warning: '#ffab00',
    info: '#2196f3',
    success: '#4caf50',
  },

};

export const darkTheme = {
  colors: {
    primary: '#F0D85A',
    secondary: '#9E9E9E',
    background: '#121212',
    backgroundSecondary: '#1A1A1A',
    text: '#ffffff',
    textReverse: '#000000',
    error: '#cf6679',
    warning: '#ffab00',
    info: '#bb86fc',
    success: '#03dac6',
  },

};

export type ThemeType = typeof lightTheme;