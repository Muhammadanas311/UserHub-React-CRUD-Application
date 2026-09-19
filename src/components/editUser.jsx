import { useState } from "react";
import useUser from "../context/context";

function EditUser({ data, onClose }) {
  const { updateUser } = useUser();
  const [editName, setEditName] = useState(data.name);
  const [editAge, setEditAge] = useState(data.age);
  const handleSave = () => {
    if (editName.trim() === "" || editAge === "") {
      alert("Please enter both name and age");
      return;
    }
    updateUser(data.id, { name: editName.trim(), age: editAge });
    onClose();
  };
  return (
    <div className="edit-mode-container">
      <div className="edit-mode-header">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
        <span>Editing User Details</span>
      </div>

      <div className="edit-inputs-grid">
        <div className="form-group-item">
          <label className="form-label-custom">Full Name</label>
          <input
            className="form-input-custom"
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="Edit name"
          />
        </div>
        <div className="form-group-item">
          <label className="form-label-custom">Age (Years)</label>
          <input
            className="form-input-custom"
            type="number"
            value={editAge}
            onChange={(e) => setEditAge(e.target.value)}
            placeholder="Edit age"
            min="1"
          />
        </div>
      </div>

      <div className="edit-buttons-row">
        <button className="btn-cancel" type="button" onClick={onClose}>
          Cancel
        </button>
        <button className="btn-save" type="button" onClick={handleSave}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditUser;
