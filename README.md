# Calorie Counter Tool

A web-based application that allows users to track their daily food intake and calorie consumption. This tool is built using **React.js** for the frontend and utilizes **JSON Server** as a lightweight backend to manage data.

## Features
- Add, edit, and delete food entries with calorie details.
- Automatically logs the current date for each food entry.
- Displays food logs in a clean and organized table format.
- Responsive design for use on desktops, tablets, and mobile devices.
- Confirmation popup for delete actions to prevent accidental deletions.
- Interactive and user-friendly UI with consistent styling.

---

## Installation and Setup
Follow these steps to get the project running locally:

### Prerequisites
- **Node.js** installed on your machine.
- A package manager like **npm** or **yarn**.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/calorie-counter-tool.git
   cd calorie-counter-tool
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the JSON Server**:
   ```bash
   npx json-server --watch db.json --port 5000
   ```

4. **Start the React Application**:
   Open a new terminal window and run:
   ```bash
   npm start
   ```


   **IMPORTANT:**
   - The project requires the JSON Server to run locally because it cannot be deployed on GitHub Pages. Make sure to start the JSON Server before running the React application.
   - This is a critical step as the application relies on `db.json` to store and fetch data.

---

## Project Demonstration

### Video Walkthrough
For a detailed demonstration of how the application works, [watch the project video](https://drive.google.com/file/d/1IgUA2cQ_qWsL40wwGN_44XpoT1N3Szlt/view?usp=drive_link).

---

## Project Structure
```
calorie-counter-tool/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── FoodLogForm.js
│   │   ├── FoodLogTable.js
│   │   └── Popup.js
│   ├── App.js
│   └── index.js
├── db.json
├── package.json
└── README.md
```

### Key Files
- **`db.json`**: JSON Server data file to store food logs.
- **`FoodLogForm.js`**: Handles adding and editing entries.
- **`FoodLogTable.js`**: Displays food logs in a table format.
- **`Popup.js`**: Custom popup for delete confirmation.

---

## Technologies Used
- **Frontend**: React.js, CSS (custom styling).
- **Backend**: JSON Server for simulating a REST API.
- **Tools**: npm.

---

## License
This project is licensed under the MIT License.

---

### Feedback
Feel free to open issues or submit pull requests if you have suggestions for improvements!

