import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
  <View style={styles.ellipse} />
  <Text style={styles.title}>GROW YOUR BUSINESS</Text>
  <Text style={styles.subtitle}>We will help you to grow your business using online server</Text>
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>
  </View>
  
</View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00c4ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  ellipse: {
    width: 140,              // Chiều rộng của hình tròn
    height: 140,             // Chiều cao của hình tròn
    borderRadius: 70,        // Tạo bo tròn để thành hình tròn
    backgroundColor: '00c4ff',// Màu nền trắng cho hình tròn
    borderColor: 'black',    // Màu viền đen
    borderWidth: 15,          // Độ dày của viền
    position: 'absolute',    // Đặt vị trí tuyệt đối
    top: 67,                 // Khoảng cách từ trên xuống 67px
    left: 120,               // Khoảng cách từ trái sang 110px
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    textAlign: 'center',
    position: 'absolute',    // Đặt vị trí tuyệt đối
    top: 297,                 // Khoảng cách từ trên xuống 67px

  },
  subtitle: {
    fontSize: 15,
    color: 'black',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',    // Đặt vị trí tuyệt đối
    top: 417,                 // Khoảng cách từ trên xuống 67px
  },
  buttonContainer: {
    flexDirection: 'row', // Căn các nút theo chiều ngang
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    position: 'absolute',    // Đặt vị trí tuyệt đối
    top: 547,
  },
  button: {
    backgroundColor: '#fdd835', // Màu vàng
    paddingVertical: 12,        // Khoảng cách dọc bên trong nút
    paddingHorizontal: 30,      // Khoảng cách ngang bên trong nút
    borderRadius: 10,           // Bo tròn đều các góc
    marginHorizontal: 10,       // Khoảng cách giữa hai nút
    
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  }
});
