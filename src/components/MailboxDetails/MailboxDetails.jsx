// src/components/MailboxDetails/MailboxDetails.jsx
import { useParams } from 'react-router'

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    console.log('mailboxId:', mailboxId);

    const selectedBox = props.mailboxes.find(
        (box) => box._id === Number(mailboxId)
    );
    console.log('Mailbox Object:', selectedBox)
    if (!selectedBox) {
        return <h2>Mailbox Not Found!</h2>
    }
    
    return (
        <>
            <h2>Mailbox #{selectedBox.boxNumber} </h2>
                <dl>
                    <dt>Owner: </dt>
                    <dd>{selectedBox.boxOwner}</dd>
                    <dt>Size: </dt>
                    <dd>{selectedBox.boxSize} </dd>
                </dl>
        </>
    )
}

export default MailboxDetails;
