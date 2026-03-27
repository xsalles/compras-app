import { FilterStatus } from "@/types/components/Filter";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ITEMS_KEY = "@compras_app:items";

export type ItemStorageProps = {
  id: number;
  status: FilterStatus;
  name: string;
};

export async function getAllItems(): Promise<ItemStorageProps[]> {
  try {
    const response = await AsyncStorage.getItem(ITEMS_KEY);

    return response ? JSON.parse(response) : [];
  } catch (error) {
    throw new Error("Não foi possível carregar os itens.");
  }
}

export async function saveItem(item: ItemStorageProps): Promise<void> {
  try {
    const items = await getAllItems();

    const newItem = {
      id: items.length + 1,
      name: item.name,
      status: item.status,
    };

    await AsyncStorage.setItem(ITEMS_KEY, JSON.stringify([...items, newItem]));
  } catch (error) {
    throw new Error("Não foi possível salvar o item.");
  }
}

export async function getByStatus(status: FilterStatus): Promise<ItemStorageProps[]> {
    try {
        const items = await getAllItems();

        return items.filter((item) => item.status === status);
    } catch (error) {
        throw new Error("Não foi possível carregar os itens.");
    }''
}

export async function removeItem(id: number): Promise<void> {
  try {
    const items = await getAllItems();

    const filteredItem = items.filter((item) => item.id === id);
    
    await AsyncStorage.setItem(ITEMS_KEY, JSON.stringify(filteredItem));
  } catch (error) {
    throw new Error("Não foi possível remover o item.");
  }
}