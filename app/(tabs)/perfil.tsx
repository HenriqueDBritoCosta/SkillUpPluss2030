import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/config/firebaseConfig';
import { useRouter } from 'expo-router';
import { FuturisticCard } from '@/components/ui/FuturisticCard';
import { FuturisticButton } from '@/components/ui/FuturisticButton';
import { FuturisticColors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function Perfil() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const stats = [
    { label: 'Trilhas Concluídas', value: '0', icon: 'trophy', color: FuturisticColors.primary },
    { label: 'Horas de Estudo', value: '0h', icon: 'time', color: FuturisticColors.neonBlue },
    { label: 'Conquistas', value: '0', icon: 'star', color: FuturisticColors.neonPurple },
  ];

  return (
    <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <View style={[styles.avatarGradient, { backgroundColor: FuturisticColors.primary }]}>
              <Text style={styles.avatarText}>
                {user?.email?.charAt(0).toUpperCase() || 'U'}
              </Text>
            </View>
            <View style={styles.avatarBadge}>
              <Ionicons name="checkmark-circle" size={24} color={FuturisticColors.neonBlue} />
            </View>
          </View>
          <Text style={styles.userName}>{user?.email?.split('@')[0] || 'Usuário'}</Text>
          <Text style={styles.userEmail}>{user?.email || ''}</Text>
          <View style={styles.accentLine} />
        </View>

        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <FuturisticCard key={index} variant="glass" style={styles.statCard}>
              <View style={[styles.statIconContainer, { backgroundColor: `${stat.color}20` }]}>
                <Ionicons name={stat.icon as any} size={28} color={stat.color} />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </FuturisticCard>
          ))}
        </View>

        <FuturisticCard variant="glass" style={styles.menuCard}>
          <Text style={styles.menuTitle}>Configurações</Text>
          
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="person-outline" size={24} color={FuturisticColors.dark} />
              <Text style={styles.menuItemText}>Editar Perfil</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={FuturisticColors.darkSecondary} />
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="notifications-outline" size={24} color={FuturisticColors.dark} />
              <Text style={styles.menuItemText}>Notificações</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={FuturisticColors.darkSecondary} />
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="settings-outline" size={24} color={FuturisticColors.dark} />
              <Text style={styles.menuItemText}>Configurações</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={FuturisticColors.darkSecondary} />
          </TouchableOpacity>
        </FuturisticCard>

        <FuturisticButton
          title="SAIR"
          onPress={handleSignOut}
          variant="outline"
          style={styles.signOutButton}
        />
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
  avatarContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  avatarGradient: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: FuturisticColors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  avatarText: {
    fontSize: 48,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  avatarBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 2,
  },
  userName: {
    fontSize: 28,
    fontWeight: '800',
    color: FuturisticColors.dark,
    marginBottom: 4,
    textTransform: 'capitalize',
  },
  userEmail: {
    fontSize: 16,
    color: FuturisticColors.darkSecondary,
    marginBottom: 16,
  },
  accentLine: {
    width: 80,
    height: 4,
    backgroundColor: FuturisticColors.primary,
    borderRadius: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    gap: 12,
  },
  statCard: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  statIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '900',
    color: FuturisticColors.dark,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: FuturisticColors.darkSecondary,
    fontWeight: '600',
    textAlign: 'center',
  },
  menuCard: {
    marginBottom: 24,
    padding: 20,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: FuturisticColors.dark,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '600',
    color: FuturisticColors.dark,
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 4,
  },
  signOutButton: {
    marginBottom: 24,
  },
});
