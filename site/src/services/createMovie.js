import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function createMovie(movieData) {
    try {
        const docRef = await addDoc(collection(db, "movies"), {
            title: movieData.title,
            ganre: movieData.ganre,
            description: movieData.description,
            img1: movieData.img1,

            createdAt: new Date()
        });

        return { id: docRef.id, ...movieData };
    } catch (error) {
        console.error("Firestore Error:", error);
        throw new Error("Възникна грешка при създаване на продукта!");
    }
}
