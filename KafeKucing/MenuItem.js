import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function MenuItem({
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
      <View
        style={[
          styles.menuImageArea,
          { backgroundColor: warna },
        ]}
      >
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
          <Text style={styles.addButtonText}>
            + Tambah Pesanan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});