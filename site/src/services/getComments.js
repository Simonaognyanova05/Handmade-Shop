import { db } from '../config/firebase';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

export async function getComments(productId) {
    try {
        const q = query(
            collection(db, "comments"),
            where("productId", "==", productId),
            limit(20)
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error("Грешка при извличане на коментари:", error);
        return [];
    }
}
