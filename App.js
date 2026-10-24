import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

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

function MenuItem({
  nama,
  harga,
  gambar,
  deskripsi,
  warna,
  kategori,
  onTambahPesanan,
  onHapusPesanan,
}) {
  const [qty, setQty] = useState(0);

  const tambah = () => {
    setQty((jumlahLama) => jumlahLama + 1);
    onTambahPesanan(harga);
  };

  const kurangi = () => {
    if (qty > 0) {
      setQty((jumlahLama) => jumlahLama - 1);
      onHapusPesanan(harga);
    }
  };

  return (
    <View style={styles.menuCard}>
      <View style={[styles.menuImageArea, { backgroundColor: warna }]}>
        <Image
          source={gambar}
          style={styles.menuImage}
          resizeMode="cover"
        />

        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{kategori}</Text>
        </View>
      </View>

      <View style={styles.menuDetails}>
        <Text style={styles.menuName}>{nama}</Text>
        <Text style={styles.menuDescription}>{deskripsi}</Text>

        <View style={styles.priceQuantityRow}>
          <View style={styles.priceArea}>
            <Text style={styles.priceLabel}>Harga</Text>
            <Text style={styles.menuPrice}>
              Rp{harga.toLocaleString('id-ID')}
            </Text>
          </View>

          <View style={styles.quantityArea}>
            <Text style={styles.priceLabel}>Jumlah</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={[
                  styles.minusButton,
                  qty === 0 && styles.disabledButton,
                ]}
                onPress={kurangi}
                activeOpacity={0.7}
              >
                <Text style={styles.minusText}>−</Text>
              </TouchableOpacity>

              <Text style={styles.quantityNumber}>{qty}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={tambah}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>+ Tambah Pesanan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function OrderSummary({ totalCount, totalHarga }) {
  return (
    <View style={styles.summaryCard}>
      <Text style={styles.summaryHeading}>TOTAL PESANAN</Text>

      <View style={styles.summaryMain}>
        <View>
          <Text style={styles.totalCount}>{totalCount}</Text>
          <Text style={styles.summaryCaption}>
            Total Menu Yang Dipesan
          </Text>
        </View>

        <View style={styles.totalPriceArea}>
          <Text style={styles.summaryCaption}>Total harga</Text>
          <Text style={styles.totalPrice}>
            Rp{totalHarga.toLocaleString('id-ID')}
          </Text>
        </View>
      </View>

      {totalCount >= 5 && (
        <View style={styles.promoCard}>
          <Text style={styles.promoEmoji}>🎉</Text>
          <View style={styles.promoContent}>
            <Text style={styles.promoTitle}>Promo spesial!</Text>
            <Text style={styles.promoText}>
              Selamat! Anda Mendapatkan Diskon 10%
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

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
            <Text style={styles.welcomeTitle}>Selamat Datang</Text>
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

  summaryCard: {
    backgroundColor: '#F5DCE8',
    borderRadius: 30,
    padding: 25,
  },

  summaryHeading: {
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 2,
    color: '#A05279',
  },

  summaryMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 24,
  },

  totalCount: {
    fontSize: 48,
    fontWeight: '900',
    color: '#634052',
  },

  summaryCaption: {
    fontSize: 14,
    color: '#927286',
  },

  totalPriceArea: {
    alignItems: 'flex-end',
    flex: 1,
    marginLeft: 10,
  },

  totalPrice: {
    fontSize: 23,
    fontWeight: '900',
    color: '#AD507E',
    marginTop: 5,
    textAlign: 'right',
  },

  promoCard: {
    backgroundColor: '#E4F2E8',
    borderRadius: 22,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },

  promoEmoji: {
    fontSize: 34,
  },

  promoContent: {
    flex: 1,
  },

  promoTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#287849',
    marginBottom: 5,
  },

  promoText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#287849',
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

  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#F3DCE7',
    marginBottom: 25,
  },

  menuImageArea: {
    height: 310,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },

  menuImage: {
    width: '100%',
    height: '100%',
  },

  categoryBadge: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingHorizontal: 17,
    paddingVertical: 10,
  },

  categoryText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#AD507E',
    letterSpacing: 1.5,
  },

  menuDetails: {
    padding: 22,
  },

  menuName: {
    fontSize: 22,
    fontWeight: '900',
    color: '#634052',
  },

  menuDescription: {
    fontSize: 15,
    color: '#9B788A',
    marginTop: 6,
  },

  priceQuantityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },

  priceArea: {
    flex: 1,
  },

  priceLabel: {
    fontSize: 14,
    color: '#9B788A',
    marginBottom: 8,
  },

  menuPrice: {
    fontSize: 18,
    fontWeight: '900',
    color: '#AD507E',
  },

  quantityArea: {
    alignItems: 'center',
    backgroundColor: '#FFF0F6',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  minusButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F2D2E1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  disabledButton: {
    opacity: 0.4,
  },

  minusText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#934568',
    lineHeight: 26,
  },

  quantityNumber: {
    fontSize: 17,
    fontWeight: '900',
    color: '#634052',
    minWidth: 12,
    textAlign: 'center',
  },

  addButton: {
    backgroundColor: '#AD507E',
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 22,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  footer: {
    textAlign: 'center',
    fontSize: 13,
    color: '#9B788A',
    marginTop: 5,
    marginBottom: 30,
  },
});