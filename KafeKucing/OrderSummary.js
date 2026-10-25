import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function OrderSummary({ totalCount, totalHarga }) {
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

const styles = StyleSheet.create({
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
});