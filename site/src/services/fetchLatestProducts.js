import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../config/firebase";

export async function fetchLatestProducts() {
    try {
        const q = query(
            collection(db, "products"),
            orderBy("createdAt", "desc"),
            limit(3)
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return data;
    } catch (error) {
        console.error("Грешка при зареждане на последните продукти:", error);
    } 
}