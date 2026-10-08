import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import DiaryCard from '../components/DiaryCard';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    imageSource: require('../../assets/moods/kei.jpeg'), // Memakai foto lokal
    moodType: 'calm',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    imageSource: 'https://picsum.photos/seed/focus/80',
    moodType: 'focus',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    imageSource: 'https://picsum.photos/seed/calm/80',
    moodType: 'calm',
  },
  {
    id: 4,
    title: 'Ngopi Sore',
    date: '2025-10-03',
    preview: 'Duduk santai di kedai kopi sambil menulis rencana minggu depan...',
    imageSource: 'https://picsum.photos/seed/coffee/80',
    moodType: 'happy',
  },
  {
    id: 5,
    title: 'Olahraga Pagi',
    date: '2025-10-02',
    preview: 'Jogging keliling kompleks perumahan agar tubuh tetap bugar...',
    imageSource: 'https://picsum.photos/seed/run/80',
    moodType: 'happy',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header dengan Avatar Pengguna */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Buku Harian</Text>
        <Image
          source={{ uri: 'https://picsum.photos/seed/avatar123/100' }}
          style={styles.avatar}
        />
      </View>

      {/* Daftar Kartu Diary */}
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          imageSource={entry.imageSource}
          moodType={entry.moodType}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: '#3b82f6',
  },
});