import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { FuturisticCard } from '@/components/ui/FuturisticCard';
import { FuturisticColors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function Configuracoes() {
  const colorScheme = useColorScheme();
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(colorScheme === 'dark');

  return (
    <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <View style={[styles.iconGradient, { backgroundColor: FuturisticColors.primary }]}>
              <Ionicons name="settings" size={32} color="#FFFFFF" />
            </View>
          </View>
          <Text style={styles.title}>Configurações</Text>
          <Text style={styles.subtitle}>Personalize sua experiência</Text>
          <View style={styles.accentLine} />
        </View>

        <FuturisticCard variant="glass" style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Preferências</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="notifications-outline" size={24} color={FuturisticColors.dark} />
              <View style={styles.settingText}>
                <Text style={styles.settingLabel}>Notificações</Text>
                <Text style={styles.settingDescription}>Receber notificações sobre progresso</Text>
              </View>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#E0E0E0', true: FuturisticColors.primary }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="moon-outline" size={24} color={FuturisticColors.dark} />
              <View style={styles.settingText}>
                <Text style={styles.settingLabel}>Modo Escuro</Text>
                <Text style={styles.settingDescription}>Interface com tema escuro</Text>
              </View>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#E0E0E0', true: FuturisticColors.primary }}
              thumbColor="#FFFFFF"
            />
          </View>
        </FuturisticCard>

        <FuturisticCard variant="glass" style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Conta</Text>
          
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="person-outline" size={24} color={FuturisticColors.dark} />
              <Text style={styles.menuItemText}>Editar Perfil</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={FuturisticColors.darkSecondary} />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="key-outline" size={24} color={FuturisticColors.dark} />
              <Text style={styles.menuItemText}>Alterar Senha</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={FuturisticColors.darkSecondary} />
          </TouchableOpacity>
        </FuturisticCard>

        <FuturisticCard variant="glass" style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Sobre</Text>
          
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="information-circle-outline" size={24} color={FuturisticColors.dark} />
              <View style={styles.settingText}>
                <Text style={styles.menuItemText}>Versão</Text>
                <Text style={styles.settingDescription}>1.0.0</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="help-circle-outline" size={24} color={FuturisticColors.dark} />
              <Text style={styles.menuItemText}>Ajuda & Suporte</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={FuturisticColors.darkSecondary} />
          </TouchableOpacity>
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
    shadowColor: FuturisticColors.primary,
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
  sectionCard: {
    marginBottom: 24,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: FuturisticColors.dark,
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  settingText: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: FuturisticColors.dark,
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 13,
    color: FuturisticColors.darkSecondary,
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
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 4,
  },
});
