import { db } from '../config/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

export async function getComments() {
    try {
        const q = query(
            collection(db, "comments"),
            orderBy("createdAt", "desc"),
            limit(10)
        );

        const querySnapshot = await getDocs(q);
        const comments = [];

        querySnapshot.forEach((doc) => {
            comments.push({ id: doc.id, ...doc.data() });
        });

        return comments;
    } catch (error) {
        console.error("Грешка при извличането на коментарите: ", error);
        return [];
    }
}
