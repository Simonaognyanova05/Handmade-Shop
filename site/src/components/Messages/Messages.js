import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

export default function Messages() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchComments() {
            try {
                const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
                const snapshot = await getDocs(q);
                const list = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setMessages(list);
            } catch (error) {
                console.error("Error fetching comments:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchComments();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure that this message has been read?");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "messages", id));
            setMessages((prev) => prev.filter((p) => p.id !== id));
            navigate('/messages');
        } catch (error) {
            console.error("Error while deleting:", error);
            alert("An error occurred while deleting the article.");
        }
    };

    if (loading) {
        return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;
    }

    return (
        <div className="comments-page container py-5">
            <div className="text-center mb-5" style={{ marginTop: "100px" }}>
                <h2 className="fw-bold">💬 Customer Messages</h2>
                <p className="text-muted">Read what our client say abaout us</p>
            </div>

            {messages.length === 0 ? (
                <p className="text-center text-muted">No messages yet.</p>
            ) : (
                <div className="row g-4">
                    {messages.map((c) => (
                        <div className="col-12 col-md-6 col-lg-4" key={c.id}>
                            <div className="card shadow-sm border-0 h-100 comment-card">
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <p className="comment-text mb-3">
                                        <i className="fa fa-quote-left text-secondary me-2"></i>
                                        {c.message}
                                    </p>
                                    <h4>
                                        {c.name}
                                    </h4>
                                    <p>{c.email}</p>
                                    <div className="mt-auto text-end">
                                        <h6 className="mb-0 fw-bold text-primary">{c.names}</h6>
                                        <small className="text-muted">
                                            {c.createdAt?.toDate
                                                ? c.createdAt.toDate().toLocaleDateString("bg-BG")
                                                : ""}
                                        </small>
                                    </div>
                                    <div className="product-actions">
                                        <button className="btn delete-btn" style={{ margin: '20px' }} onClick={() => handleDelete(c.id)}>
                                            Mark as Read
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
}
