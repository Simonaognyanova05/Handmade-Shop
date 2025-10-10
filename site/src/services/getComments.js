import { db } from '../config/firebase';
import { collection, query, getDocs } from 'firebase/firestore';

export async function getComments() {
    try {
        const q = query(collection(db, "comments"));
        const querySnapshot = await getDocs(q);

        const comments = [];
        querySnapshot.forEach((doc) => {
            comments.push({ id: doc.id, ...doc.data() });
        });

        return comments;
    } catch (error) {
        console.error("Грешка при извличане на резервациите: ", error);
        return [];
    }
}