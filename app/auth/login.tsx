import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)');
    } catch (error: any) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <View className="flex-1 justify-center px-6">
      <Text className="text-2xl font-bold mb-4">Sign In</Text>
      <TextInput placeholder="Email" className="border p-2 mb-2" onChangeText={setEmail} />
      <TextInput placeholder="Password" className="border p-2 mb-4" secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
      <Text className="mt-4 text-blue-600" onPress={() => router.push('/auth/signup')}>
        Create account
      </Text>
    </View>
  );
}
