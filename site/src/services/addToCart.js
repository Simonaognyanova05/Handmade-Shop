import { db } from "../config/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

/**
 * Добавя продукт в количката на даден потребител
 */
export async function addToCart(userId, product, options = {}) {
    try {
        const cartRef = collection(db, "users", userId, "cart");
        const docRef = await addDoc(cartRef, {
            ...product,
            ...options,
            createdAt: new Date(),
        });
        return { id: docRef.id, ...product, ...options };
    } catch (err) {
        console.error("addToCart error:", err);
        throw new Error("Неуспешно добавяне в количката!");
    }
}

/**
 * Взима всички продукти от количката на даден потребител
 */
export async function getCart(userId) {
    const cartRef = collection(db, "users", userId, "cart");
    const snapshot = await getDocs(cartRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

/**
 * Премахва конкретен продукт от количката
 */
export async function removeFromCart(userId, cartItemId) {
    const cartItemRef = doc(db, "users", userId, "cart", cartItemId);
    await deleteDoc(cartItemRef);
}
