import { useState } from 'react'
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import './App.css'

const initialState = [
  { _id: 1, boxOwner: "Angela", boxSize: 'Medium', boxNumber: 101 },
  { _id: 2, boxOwner: "James", boxSize: 'Large', boxNumber: 102 }
]

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState)

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    newMailboxData.boxNumber = 100 + newMailboxData._id
    setMailboxes([...mailboxes, newMailboxData])
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={ <h2>Post Office</h2> } />
        <Route path='/mailboxes' element={ <MailboxList mailboxes={mailboxes} /> } />
        <Route path='/mailboxes/new' element={ <MailboxForm addMailbox={addMailbox}/> } />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<h2>Mailbox Not Found!</h2>} />
      </Routes>
    </>
  )
};

export default App;
