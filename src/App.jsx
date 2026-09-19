import { useEffect, useState } from "react";
import { UserContextProvider } from "./context/context";
import "./App.css";
import User from "./components/user";
import Display from "./components/display";

function App() {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || [],
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const addUser = (newuser) => {
    setUser((prev) => [...prev, { id: Date.now(), ...newuser }]);
  };

  const removeUser = (id) => {
    setUser((prev) => prev.filter((item) => item.id !== id));
  };

  const updateUser = (id, updatedData) => {
    setUser((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedData } : item)),
    );
  };
  return (
    <UserContextProvider value={{ addUser, user, removeUser, updateUser }}>
      <div className="app-shell">
        <header className="app-navbar">
          <div className="navbar-content">
            <div className="brand-logo-area">
              <div className="brand-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h1 className="brand-title">User Management</h1>
            </div>
            <div className="live-badge">
              <span className="live-dot"></span>
              <span>Local Storage Active</span>
            </div>
          </div>
        </header>

        <main className="app-container">
          <User />
          <Display />
        </main>

        <footer className="app-footer">
          <p className="m-0">React CRUD Application &bull; Fast, Accessible &amp; Responsive</p>
        </footer>
      </div>
    </UserContextProvider>
  );
}

export default App;
