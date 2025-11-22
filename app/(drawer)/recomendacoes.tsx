import React, { useEffect, useState } from 'react';
import { ScrollView, Text, ActivityIndicator, StyleSheet, View } from 'react-native';
import { gerarRecomendacaoAPI } from '@/config/iaApi';
import { FuturisticCard } from '@/components/ui/FuturisticCard';
import { FuturisticColors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function Recomendacoes() {
  const [texto, setTexto] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(false);
      try {
        const r = await gerarRecomendacaoAPI({ interesses: ['IA', 'Sustentabilidade'] });
        setTexto(r);
      } catch (e) {
        setError(true);
        setTexto('Não foi possível carregar as recomendações no momento. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <View style={[styles.iconGradient, { backgroundColor: FuturisticColors.neonPurple }]}>
              <Ionicons name="sparkles" size={32} color="#FFFFFF" />
            </View>
          </View>
          <Text style={styles.title}>Recomendações IA</Text>
          <Text style={styles.subtitle}>Personalizadas para você</Text>
          <View style={styles.accentLine} />
        </View>

        {loading ? (
          <FuturisticCard variant="glass" style={styles.loadingCard}>
            <ActivityIndicator size="large" color={FuturisticColors.primary} />
            <Text style={styles.loadingText}>Gerando suas recomendações...</Text>
          </FuturisticCard>
        ) : error ? (
          <FuturisticCard variant="glass" style={styles.errorCard}>
            <Ionicons name="alert-circle" size={48} color={FuturisticColors.neonPink} />
            <Text style={styles.errorText}>{texto}</Text>
          </FuturisticCard>
        ) : (
          <FuturisticCard variant="glass" style={styles.contentCard}>
            <View style={styles.contentHeader}>
              <Ionicons name="rocket" size={24} color={FuturisticColors.primary} />
              <Text style={styles.contentTitle}>Trilhas Recomendadas</Text>
            </View>
            <Text style={styles.contentText}>{texto || 'Nenhuma recomendação disponível no momento.'}</Text>
          </FuturisticCard>
        )}

        <View style={styles.infoCard}>
          <Ionicons name="information-circle" size={20} color={FuturisticColors.neonBlue} />
          <Text style={styles.infoText}>
            As recomendações são geradas com base no seu perfil e interesses.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    paddingTop: 48,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconContainer: {
    marginBottom: 20,
  },
  iconGradient: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: FuturisticColors.neonPurple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: FuturisticColors.dark,
    letterSpacing: 1,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: FuturisticColors.neonBlue,
    fontWeight: '600',
    marginBottom: 16,
  },
  accentLine: {
    width: 100,
    height: 4,
    backgroundColor: FuturisticColors.primary,
    borderRadius: 2,
  },
  loadingCard: {
    padding: 40,
    alignItems: 'center',
    marginBottom: 24,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: FuturisticColors.darkSecondary,
    fontWeight: '600',
  },
  errorCard: {
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
  },
  errorText: {
    marginTop: 16,
    fontSize: 16,
    color: FuturisticColors.dark,
    textAlign: 'center',
    lineHeight: 24,
  },
  contentCard: {
    padding: 24,
    marginBottom: 24,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: FuturisticColors.dark,
  },
  contentText: {
    fontSize: 16,
    color: FuturisticColors.darkSecondary,
    lineHeight: 26,
    textAlign: 'justify',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    padding: 16,
    borderRadius: 12,
    gap: 12,
    marginBottom: 24,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: FuturisticColors.darkSecondary,
    lineHeight: 20,
  },
});
