import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FuturisticButton } from '@/components/ui/FuturisticButton';
import { FuturisticCard } from '@/components/ui/FuturisticCard';
import { FuturisticColors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();

  const features = [
    {
      id: 1,
      title: 'Trilhas de Aprendizado',
      description: 'Explore cursos personalizados para 2030+',
      icon: 'rocket',
      color: FuturisticColors.primary,
      onPress: () => router.push('/(tabs)/trilhas'),
    },
    {
      id: 2,
      title: 'Recomendações IA',
      description: 'Receba sugestões personalizadas',
      icon: 'sparkles',
      color: FuturisticColors.neonPurple,
      onPress: () => router.push('/(drawer)/recomendacoes'),
    },
    {
      id: 3,
      title: 'Perfil',
      description: 'Gerencie suas conquistas',
      icon: 'person',
      color: FuturisticColors.neonBlue,
      onPress: () => router.push('/(tabs)/perfil'),
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../asset/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.greeting}>Bem-vindo ao</Text>
          <Text style={styles.title}>SkillUpPlus</Text>
          <Text style={styles.subtitle}>Prepare-se para o futuro</Text>
        </View>

        <View style={styles.featuresContainer}>
          {features.map((feature) => (
            <TouchableOpacity
              key={feature.id}
              onPress={feature.onPress}
              activeOpacity={0.8}
            >
              <FuturisticCard variant="glass" style={styles.featureCard}>
                <View style={styles.featureHeader}>
                  <View style={[styles.iconContainer, { backgroundColor: `${feature.color}20` }]}>
                    <Ionicons name={feature.icon as any} size={32} color={feature.color} />
                  </View>
                  <View style={styles.featureText}>
                    <Text style={styles.featureTitle}>{feature.title}</Text>
                    <Text style={styles.featureDescription}>{feature.description}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color={FuturisticColors.darkSecondary} />
                </View>
              </FuturisticCard>
            </TouchableOpacity>
          ))}
        </View>

        <FuturisticCard style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>Comece sua jornada</Text>
          <Text style={styles.ctaDescription}>
            Explore trilhas personalizadas e desenvolva as habilidades do futuro
          </Text>
          <FuturisticButton
            title="VER TRILHAS"
            onPress={() => router.push('/(tabs)/trilhas')}
            variant="primary"
            style={styles.ctaButton}
          />
        </FuturisticCard>
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
    marginBottom: 40,
  },
  logoContainer: {
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
  greeting: {
    fontSize: 18,
    color: FuturisticColors.darkSecondary,
    fontWeight: '500',
    marginBottom: 8,
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: FuturisticColors.dark,
    letterSpacing: 2,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: FuturisticColors.neonBlue,
    fontWeight: '600',
    letterSpacing: 1,
  },
  featuresContainer: {
    marginBottom: 32,
  },
  featureCard: {
    marginBottom: 16,
  },
  featureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: FuturisticColors.dark,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: FuturisticColors.darkSecondary,
    fontWeight: '400',
  },
  ctaCard: {
    marginBottom: 24,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: FuturisticColors.dark,
    marginBottom: 8,
    textAlign: 'center',
  },
  ctaDescription: {
    fontSize: 16,
    color: FuturisticColors.darkSecondary,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  ctaButton: {
    width: '100%',
  },
});
