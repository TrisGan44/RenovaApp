import { type Href, useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AuthHeader } from '@/components/auth/AuthHeader';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { SearchField } from '@/components/ui/SearchField';

type ProjectListItem = {
  id: string;
  title: string;
  details: {
    label: string;
    value: string;
  }[];
  actionLabel: string;
  actionRoute?: Href;
};

const PROJECTS: ProjectListItem[] = [
  {
    id: '1',
    title: 'Renovasi Ruko',
    details: [
      { label: 'Klien', value: 'Udin Empat' },
      { label: 'Lokasi', value: 'Jakarta' },
    ],
    actionLabel: 'Detail',
    actionRoute: '/project-detail',
  },
  {
    id: '2',
    title: 'Pembangunan Rumah',
    details: [
      { label: 'Klien', value: 'Mas Trisno' },
      { label: 'Lokasi', value: 'Depok' },
    ],
    actionLabel: 'Selesai',
  },
];

export default function ProjectsScreen() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const filteredProjects = PROJECTS.filter((project) => {
    const haystack = [project.title, ...project.details.map((detail) => detail.value)]
      .join(' ')
      .toLowerCase();

    return haystack.includes(query.trim().toLowerCase());
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.heroContainer}>
          <AuthHeader style={styles.hero} />
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>Daftar Proyek</Text>
          <SearchField
            placeholder="Cari proyek..."
            value={query}
            onChangeText={setQuery}
            containerStyle={styles.searchField}
          />

          <View style={styles.list}>
            {filteredProjects.map(({ id, actionRoute, ...projectData }) => (
              <ProjectCard
                key={id}
                {...projectData}
                onPressAction={actionRoute ? () => router.push(actionRoute) : undefined}
              />
            ))}
            {filteredProjects.length === 0 ? (
              <Text style={styles.emptyState}>Proyek tidak ditemukan.</Text>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 64,
    paddingHorizontal: 24,
  },
  heroContainer: {
    marginHorizontal: -32,
    marginTop: -24,
  },
  hero: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingBottom: 28,
  },
  body: {
    marginTop: 28,
    gap: 26,
  },
  title: {
    fontSize: 32,
    color: '#000842',
    fontFamily: 'Poppins_500Medium',
  },
  searchField: {
    marginTop: 8,
  },
  list: {
    gap: 22,
  },
  emptyState: {
    textAlign: 'center',
    fontSize: 15,
    color: '#8D8DAA',
    fontFamily: 'Poppins_400Regular',
  },
});
