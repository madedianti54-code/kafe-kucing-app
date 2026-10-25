import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import MenuItem from './KafeKucing/MenuItem';
import OrderSummary from './KafeKucing/OrderSummary';

const DAFTAR_MENU = [
  {
    nama: 'Kopi Susu Catnip',
    harga: 20000,
    gambar: require('./assets/Kopi Susu.png'),
    deskripsi: 'coffee Latte',
    warna: '#F8E6ED',
    kategori: 'CAT CAFE',
  },
  {
    nama: 'Matcha Paw Latte',
    harga: 25000,
    gambar: require('./assets/Matcha.png'),
    deskripsi: 'Matcha Creamy',
    warna: '#E8F0E4',
    kategori: 'PAW FAVORITE',
  },
  {
    nama: 'Croissant Ikan Tuna',
    harga: 18000,
    gambar: require('./assets/Croissant.png'),
    deskripsi: 'Savory Tuna Croissant',
    warna: '#F8EBDD',
    kategori: 'CAT SNACK',
  },
];

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);

  const tambahPesanan = (harga) => {
    setTotalPesanan((jumlahLama) => jumlahLama + 1);
    setTotalHarga((hargaLama) => hargaLama + harga);
  };

  const hapusPesanan = (harga) => {
    setTotalPesanan((jumlahLama) =>
      Math.max(0, jumlahLama - 1)
    );
    setTotalHarga((hargaLama) =>
      Math.max(0, hargaLama - harga)
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFF7FA"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Kafe Kucing</Text>
        </View>

        <View style={styles.welcomeCard}>
          <Text style={styles.catEmoji}>🐈</Text>
          <View style={styles.welcomeTextArea}>
            <Text style={styles.welcomeTitle}>
              Selamat Datang
            </Text>
            <Text style={styles.welcomeSubtitle}>
              Tempat Bersantai Untuk Pecinta Kucing
            </Text>
          </View>
        </View>

        <View style={styles.summaryWrapper}>
          <OrderSummary
            totalCount={totalPesanan}
            totalHarga={totalHarga}
          />
        </View>

        <View style={styles.menuSection}>
          <View style={styles.menuHeadingRow}>
            <View>
              <Text style={styles.sectionTitle}>Menu</Text>
              <Text style={styles.sectionSubtitle}>
                Dibuat dengan cinta untukmu
              </Text>
            </View>
            <Text style={styles.pawEmoji}>🐾</Text>
          </View>

          {DAFTAR_MENU.map((item) => (
            <MenuItem
              key={item.nama}
              nama={item.nama}
              harga={item.harga}
              gambar={item.gambar}
              deskripsi={item.deskripsi}
              warna={item.warna}
              kategori={item.kategori}
              onTambahPesanan={tambahPesanan}
              onHapusPesanan={hapusPesanan}
            />
          ))}

          <Text style={styles.footer}>
            Terimakasi Telah Telah Datang Ke kafe Kucing Kami
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7FA',
  },
  header: {
    paddingTop: 18,
    paddingBottom: 8,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 43,
    fontWeight: '900',
    color: '#AD507E',
    letterSpacing: -1.5,
  },
  welcomeCard: {
    marginHorizontal: 20,
    marginTop: 4,
    padding: 20,
    minHeight: 112,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: '#F4DCE7',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  catEmoji: {
    fontSize: 48,
  },
  welcomeTextArea: {
    flex: 1,
  },
  welcomeTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#634052',
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: '#9B788A',
    marginTop: 7,
    lineHeight: 21,
  },
  summaryWrapper: {
    marginHorizontal: 20,
    marginTop: 28,
  },
  menuSection: {
    marginHorizontal: 20,
    marginTop: 34,
  },
  menuHeadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#634052',
  },
  sectionSubtitle: {
    fontSize: 15,
    color: '#9B788A',
    marginTop: 5,
  },
  pawEmoji: {
    fontSize: 34,
  },
  footer: {
    textAlign: 'center',
    fontSize: 13,
    color: '#9B788A',
    marginTop: 5,
    marginBottom: 30,
  },
});