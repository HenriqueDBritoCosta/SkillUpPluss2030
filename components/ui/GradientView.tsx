import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface GradientViewProps {
  colors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: ViewStyle;
  children?: React.ReactNode;
}

// Componente de gradiente usando View nativo
// Simula gradiente usando múltiplas camadas com opacidade
export function GradientView({ colors, start = { x: 0, y: 0 }, end = { x: 1, y: 1 }, style, children }: GradientViewProps) {
  // Para simplificar, vamos usar a primeira cor como base com um efeito visual
  const baseColor = colors[0] || '#FFFFFF';
  
  return (
    <View style={[styles.container, { backgroundColor: baseColor }, style]}>
      {/* Camada de overlay para simular gradiente */}
      {colors.length > 1 && (
        <View
          style={[
            styles.overlay,
            {
              backgroundColor: colors[colors.length - 1] || baseColor,
              opacity: 0.3,
            },
          ]}
        />
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

