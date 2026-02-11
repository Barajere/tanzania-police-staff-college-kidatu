import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../utils/api";

export default function News() {
  const { id } = useParams(); // Detect if viewing a single news article
  const [newsList, setNewsList] = useState([]);
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("public/news/") // Fetch all news
      .then(res => {
        // Adjust for your API structure (res.data[1] contains the news array)
        const allNews = Array.isArray(res.data[1]) ? res.data[1] : res.data;

        if (id) {
          // Single news view: find by numeric ID
          const item = allNews.find(n => n.id === Number(id));
          if (!item) {
            setError("News not found.");
          } else {
            setNewsItem(item);
          }
        } else {
          // News list view
          setNewsList(allNews);
        }

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(id ? "Failed to load news item." : "Failed to load news.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading news...</div>;
  if (error) return <div>{error}</div>;

  // --- Single News View ---
  if (id && newsItem) {
    return (
      <div className="news-page" style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <h1>{newsItem.title}</h1>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          <em>{new Date(newsItem.date_posted).toLocaleDateString()}</em>
        </p>
        {newsItem.image && (
          <img
            src={newsItem.image}
            alt={newsItem.title}
            style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
        <div style={{ marginTop: "30px" }}>
          <Link to="/news" style={{ color: "#007BFF" }}>
            ← Back to All News
          </Link>
        </div>
      </div>
    );
  }

  // --- News List View ---
  return (
    <div className="news-page" style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      <h1>Latest News</h1>
      {newsList.length === 0 ? (
        <p>No news available at the moment.</p>
      ) : (
        <div className="news-list" style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {newsList.map(item => (
            <div key={item.id} className="news-item" style={{ display: "flex", gap: "20px", borderBottom: "1px solid #ddd", paddingBottom: "20px" }}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "200px", height: "auto", borderRadius: "6px", objectFit: "cover" }}
                />
              )}
              <div style={{ flex: 1 }}>
                <h2>{item.title}</h2>
                <p style={{ color: "#666", marginBottom: "12px" }}>
                  <em>{new Date(item.date_posted).toLocaleDateString()}</em>
                </p>
                <div dangerouslySetInnerHTML={{ __html: item.content.substring(0, 200) + "..." }} />
                <div style={{ marginTop: "10px" }}>
                  <Link to={`/news/${item.id}`} style={{ color: "#007BFF" }}>
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
