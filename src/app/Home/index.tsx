import { Alert, FlatList, Image, Text, View } from "react-native";
import { styles } from "@/app/Home/styles";
import Button from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/Input";
import Filter from "@/components/Filter";
import { FilterStatus } from "@/types/components/Filter/index";
import { useState } from "react";
import Item from "@/components/Item";
import { ItemProps } from "@/types/components/Item";
import { getAllItems, ItemStorageProps } from "@/storage/itemsStorage";

export function Home() {
  const [filter, setFilter] = useState<FilterStatus>(
    FilterStatus.PENDING,
  );

  const [itemsList, setItemsList] = useState<ItemStorageProps[]>([]);

  useState(async () => {
    setItemsList(await getAllItems());
  });

  const filteredItems = itemsList.filter((item) => item.status === filter);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContent}>
        <Image source={require("@/assets/icon.png")} style={styles.logo} />

        <View style={styles.form}>
          <Input placeholder="O que você precisa comprar?" onChangeText={(value) => setNameItem(value)} />
          <Button title="Adicionar" onPress={() => 
handleAddItem()
          } />
        </View>
      </View>

      <View style={styles.content}>
        <Filter
          statusSelected={filter}
          onPress={(status: FilterStatus) => setFilter(status)}
        />

        <FlatList
          data={filteredItems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              name={item.name}
              ownStatus={item.ownStatus}
              statusSelected={filter}
            />
          )}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          ListEmptyComponent={() => {
            return <Text style={styles.textEmptyList}>Nenhum item encontrado.</Text>;
          }}
        />
      </View>
    </SafeAreaView>
  );
}
