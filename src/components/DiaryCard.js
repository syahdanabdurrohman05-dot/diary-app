import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DiaryCard({ title, date, preview, imageSource, moodType }) {
  // Variasi border berdasarkan mood
  const getMoodBorderStyle = (type) => {
    switch (type) {
      case 'happy':
        return { borderColor: '#f59e0b', borderWidth: 2 }; // Kuning
      case 'focus':
        return { borderColor: '#3b82f6', borderWidth: 2 }; // Biru
      case 'calm':
        return { borderColor: '#10b981', borderWidth: 2 }; // Hijau
      default:
        return { borderColor: '#e5e7eb', borderWidth: 1 }; // Default abu-abu
    }
  };

  return (
    <View style={[styles.card, getMoodBorderStyle(moodType)]}>
      <Image
        source={typeof imageSource === 'string' ? { uri: imageSource } : imageSource}
        style={styles.mood}
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#ffffff',
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
  },
});