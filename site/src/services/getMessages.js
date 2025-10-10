import { db } from '../config/firebase';
import { collection, query, getDocs } from 'firebase/firestore';

export async function getMessages() {
    try {
        const q = query(collection(db, "messages"));
        const querySnapshot = await getDocs(q);

        const messages = [];
        querySnapshot.forEach((doc) => {
            messages.push({ id: doc.id, ...doc.data() });
        });

        return messages;
    } catch (error) {
        console.error("Грешка при извличане на резервациите: ", error);
        return [];
    }
}