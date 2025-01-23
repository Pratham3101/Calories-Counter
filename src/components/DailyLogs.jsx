//Ensure that your JSON Server is running on port 3001

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FoodLogForm from './FoodLogForm';
import CaloriesGraph from './CaloriesGraph';

const DailyLogs = () => {
  const [entries, setEntries] = useState([]);
  const [editingEntry, setEditingEntry] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState(null);

  // Fetch entries from the server
  const fetchEntries = async () => {
    try {
      const response = await axios.get('http://localhost:3001/entries');
      setEntries(response.data);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  // Add a new entry
  const handleAddEntry = async (newEntry) => {
    const entryWithDate = { ...newEntry, date: new Date().toLocaleDateString() };
    try {
      const response = await axios.post('http://localhost:3001/entries', entryWithDate);
      setEntries([...entries, response.data]);
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  // Edit an existing entry
  const handleEditEntry = async (updatedEntry) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/entries/${updatedEntry.id}`,
        updatedEntry
      );
      setEntries(entries.map((entry) => (entry.id === updatedEntry.id ? response.data : entry)));
      setEditingEntry(null);
    } catch (error) {
      console.error('Error updating entry:', error);
    }
  };

  // Show confirmation popup before deleting
  const handleDeletePopup = (id) => {
    setEntryToDelete(id);
    setShowPopup(true);
  };

  // Delete an entry
  const handleDeleteEntry = async () => {
    try {
      await axios.delete(`http://localhost:3001/entries/${entryToDelete}`);
      setEntries(entries.filter((entry) => entry.id !== entryToDelete));
      setEntryToDelete(null);
      setShowPopup(false);
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  return (
    <div className="daily-logs">
      <h2 style={{ textAlign: 'center' }}>Add Your Food Logs</h2>
      <FoodLogForm
        onAddEntry={handleAddEntry}
        onEditEntry={handleEditEntry}
        editingEntry={editingEntry}
        setEditingEntry={setEditingEntry}/>

      <h2 style={{ textAlign: 'center' }}>Calorie Intake Overview</h2>
      <CaloriesGraph data={entries}/>
      <h2 style={{ textAlign: 'center' }}>Your Daily Logs</h2>
      <div className="log-list">
        {entries.length > 0 ? (
          <table className="log-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Food</th>
                <th>Calories</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.date}</td>
                  <td>{entry.food}</td>
                  <td>{entry.calories}</td>
                  <td>
                    <button onClick={() => setEditingEntry(entry)} className="edit-button">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDeletePopup(entry.id)} className="delete-button">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlign: 'center' }}>No entries logged yet.</p>
        )}
      </div>

      {/* Popup Confirmation */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Are you sure you want to delete this entry?</h3>
            <div className="popup-actions">
              <button onClick={handleDeleteEntry} className="confirm-button">
                Yes
              </button>
              <button onClick={() => setShowPopup(false)} className="cancel-button">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyLogs;
