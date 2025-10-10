import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function writeComment(commentData) {
    try {
        const docRef = await addDoc(collection(db, "comments"), {
            names: commentData.names,
            comment: commentData.comment,
            createdAt: new Date()
        });

        return { id: docRef.id, ...commentData, status: 200 };
    } catch (error) {
        console.error("Firestore Error:", error);
        throw new Error("Възникна грешка при създаване на продукта!");
    }
}
