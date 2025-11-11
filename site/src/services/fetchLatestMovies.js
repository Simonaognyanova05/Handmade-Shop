import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../config/firebase";

export async function fetchLatestMovies() {
    try {
        const q = query(
            collection(db, "movies"),
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
        console.error("Error while loading movies:", error);
    } 
}