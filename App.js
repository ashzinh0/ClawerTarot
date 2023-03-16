import { Text, View } from 'react-native';
import { backgrounds, letters } from './css';

export default function background() { 
  return (
    <View style={backgrounds.container}>
      <Text style={letters.container}>Oioi</Text>

  
    </View>

  );
}