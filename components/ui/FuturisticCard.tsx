import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { FuturisticColors } from '@/constants/theme';

interface FuturisticCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'primary' | 'glass';
}

export function FuturisticCard({ children, style, variant = 'primary' }: FuturisticCardProps) {
  if (variant === 'glass') {
    return (
      <View style={[styles.glassCard, style]}>
        {children}
      </View>
    );
  }

  return (
    <View style={[styles.card, styles.gradient, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: FuturisticColors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  gradient: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 107, 53, 0.2)',
    elevation: 4,
    shadowColor: FuturisticColors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
});

