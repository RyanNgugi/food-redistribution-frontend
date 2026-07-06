import { useEffect, useState } from 'react';

const BACKEND_URL = 'http://localhost:3000';

export default function AdminDashboard() {
  const token = localStorage.getItem('token');
  const [users, setUsers] = useState([]);
  const [listings, setListings] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingListings, setLoadingListings] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  // Fetch all registered users on the system
  useEffect(() => {
    if (!token) return;

    fetch(`${BACKEND_URL}/api/admin/users`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch system users.');
        return res.json();
      })
      .then((data) => {
        setUsers(Array.isArray(data) ? data : data.users || []);
        setLoadingUsers(false);
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg(err.message);
        setLoadingUsers(false);
      });
  }, [token]);

  // Fetch all community listings on the platform
  useEffect(() => {
    if (!token) return;

    fetch(`${BACKEND_URL}/api/admin/listings`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch platform listings.');
        return res.json();
      })
      .then((data) => {
        setListings(Array.isArray(data) ? data : data.listings || []);
        setLoadingListings(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingListings(false);
      });
  }, [token]);

  // Administrative moderate delete function
  const handleDeleteListing = async (id) => {
    if (!window.confirm('Are you sure you want to administratively remove this listing?')) return;

    try {
      const res = await fetch(`${BACKEND_URL}/api/admin/listings/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        alert('Listing successfully deleted by Admin moderation.');
        setListings(listings.filter((item) => item.id !== id && item._id !== id));
      } else {
        alert('Failed to delete listing.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#fefae0', minHeight: '100vh' }}>
      <h1 style={{ color: '#606c38' }}>WasteNot KE — Administrative Dashboard</h1>

      {errorMsg && <p style={{ color: 'red', fontWeight: 'bold' }}>Error: {errorMsg}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '30px' }}>

        {/* SECTION 1: USER PLATFORM MANAGEMENT */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #606c38' }}>
          <h2 style={{ color: '#283618' }}>Manage System Accounts</h2>
          {loadingUsers ? <p>Loading system users...</p> : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #606c38', textAlign: 'left' }}>
                  <th style={{ padding: '8px' }}>Name</th>
                  <th style={{ padding: '8px' }}>Email</th>
                  <th style={{ padding: '8px' }}>Role Specified</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id || u._id} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>{u.name}</td>
                    <td style={{ padding: '8px' }}>{u.email}</td>
                    <td style={{ padding: '8px' }}>
                      <span style={{ backgroundColor: '#dda15e', padding: '3px 8px', borderRadius: '4px', fontSize: '12px' }}>
                        {u.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* SECTION 2: PLATFORM OVERRULE LISTING MODERATION */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #606c38' }}>
          <h2 style={{ color: '#283618' }}>Global Content Moderation</h2>
          {loadingListings ? <p>Loading all posted listings...</p> : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {listings.length === 0 ? <p>No listings active.</p> : listings.map((item) => (
                <div key={item.id || item._id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '6px', position: 'relative' }}>
                  <h4 style={{ margin: '0 0 5px 0' }}>{item.title || 'Surplus Food Allocation'}</h4>
                  <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#555' }}>{item.description}</p>

                  <span style={{
                    backgroundColor: item.classification === 'edible' ? '#606c38' : '#dda15e',
                    color: '#fff', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', marginRight: '10px'
                  }}>
                    {item.classification || 'Unclassified'}
                  </span>

                  <button
                    onClick={() => handleDeleteListing(item.id || item._id)}
                    style={{ backgroundColor: '#d90429', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', float: 'right' }}
                  >
                    Moderate Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}