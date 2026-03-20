import { FilterStatus } from "@/types/components/Filter";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ITEMS_KEY = "@compras_app:items";

export type ItemStorageProps = {
    id: number;
    status: FilterStatus;
    name: string;
}

export async function getAllItems(): Promise<ItemStorageProps[]> {
    try {
        const response = await AsyncStorage.getItem(ITEMS_KEY);
    
        return response ? JSON.parse(response) : [];
    } catch (error) {
        throw new Error("Não foi possível carregar os itens.");
    }
}