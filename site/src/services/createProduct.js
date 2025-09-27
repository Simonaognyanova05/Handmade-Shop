import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function createProduct(productData) {
    try {
        const docRef = await addDoc(collection(db, "products"), {
            title: productData.title,
            price: Number(productData.price), // за всеки случай -> число
            sizes: productData.sizes,
            createdAt: new Date()
        });

        return { id: docRef.id, ...productData };
    } catch (error) {
        console.error("Firestore Error:", error);
        throw new Error("Възникна грешка при създаване на продукта!");
    }
}
