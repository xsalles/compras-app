  import { Image, Text, View } from "react-native";
  import { styles } from "@/app/Home/styles";
  import Button from "@/components/Button";
  import { SafeAreaView } from "react-native-safe-area-context";
  import Input from "@/components/Input";
  import Filter from "@/components/Filter";
  import { FilterStatus } from "@/types/components/Filter/index";
  import { useState } from "react";
import Item from "@/components/Item";

  export function Home() {
    const [statusSelected, setStatusSelected] = useState<FilterStatus>(FilterStatus.PENDING);

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
          <Filter statusSelected={statusSelected} onPress={(status: FilterStatus) => setStatusSelected(status)} />

          <Item name="Banana" ownStatus={FilterStatus.PENDING} statusSelected={statusSelected} />
          <Item name="Maçã" ownStatus={FilterStatus.BOUGHTS} statusSelected={statusSelected} />
          <Item name="Pão" ownStatus={FilterStatus.PENDING} statusSelected={statusSelected} />
          <Item name="Leite" ownStatus={FilterStatus.BOUGHTS} statusSelected={statusSelected} />
        </View>

        
      </SafeAreaView>
    );
  }
