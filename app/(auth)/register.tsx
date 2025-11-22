import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, db } from '@/config/firebaseConfig';
import { useRouter } from 'expo-router';
import { FuturisticButton } from '@/components/ui/FuturisticButton';
import { FuturisticInput } from '@/components/ui/FuturisticInput';
import { FuturisticColors } from '@/constants/theme';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    if (!nome.trim() || !email.trim() || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      return;
    }

    setLoading(true);
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email.trim(), senha);
      const user = userCred.user;
      await set(ref(db, 'users/' + user.uid), {
        nome: nome.trim(),
        email: user.email,
        interesses: [],
        criadoEm: new Date().toISOString()
      });
      router.replace('/(tabs)/home');
    } catch (err: any) {
      Alert.alert('Erro', err.message || 'Não foi possível criar a conta');
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
          <View style={styles.header}>
            <View style={styles.logoWrapper}>
              <Image
                source={require('../../asset/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.title}>Criar Conta</Text>
            <Text style={styles.subtitle}>Junte-se ao futuro</Text>
            <View style={styles.accentLine} />
          </View>

          <View style={styles.formContainer}>
            <FuturisticInput
              label="Nome Completo"
              value={nome}
              onChangeText={setNome}
              placeholder="Seu nome"
              autoCapitalize="words"
              autoComplete="name"
            />

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
              placeholder="Mínimo 6 caracteres"
              secureTextEntry
              autoComplete="password"
            />

            <FuturisticButton
              title="CRIAR CONTA"
              onPress={handleRegister}
              loading={loading}
              style={styles.button}
            />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Já tem uma conta? </Text>
              <Text
                style={styles.linkText}
                onPress={() => router.back()}
              >
                Entrar
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
    paddingTop: 48,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoWrapper: {
    width: 100,
    height: 100,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 107, 53, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: FuturisticColors.primary,
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 2,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: FuturisticColors.neonBlue,
    letterSpacing: 1,
    marginBottom: 16,
  },
  accentLine: {
    width: 60,
    height: 3,
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
