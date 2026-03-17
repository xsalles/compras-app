import { Image, Text, View } from "react-native";
import { styles } from "@/app/Home/styles";
import Button from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/Input";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContent}>
        <Image source={require("@/assets/icon.png")} style={styles.logo} />

        <View style={styles.form}>
          <Input placeholder="O que você precisa comprar?" />
          <Button title="Adicionar" />
        </View>
      </View>

      <View style={styles.content}>
        <Text>Lista de compras</Text>
      </View>
    </SafeAreaView>
  );
}
