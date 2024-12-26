import React, { useState, useEffect } from 'react';

const FoodLogForm = ({ onAddEntry, onEditEntry, editingEntry, setEditingEntry }) => {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');

  useEffect(() => {
    if (editingEntry) {
      setFood(editingEntry.food);
      setCalories(editingEntry.calories);
    }
  }, [editingEntry]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!food || !calories) return;

    const newEntry = {
      id: editingEntry?.id || Date.now(),
      date: new Date().toISOString().split('T')[0], // Automatically set the current date
      food,
      calories: parseInt(calories, 10),
    };

    if (editingEntry) {
      onEditEntry(newEntry);
    } else {
      onAddEntry(newEntry);
    }

    setFood('');
    setCalories('');
    setEditingEntry(null);
  };

  const handleCancelEdit = () => {
    setFood('');
    setCalories('');
    setEditingEntry(null);
  };

  return (
    <form onSubmit={handleSubmit} className="foodlog-form">
      <h3>{editingEntry ? 'Edit Entry' : 'Add Entry'}</h3>
      <input
        type="text"
        value={food}
        onChange={(e) => setFood(e.target.value)}
        placeholder="Food"
        required
      />
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories"
        required
      />
      <button type="submit" className="form-button">
        {editingEntry ? 'Update Entry' : 'Add Entry'}
      </button>
      {editingEntry && (
        <button type="button" onClick={handleCancelEdit} className="cancel-button">
          Cancel
        </button>
      )}
    </form>
  );
};

export default FoodLogForm;
