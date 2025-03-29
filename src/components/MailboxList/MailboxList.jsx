import { Link } from 'react-router';

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h2>Mailbox List</h2>
      <ul className="mailbox-grid">
        {mailboxes.map((box) => (
          <li key={box._id} className="mail-box">
            <Link to={`/mailboxes/${box._id}`}>
              <h3>Box #{box.boxNumber}</h3>
              <p>{box.boxOwner}</p>
              <p>Size: {box.boxSize}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;