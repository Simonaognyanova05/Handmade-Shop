import { db } from "../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function writeComment(commentData) {
    try {
        const docRef = await addDoc(collection(db, "comments"), {
            names: commentData.names,
            comment: commentData.comment,
            productId: commentData.productId, // ← добавено!
            createdAt: new Date()
        });

        return { id: docRef.id, ...commentData, status: 200 };
    } catch (error) {
        console.error("Firestore Error:", error);
        throw new Error("Error writing comment!");
    }
}
