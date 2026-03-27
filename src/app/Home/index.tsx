import { FlatList, Image, Text, View } from "react-native";
import { styles } from "@/app/Home/styles";
import Button from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/Input";
import Filter from "@/components/Filter";
import { FilterStatus } from "@/types/components/Filter/index";
import { useEffect, useState } from "react";
import Item from "@/components/Item";
import {
  getAllItems,
  ItemStorageProps,
  removeAllItems,
  removeItem,
  saveItem,
  updateItemStatus,
} from "@/storage/itemsStorage";

export function Home() {
  const [filter, setFilter] = useState<FilterStatus>(
    FilterStatus.PENDING,
  );

  const [itemsList, setItemsList] = useState<ItemStorageProps[]>([]);
  const [itemName, setItemName] = useState("");

  const filteredItems =
    filter === FilterStatus.NONE
      ? itemsList
      : itemsList.filter((item) => item.status === filter);
  
  useEffect(() => {
    const loadItems = async () => {
      setItemsList(await getAllItems());
    };

    loadItems();
  }, []);

  const loadItems = async () => {
    setItemsList(await getAllItems());
  };

  const handleAddItem = async () => {
    const name = itemName.trim();
    if (!name) return;

    const nextId =
      itemsList.length === 0
        ? 1
        : Math.max(...itemsList.map((item) => item.id)) + 1;

    await saveItem({
      id: nextId,
      name,
      status: FilterStatus.PENDING,
    });

    setItemName("");
    setFilter(FilterStatus.PENDING);
    await loadItems();
  };

  const handleRemoveAllItems = async () => {
    await removeAllItems();
    setItemsList([]);
    setFilter(FilterStatus.PENDING);
  };

  const handleChangeFilter = async (status: FilterStatus) => {
    if (status === FilterStatus.NONE) {
      await handleRemoveAllItems();
      return;
    }

    setFilter(status);
  };


  const handleRemoveItem = async (id: number) => {
    await removeItem(id);
    await loadItems();
  };

  const handleChangeItemStatus = async (id: number, status: FilterStatus) => {
    await updateItemStatus(id, status);
    await loadItems();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContent}>
        <Image source={require("@/assets/icon.png")} style={styles.logo} />

        <View style={styles.form}>
          <Input
            placeholder="O que você precisa comprar?"
            value={itemName}
            onChangeText={(value) => setItemName(value)}
          />
          <Button title="Adicionar" onPress={handleAddItem} />
        </View>
      </View>

      <View style={styles.content}>
        <Filter
          statusSelected={filter}
          onPress={(status: FilterStatus) => handleChangeFilter(status)}
        />

        <FlatList
          data={filteredItems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              name={item.name}
              ownStatus={item.status}
              statusSelected={filter}
              onRemove={handleRemoveItem}
              onChangeStatus={(status) => handleChangeItemStatus(item.id, status)}
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
