import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, Alert, View, StyleSheet } from 'react-native';

// 보이스피싱 번호 목록 (테스트용)
const phishingNumbers = ['01012345678', '01098765432'];

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const checkPhishing = () => {
    if (phishingNumbers.includes(phoneNumber)) {
      Alert.alert('경고', '이 번호는 보이스피싱 번호입니다!');
    } else {
      Alert.alert('안전', '이 번호는 안전합니다.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>보이스피싱 방지 앱</Text>
      <TextInput
        style={styles.input}
        placeholder="전화번호 입력"
        keyboardType="numeric"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
      <Button title="번호 확인" onPress={checkPhishing} />
      <View style={styles.footer}>
        <Text>AI 및 블록체인 기반으로 데이터가 보호됩니다.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    width: '80%',
  },
  footer: {
    marginTop: 40,
    textAlign: 'center',
  },
});

export default App;
