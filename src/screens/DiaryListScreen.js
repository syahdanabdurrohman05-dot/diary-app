import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';
import { COLORS, SPACE, TYPO, BREAKPOINTS } from '../styles/tokens';

const DATA = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit...',
    body: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk dan suasana sangat damai untuk memulai aktivitas hari ini.',
    imageSource: require('../../assets/moods/kei.jpeg'),
    heroUri: 'https://picsum.photos/seed/happyhero/800/450',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim...',
    body: 'Menyelesaikan modul praktikum dan berdiskusi bersama tim mengenai desain UI. Banyak wawasan baru tentang Flexbox dan layout responsif.',
    moodUri: 'https://picsum.photos/seed/focus/200',
    heroUri: 'https://picsum.photos/seed/focushero/800/450',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit...',
    body: 'Menikmati senja sambil membaca buku favorit di bangku taman kota. Warna langit senja jingga keemasan sangat menenangkan pikiran.',
    moodUri: 'https://picsum.photos/seed/calm/200',
    heroUri: 'https://picsum.photos/seed/calmhero/800/450',
  },
  {
    id: 4,
    title: 'Ngopi Sore',
    date: '2025-10-03',
    preview: 'Duduk santai di kedai kopi sambil menulis rencana minggu depan...',
    body: 'Duduk santai di kedai kopi langganan sambil menulis rencana kegiatan minggu depan. Kopi hangat membuat pikiran lebih fokus dan terarah.',
    moodUri: 'https://picsum.photos/seed/coffee/200',
    heroUri: 'https://picsum.photos/seed/coffeehero/800/450',
  },
  {
    id: 5,
    title: 'Olahraga Pagi',
    date: '2025-10-02',
    preview: 'Jogging keliling kompleks perumahan agar tubuh tetap bugar...',
    body: 'Jogging keliling kompleks perumahan sebanyak tiga putaran agar tubuh tetap bugar dan siap menghadapi perkuliahan sepanjang hari.',
    moodUri: 'https://picsum.photos/seed/run/200',
    heroUri: 'https://picsum.photos/seed/runhero/800/450',
  },
];

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  const twoCols = width >= BREAKPOINTS.tablet;
  const [selected, setSelected] = useState(null);

  // Kunci unik FlatList agar otomatis re-render saat orientasi/kolom berubah
  const keyForCols = useMemo(() => (twoCols ? 'grid2' : 'list1'), [twoCols]);

  const renderItem = ({ item }) => (
    <View style={[styles.itemWrap, twoCols && styles.itemWrap2]}>
      <DiaryCard
        title={item.title}
        date={item.date}
        preview={item.preview}
        imageSource={item.imageSource}
        moodUri={item.moodUri}
        variant={twoCols ? 'grid' : 'list'}
        onPress={() => setSelected(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buku Harian</Text>
      <FlatList
        key={keyForCols}
        data={DATA}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(it) => String(it.id)}
        renderItem={renderItem}
        columnWrapperStyle={twoCols ? { gap: SPACE.m } : undefined}
        contentContainerStyle={{
          padding: SPACE.l,
          gap: SPACE.m,
          paddingTop: SPACE.m,
        }}
        ListEmptyComponent={<Text style={styles.empty}>Belum ada entri.</Text>}
      />

      {/* Modal Detail */}
      <DiaryDetailModal
        visible={!!selected}
        entry={selected}
        onClose={() => setSelected(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  header: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.l,
    color: COLORS.text,
  },
  itemWrap: {
    flex: 1,
  },
  itemWrap2: {
    flex: 1 / 2,
  },
  empty: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: 40,
  },
});