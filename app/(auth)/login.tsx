import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebaseConfig';
import { useRouter } from 'expo-router';
import { FuturisticButton } from '@/components/ui/FuturisticButton';
import { FuturisticInput } from '@/components/ui/FuturisticInput';
import { FuturisticColors } from '@/constants/theme';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email.trim() || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), senha);
      router.replace('/(tabs)/home');
    } catch (err: any) {
      Alert.alert('Erro', err.message || 'Credenciais inválidas');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: FuturisticColors.dark }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.logoContainer}>
            <View style={styles.logoWrapper}>
              <Image
                source={require('../../asset/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.title}>SkillUpPlus</Text>
            <Text style={styles.subtitle}>2030+</Text>
            <View style={styles.accentLine} />
          </View>

          <View style={styles.formContainer}>
            <FuturisticInput
              label="E-mail"
              value={email}
              onChangeText={setEmail}
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />

            <FuturisticInput
              label="Senha"
              value={senha}
              onChangeText={setSenha}
              placeholder="••••••••"
              secureTextEntry
              autoComplete="password"
            />

            <FuturisticButton
              title="ENTRAR"
              onPress={handleLogin}
              loading={loading}
              style={styles.button}
            />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Não tem uma conta? </Text>
              <Text
                style={styles.linkText}
                onPress={() => router.push('/(auth)/register')}
              >
                Criar conta
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logoWrapper: {
    width: 120,
    height: 120,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 107, 53, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: FuturisticColors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 42,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 2,
    marginBottom: 4,
    textShadowColor: FuturisticColors.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: FuturisticColors.neonBlue,
    letterSpacing: 4,
    marginBottom: 16,
  },
  accentLine: {
    width: 80,
    height: 4,
    backgroundColor: FuturisticColors.primary,
    borderRadius: 2,
  },
  formContainer: {
    width: '100%',
  },
  button: {
    marginTop: 12,
    marginBottom: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  footerText: {
    color: '#9BA1A6',
    fontSize: 14,
  },
  linkText: {
    color: FuturisticColors.primary,
    fontSize: 14,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
