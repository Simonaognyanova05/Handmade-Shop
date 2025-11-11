import { db } from '../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export async function editMovie(id, updatedData) {
    try {
        const productRef = doc(db, "movies", id);
        await updateDoc(productRef, {
            ...updatedData,
            updatedAt: new Date()
        });

        return { status: 200, message: "Successfully updated!" };
    } catch (error) {
        return { status: 500, message: "Error while editing!" };
    }
}