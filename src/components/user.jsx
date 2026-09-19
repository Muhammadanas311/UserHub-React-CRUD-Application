import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form } from "react-bootstrap";
import useUser from "../context/context";
function User() {
  const { addUser } = useUser();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || age === "") {
      alert("Please enter both name and age");
      return;
    }
    addUser({ name, age });
    setAge("");
    setName("");
  };

  return (
    <Container className="glass-card">
      <div className="card-header-custom">
        <div className="header-icon-box">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <line x1="19" y1="8" x2="19" y2="14"></line>
            <line x1="22" y1="11" x2="16" y2="11"></line>
          </svg>
        </div>
        <div className="header-title-text">
          <h2>Create New User</h2>
          <p>Fill in the details below to add a member to the list</p>
        </div>
      </div>

      <Form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group-item">
            <label className="form-label-custom" htmlFor="user-name-input">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Full Name
            </label>
            <input
              id="user-name-input"
              className="form-input-custom"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Doe"
              autoComplete="name"
            />
          </div>

          <div className="form-group-item">
            <label className="form-label-custom" htmlFor="user-age-input">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Age (Years)
            </label>
            <input
              id="user-age-input"
              className="form-input-custom"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 28"
              min="1"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-gradient">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add User
          </button>
        </div>
      </Form>
    </Container>
  );
}

export default User;
