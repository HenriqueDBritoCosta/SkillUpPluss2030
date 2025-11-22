/**
 * Tema Futurista - SkillUpPlus 2030+
 */

import { Platform } from 'react-native';

// Cores Futuristas
export const FuturisticColors = {
  primary: '#FF6B35', // Laranja vibrante do logo
  secondary: '#004E89',
  accent: '#FFA726',
  neonBlue: '#00D4FF',
  neonPurple: '#9D4EDD',
  neonPink: '#FF006E',
  dark: '#0A0E27',
  darkSecondary: '#1A1F3A',
  darkTertiary: '#2A2F4A',
  light: '#FFFFFF',
  lightSecondary: '#F5F5F7',
  gradient: {
    start: '#FF6B35',
    middle: '#FF8E53',
    end: '#FF6B35',
  },
  gradientDark: {
    start: '#004E89',
    middle: '#0077BE',
    end: '#00D4FF',
  },
};

const tintColorLight = FuturisticColors.primary;
const tintColorDark = FuturisticColors.neonBlue;

export const Colors = {
  light: {
    text: '#0A0E27',
    background: '#FFFFFF',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#FFFFFF',
    background: '#0A0E27',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
