import { FlatList, Image, Text, View } from "react-native";
import { styles } from "@/app/Home/styles";
import Button from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/Input";
import Filter from "@/components/Filter";
import { FilterStatus } from "@/types/components/Filter/index";
import { useState } from "react";
import Item from "@/components/Item";
import { ItemProps } from "@/types/components/Item";

const items: ItemProps[] = [
  {
    id: 1,
    name: "Item 1",
    ownStatus: FilterStatus.PENDING,
    statusSelected: FilterStatus.PENDING,
  },
  {
    id: 2,
    name: "Item 2",
    ownStatus: FilterStatus.BOUGHTS,
    statusSelected: FilterStatus.PENDING,
  },
  {
    id: 3,
    name: "Item 3",
    ownStatus: FilterStatus.PENDING,
    statusSelected: FilterStatus.BOUGHTS,
  },
  {
    id: 4,
    name: "Item 4",
    ownStatus: FilterStatus.BOUGHTS,
    statusSelected: FilterStatus.BOUGHTS,
  },
  {
    id: 5,
    name: "Item 5",
    ownStatus: FilterStatus.PENDING,
    statusSelected: FilterStatus.PENDING,
  },
  {
    id: 6,
    name: "Item 6",
    ownStatus: FilterStatus.BOUGHTS,
    statusSelected: FilterStatus.PENDING,
  },
  {
    id: 7,
    name: "Item 7",
    ownStatus: FilterStatus.PENDING,
    statusSelected: FilterStatus.BOUGHTS,
  },
  {
    id: 8,
    name: "Item 8",
    ownStatus: FilterStatus.PENDING,
    statusSelected: FilterStatus.BOUGHTS,
  },
  {
    id: 9,
    name: "Item 9",
    ownStatus: FilterStatus.PENDING,
    statusSelected: FilterStatus.BOUGHTS,
  },
  {
    id: 10,
    name: "Item 10",
    ownStatus: FilterStatus.PENDING,
    statusSelected: FilterStatus.BOUGHTS,
  },
  {
    id: 11,
    name: "Item 11",
    ownStatus: FilterStatus.PENDING,
    statusSelected: FilterStatus.BOUGHTS,
  },
];

export function Home() {
  const [filter, setFilter] = useState<FilterStatus>(
    FilterStatus.PENDING,
  );

  const [nameItem, setNameItem] = useState<string>("");

  const [itemsList, setItemsList] = useState<ItemProps[]>(items);

  const filteredItems = itemsList.filter((item) => item.ownStatus === filter);

  function handleAddItem() {
    setItemsList((prevState) => {
      const newItem: ItemProps = {
        id: prevState.length + 1,
        name: nameItem,
        ownStatus: FilterStatus.PENDING,
        statusSelected: filter,
      };
      return [...prevState, newItem];
    });
  }


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
