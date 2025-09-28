import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function createProduct(productData) {
    try {
        const docRef = await addDoc(collection(db, "products"), {
            title: productData.title,
            priceLv: Number(productData.priceLv), // за всеки случай -> число
            priceEuro: Number(productData.priceEuro), // за всеки случай -> число
            sizes: productData.sizes,
            img1: productData.img1,
            img2: productData.img2,
            img3: productData.img3,
            img4: productData.img4,
            img5: productData.img5,

            createdAt: new Date()
        });

        return { id: docRef.id, ...productData };
    } catch (error) {
        console.error("Firestore Error:", error);
        throw new Error("Възникна грешка при създаване на продукта!");
    }
}
