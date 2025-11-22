import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FuturisticCard } from '@/components/ui/FuturisticCard';
import { FuturisticColors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

interface Trilha {
  id: number;
  nome: string;
  descricao: string;
  topicos: string[];
  progresso?: number;
  cor: string;
  icon: string;
}

export default function Trilhas() {
  const trilhas: Trilha[] = [
    {
      id: 1,
      nome: 'Introdução à IA',
      descricao: 'Fundamentos de inteligência artificial e machine learning',
      topicos: ['Conceitos básicos', 'Python para IA', 'Modelos de ML', 'Deep Learning'],
      progresso: 0,
      cor: FuturisticColors.primary,
      icon: 'brain',
    },
    {
      id: 2,
      nome: 'Sustentabilidade na Tecnologia',
      descricao: 'ODS e práticas sustentáveis no desenvolvimento de software',
      topicos: ['Objetivos de Desenvolvimento Sustentável', 'Green Computing', 'Boas práticas', 'Casos de estudo'],
      progresso: 0,
      cor: FuturisticColors.neonBlue,
      icon: 'leaf',
    },
    {
      id: 3,
      nome: 'Blockchain & Web3',
      descricao: 'Tecnologias descentralizadas do futuro',
      topicos: ['Fundamentos de Blockchain', 'Smart Contracts', 'DeFi', 'NFTs'],
      progresso: 0,
      cor: FuturisticColors.neonPurple,
      icon: 'cube',
    },
    {
      id: 4,
      nome: 'Realidade Aumentada',
      descricao: 'Criando experiências imersivas',
      topicos: ['ARCore/ARKit', '3D Modeling', 'Tracking', 'Interações avançadas'],
      progresso: 0,
      cor: FuturisticColors.neonPink,
      icon: 'glasses',
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
          <Text style={styles.title}>Trilhas de Aprendizado</Text>
          <Text style={styles.subtitle}>Prepare-se para 2030+</Text>
          <View style={styles.accentLine} />
        </View>

        {trilhas.map((trilha) => (
          <TouchableOpacity key={trilha.id} activeOpacity={0.8}>
            <FuturisticCard variant="glass" style={[styles.trilhaCard, { borderLeftColor: trilha.cor, borderLeftWidth: 4 }]}>
              <View style={styles.trilhaHeader}>
                <View style={[styles.iconWrapper, { backgroundColor: `${trilha.cor}20` }]}>
                  <Ionicons name={trilha.icon as any} size={28} color={trilha.cor} />
                </View>
                <View style={styles.trilhaInfo}>
                  <Text style={styles.trilhaNome}>{trilha.nome}</Text>
                  <Text style={styles.trilhaDescricao}>{trilha.descricao}</Text>
                </View>
              </View>

              <View style={styles.topicosContainer}>
                <Text style={styles.topicosTitle}>Tópicos:</Text>
                <View style={styles.topicosList}>
                  {trilha.topicos.map((topico, index) => (
                    <View key={index} style={styles.topicoItem}>
                      <View style={[styles.topicoBullet, { backgroundColor: trilha.cor }]} />
                      <Text style={styles.topicoText}>{topico}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.footer}>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${trilha.progresso || 0}%`, backgroundColor: trilha.cor }]} />
                  </View>
                  <Text style={styles.progressText}>{trilha.progresso || 0}% completo</Text>
                </View>
                <TouchableOpacity style={[styles.startButton, { backgroundColor: `${trilha.cor}20` }]}>
                  <Text style={[styles.startButtonText, { color: trilha.cor }]}>Começar</Text>
                  <Ionicons name="arrow-forward" size={16} color={trilha.cor} />
                </TouchableOpacity>
              </View>
            </FuturisticCard>
          </TouchableOpacity>
        ))}

        <View style={styles.ctaSection}>
          <Text style={styles.ctaText}>Quer trilhas personalizadas?</Text>
          <Text style={styles.ctaSubtext}>Acesse Recomendações IA</Text>
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
    marginBottom: 32,
    alignItems: 'center',
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
  trilhaCard: {
    marginBottom: 24,
    padding: 20,
  },
  trilhaHeader: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  trilhaInfo: {
    flex: 1,
  },
  trilhaNome: {
    fontSize: 22,
    fontWeight: '800',
    color: FuturisticColors.dark,
    marginBottom: 4,
  },
  trilhaDescricao: {
    fontSize: 14,
    color: FuturisticColors.darkSecondary,
    lineHeight: 20,
  },
  topicosContainer: {
    marginBottom: 20,
  },
  topicosTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: FuturisticColors.dark,
    marginBottom: 12,
  },
  topicosList: {
    gap: 10,
  },
  topicoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicoBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
  },
  topicoText: {
    fontSize: 14,
    color: FuturisticColors.darkSecondary,
    flex: 1,
  },
  footer: {
    marginTop: 12,
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: FuturisticColors.primary,
  },
  progressText: {
    fontSize: 12,
    color: FuturisticColors.darkSecondary,
    fontWeight: '600',
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignSelf: 'flex-start',
    gap: 8,
  },
  startButtonText: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  ctaSection: {
    alignItems: 'center',
    paddingVertical: 32,
    marginBottom: 24,
  },
  ctaText: {
    fontSize: 18,
    fontWeight: '700',
    color: FuturisticColors.dark,
    marginBottom: 4,
  },
  ctaSubtext: {
    fontSize: 14,
    color: FuturisticColors.neonBlue,
    fontWeight: '600',
  },
});
