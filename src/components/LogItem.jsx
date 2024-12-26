import React from 'react';

const LogItem = ({ entry, onEdit, onDelete }) => {
  return (
    <div className="log-item">
      <p>
        <strong>Date:</strong> {entry.date}
      </p>
      <p>
        <strong>Food:</strong> {entry.food}
      </p>
      <p>
        <strong>Calories:</strong> {entry.calories}
      </p>
      <button onClick={onEdit} className="edit-button">
        Edit
      </button>
      <button onClick={onDelete} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default LogItem;
