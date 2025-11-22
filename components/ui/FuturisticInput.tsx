import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View, Text } from 'react-native';
import { FuturisticColors } from '@/constants/theme';

interface FuturisticInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function FuturisticInput({ label, error, style, ...props }: FuturisticInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError, style]}
        placeholderTextColor="#9BA1A6"
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: FuturisticColors.dark,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: '#F5F5F7',
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: FuturisticColors.dark,
    fontWeight: '500',
  },
  inputError: {
    borderColor: '#FF006E',
  },
  errorText: {
    color: '#FF006E',
    fontSize: 12,
    marginTop: 4,
  },
});

