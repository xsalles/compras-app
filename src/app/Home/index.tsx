import { Image, View } from 'react-native';
import { styles } from '@/app/Home/styles';
import Button from '@/components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';


export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContent}>
        <Image
          source={require('@/assets/icon.png')}
          style={styles.logo}
        />

        <Button title='Adicionar' />

      </View>
    </SafeAreaView>
  );
}


