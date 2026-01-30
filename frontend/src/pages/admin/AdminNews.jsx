// src/pages/admin/AdminNews.jsx - COMPLETELY FIXED
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { 
  Newspaper, 
  PlusCircle, 
  Calendar, 
  Eye, 
  Edit, 
  Trash2, 
  Search, 
  AlertCircle 
} from 'lucide-react';
import api from '../../utils/api';
import AdminNavbar from './AdminNavbar'; // ✅ Reuse the separate navbar

export default function AdminNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchNews();
  }, [navigate]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError('');
      
      const res = await api.get('public/news/');
      
      let newsData = [];
      if (res.data && Array.isArray(res.data)) {
        newsData = res.data[1]
          .filter(item => item?.id !== undefined && item.title)
          .map(item => ({
            id: item.id,
            title: item.title || 'Untitled News',
            content: item.content || '',
            excerpt: item.excerpt || '',
            date_posted: item.date_posted || new Date().toISOString(),
            image: item.image || null,
            shortContent: String(item.content || '').substring(0, 100) + '...',
            formattedDate: formatDate(item.date_posted)
          }));
      } else if (res.data && typeof res.data === 'object') {
        const newsArray = Object.values(res.data);
        newsData = newsArray
          .filter(item => item?.id !== undefined)
          .map(item => ({
            id: item.id,
            title: item.title || 'Untitled News',
            content: item.content || '',
            excerpt: item.excerpt || '',
            date_posted: item.date_posted || new Date().toISOString(),
            image: item.image || null,
            shortContent: String(item.content || '').substring(0, 100) + '...',
            formattedDate: formatDate(item.date_posted)
          }));
      } else {
        console.warn('Unexpected news data format:', res.data);
      }
      
      setNews(newsData);
      
    } catch (err) {
      console.error('Failed to load news:', err);
      setError('Failed to load news. Please try again.');
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredNews = news.filter(item => {
    if (!item) return false;
    const searchLower = searchTerm.toLowerCase();
    return [item.title, item.content, item.excerpt].some(field => field?.toLowerCase().includes(searchLower));
  });

  const handleDelete = async (id, title) => {
    if (!id) {
      Swal.fire({ icon: 'error', title: 'Invalid ID', text: 'Cannot delete this news item.' });
      return;
    }

    const result = await Swal.fire({
      title: `Are you sure you want to delete "${title}"?`,
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`admin/news/delete/${id}/`);
        setNews(news.filter(item => item.id !== id));
        Swal.fire({ icon: 'success', title: 'Deleted!', text: `"${title}" has been deleted.`, timer: 2000, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: 'error', title: 'Error', text: 'Failed to delete news. Please try again.' });
      }
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    try {
      return new Date(dateString).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
    } catch {
      return 'Invalid date';
    }
  };

  return (
    <div className="admin-dashboard">
      <AdminNavbar /> {/* ✅ Reused */}

      <div className="dashboard-content">
        <div className="dashboard-header">
          <div className="header-actions">
            <div>
              <h1>News Management</h1>
              <p>Manage news articles and announcements</p>
            </div>
            <Link to="/admin/news/create" className="btn-primary">
              <PlusCircle size={18} />
              Add New News
            </Link>
          </div>
        </div>

        {error && (
          <div className="error-banner" style={{ background: '#ffebee', color: '#c62828', padding:'1rem', borderRadius:'8px', marginBottom:'1rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
            <AlertCircle size={20} />
            <span>{error}</span>
            <button onClick={fetchNews} style={{ marginLeft:'auto', background:'#c62828', color:'white', border:'none', padding:'0.5rem 1rem', borderRadius:'4px', cursor:'pointer' }}>Retry</button>
          </div>
        )}

        <div className="search-box" style={{ marginBottom:'2rem' }}>
          <Search size={18} />
          <input type="text" placeholder="Search news by title or content..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        <div className="news-container">
          {loading ? (
            <div className="loading">Loading news...</div>
          ) : filteredNews.length > 0 ? (
            <div className="news-grid">
              {filteredNews.map(item => (
                <NewsCard 
                  key={item.id} 
                  item={item} 
                  onEdit={() => navigate(`/admin/news/edit/${item.id}`)}
                  onDelete={() => handleDelete(item.id, item.title)}
                  onView={() => navigate(`/news/${item.id}`)}
                />
              ))}
            </div>
          ) : (
            <div className="no-news" style={{ textAlign:'center', padding:'3rem', color:'#666' }}>
              <Newspaper size={48} color="#ccc" />
              <h3>No news found</h3>
              <p>{news.length > 0 ? 'Try changing your search terms' : 'No news articles available'}</p>
              <Link to="/admin/news/create" className="btn-primary"><PlusCircle size={18} /> Create News</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// NewsCard component remains unchanged
const NewsCard = ({ item, onEdit, onDelete, onView }) => {
  if (!item) return null;

  return (
    <div className="news-card" style={{ background:'white', borderRadius:'12px', padding:'1.5rem', boxShadow:'0 2px 8px rgba(0,0,0,0.1)', border:'1px solid #e0e0e0' }}>
      <div className="news-header" style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'1rem' }}>
        <div style={{ flex:1 }}>
          <h3 style={{ margin:'0 0 0.5rem 0', color:'#1c236d', fontSize:'1.2rem', lineHeight:'1.4' }}>{item.title}</h3>
          <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', color:'#666', fontSize:'0.9rem' }}>
            <Calendar size={14} />
            <span>{item.formattedDate}</span>
          </div>
        </div>
      </div>
      <div className="news-content" style={{ marginBottom:'1.5rem' }}>
        <p style={{ margin:'0 0 1rem 0', color:'#555', lineHeight:1.5, fontSize:'0.95rem' }}>{item.shortContent}</p>
      </div>
      <div className="news-actions" style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap' }}>
        <button onClick={onView} style={{ background:'transparent', color:'#1c236d', border:'1px solid #1c236d', padding:'0.5rem 1rem', borderRadius:'6px', display:'flex', alignItems:'center', gap:'0.5rem' }}><Eye size={14} /> View</button>
        <button onClick={onEdit} style={{ background:'#1c236d', color:'white', border:'none', padding:'0.5rem 1rem', borderRadius:'6px', display:'flex', alignItems:'center', gap:'0.5rem' }}><Edit size={14} /> Edit</button>
        <button onClick={onDelete} style={{ background:'transparent', color:'#d32f2f', border:'1px solid #d32f2f', padding:'0.5rem 1rem', borderRadius:'6px', display:'flex', alignItems:'center', gap:'0.5rem' }}><Trash2 size={14} /> Delete</button>
      </div>
    </div>
  );
};
