# UserHub: React CRUD Application

A simple user management app built with **React**, **Vite**, and **React-Bootstrap**. You can add, view, edit, and delete users, and your data is saved in the browser's localStorage, so it is still there after a refresh.

The app uses the **Context API** for global state, so components share data without passing props through every level.

## Features

- **Create:** add a user with a name and age
- **Read:** see all saved users in a list
- **Update:** edit a user inline and save or cancel the changes
- **Delete:** remove a user with one click
- **Validation:** empty names and ages are rejected
- **Persistence:** data is stored in localStorage and reloaded on page load

## Tech Stack

- React 18 (Hooks: `useState`, `useEffect`, `useContext`)
- Vite
- React-Bootstrap and Bootstrap 5
- Context API
- localStorage

## Project Structure

```
crudApp/
├── public/
├── src/
│   ├── components/
│   │   ├── user.jsx        # Add user form
│   │   ├── display.jsx     # User list with Edit and Delete buttons
│   │   └── editUser.jsx    # Inline edit form for one user
│   ├── context/
│   │   └── context.js      # Context, Provider, and useUser hook
│   ├── App.jsx             # State, CRUD functions, Provider
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

1. `App.jsx` holds the `user` array in state. It loads the initial value from localStorage.
2. `App.jsx` defines `addUser`, `removeUser`, and `updateUser`, and shares them with every component through `UserContextProvider`.
3. Components read what they need with the `useUser()` hook.
4. A `useEffect` in `App.jsx` saves the array to localStorage whenever it changes.

```
localStorage → App state → Context Provider → useUser() → components
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
# clone the repository
git clone <your-repo-url>

# go to the project folder
cd crudApp

# install dependencies
npm install

# start the development server
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Usage

1. Enter a name and age, then click **Add User**.
2. Click **Edit** to change a user, then **Save** or **Cancel**.
3. Click **Delete** to remove a user.
4. Refresh the page. Your users are still there.

## Possible Improvements

- Show users in a Bootstrap table with an actions column
- Ask for confirmation before deleting
- Add search and filter
- Replace localStorage with a backend API (PHP and MySQL)

## Author

**Muhammad Anas**, Front-End Web Developer