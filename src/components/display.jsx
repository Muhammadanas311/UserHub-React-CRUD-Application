import { useState } from "react";
import useUser from "../context/context";
import EditUser from "./editUser";

function Display() {
  const { user, removeUser } = useUser();
  const [editId, setEditId] = useState(null);

  const getAvatarGradient = (str) => {
    const gradients = [
      "linear-gradient(135deg, #6366f1, #8b5cf6)",
      "linear-gradient(135deg, #3b82f6, #06b6d4)",
      "linear-gradient(135deg, #10b981, #0d9488)",
      "linear-gradient(135deg, #f59e0b, #ea580c)",
      "linear-gradient(135deg, #ec4899, #e11d48)",
      "linear-gradient(135deg, #8b5cf6, #d946ef)"
    ];
    const index = (str && str.length ? str.charCodeAt(0) : 0) % gradients.length;
    return gradients[index];
  };

  return (
    <div className="glass-card">
      <div className="display-header-bar">
        <div className="display-title-group">
          <h3>Registered Users</h3>
          <span className="badge-count">
            {user.length} {user.length === 1 ? "user" : "users"}
          </span>
        </div>
      </div>

      {user.length === 0 ? (
        <div className="empty-state-box">
          <div className="empty-icon-circle">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="17" y1="8" x2="23" y2="8"></line>
            </svg>
          </div>
          <h4 className="empty-state-title">No users registered yet</h4>
          <p className="empty-state-desc">Use the form above to add your first user to the list.</p>
        </div>
      ) : (
        <div className="users-list">
          {user.map((item) => (
            <div key={item.id}>
              {editId === item.id ? (
                <EditUser data={item} onClose={() => setEditId(null)} />
              ) : (
                <div className="user-item-card">
                  <div className="user-profile-info">
                    <div
                      className="user-avatar"
                      style={{ background: getAvatarGradient(item.name) }}
                    >
                      {item.name ? item.name.trim().charAt(0).toUpperCase() : "U"}
                    </div>
                    <div className="user-meta-details">
                      <h4 className="user-name-title">{item.name}</h4>
                      <span className="age-badge">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {item.age} years old
                      </span>
                    </div>
                  </div>

                  <div className="user-actions-row">
                    <button
                      className="btn-action btn-edit"
                      onClick={() => setEditId(item.id)}
                      title="Edit User"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                      Edit
                    </button>
                    <button
                      className="btn-action btn-delete"
                      onClick={() => removeUser(item.id)}
                      title="Delete User"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Display;
