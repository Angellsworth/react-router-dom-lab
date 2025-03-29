# 📫 Post Office React Application

A beginner-friendly single-page React app that simulates a post office. Users can view mailboxes, click to see details, and create new mailboxes using a form — all powered by **React Router DOM**.

---

## ✨ Features

- View a list of mailboxes  
- Click a mailbox to view its details (owner, size, number)  
- Add a new mailbox using a controlled form  
- Navigate pages with React Router without full-page reloads

---

## 🛠️ How It Was Built

### 1. **Project Setup**
- Initialized project using Vite
- Organized folders: `/components/NavBar`, `/MailboxList`, `/MailboxDetails`, `/MailboxForm`
- Added global styles in `App.css`

### 2. **Data and State**
- Created a hard-coded `initialState` with example mailboxes
- Used `useState` in `App.jsx` to manage mailbox data

### 3. **Navigation**
- Built `NavBar` component
- Used `<Link>` from `react-router-dom` to navigate to:
  - `/` → Home
  - `/mailboxes` → Mailbox list
  - `/mailboxes/new` → New Mailbox form

### 4. **Routing with React Router DOM**
- Wrapped app in `<BrowserRouter>` in `main.jsx`
- Used `<Routes>` and `<Route>` inside `App.jsx`
  - `/` → Home
  - `/mailboxes` → MailboxList
  - `/mailboxes/new` → MailboxForm
  - `/mailboxes/:mailboxId` → MailboxDetails
  - `*` → Catch-all for 404s

### 5. **Mailbox List Page**
- `MailboxList` component maps over mailbox state
- Each mailbox has a link to its details using the `_id`
- Styled using a `.mail-box` class

### 6. **Mailbox Details Page**
- `MailboxDetails` uses `useParams()` to get the dynamic `mailboxId`
- Finds the matching mailbox and displays its data
- Shows "Mailbox Not Found!" if no match is found

### 7. **Adding a Mailbox**
- `MailboxForm` uses `useState` for controlled form inputs
- On submit:
  - Calls `addMailbox` function from `App.jsx`
  - Generates a new `_id` automatically
  - Adds the new mailbox to state
  - Redirects user to `/mailboxes` with `useNavigate`

### 8. **Styling**
- Styled using `App.css`
- Used color palette:
  - Red: `#DA291C`
  - Blue: `#004B87`
  - Neutrals: `#FFFFFF`, `#F7F7F7`, `#EDEDED`, `#D8D8D8`

---

## 🧰 Tech Stack

- React
- React Router DOM
- JavaScript (ES6+)
- Vite
- CSS (App.css)

---

## 🚀 Future Features

- Persist mailboxes using local storage or backend
- Add edit/delete functionality
- Add mailbox filtering (e.g. by size)
- Style error states and empty lists

---

