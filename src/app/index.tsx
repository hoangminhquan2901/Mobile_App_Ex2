import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Khối 1 */}
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.text}>1</Text>
        </View>

        {/* Khối 2 */}
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.text}>2</Text>
        </View>

        {/* Hàng 3, 4, 5 và 1 cột trống */}
        <View style={styles.row}>
          <View style={[styles.box, styles.box3]}>
            <Text style={styles.textDark}>3</Text>
          </View>
          <View style={[styles.box, styles.box4]}>
            <Text style={styles.text}>4</Text>
          </View>
          <View style={[styles.box, styles.box5]}>
            <Text style={styles.text}>5</Text>
          </View>
          {/* Cột trắng thứ 4 */}
          <View style={styles.emptyBox} />
        </View>

        {/* Khối 6 */}
        <View style={[styles.box, styles.box6]}>
          <Text style={styles.text}>6</Text>
        </View>
      </View>

      {/* Footer ở sát đáy màn hình */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Hoàng Minh Quân - BIT240191</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 50,
  },
  content: {
    paddingHorizontal: 8,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    marginBottom: 8,
  },
  text: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textDark: {
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
  },

  // Khối 1 & 2
  box1: {
    backgroundColor: '#2196F3',
    height: 70,
  },
  box2: {
    backgroundColor: '#FF3D00',
    height: 70,
  },

  // Hàng gồm 4 cột (3, 4, 5 và 1 cột trống)
  row: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  box3: {
    backgroundColor: '#FFC107',
    flex: 1,
    height: 150,
    marginBottom: 0,
  },
  box4: {
    backgroundColor: '#2E7D32',
    flex: 1,
    height: 150,
    marginBottom: 0,
  },
  box5: {
    backgroundColor: '#7E57C2',
    flex: 1,
    height: 150,
    marginBottom: 0,
  },
  emptyBox: {
    flex: 1,
    height: 150,
  },

  // Khối 6
  box6: {
    backgroundColor: '#FF6D00',
    height: 100,
  },

  // Footer ở sát đáy
  footer: {
    marginTop: 'auto',
    marginBottom: 5, // Giảm margin để đẩy chữ xuống vị trí sát viền đáy
    alignItems: 'center',
  },
  footerText: {
    fontSize: 15,
    color: '#1a1a1a',
    fontWeight: '500',
  },
});