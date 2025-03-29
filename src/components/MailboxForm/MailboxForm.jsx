import { useState } from "react"
import { useNavigate } from "react-router"

const initialState = {
    boxOwner: '',
    boxSize: 'Small',
};

const MailboxForm = ({ addMailbox }) => {
    const [formData, setFormData] = useState(initialState)
    const navigate = useNavigate()


    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value})
    };
    
    const handleSubmit = (event) => {
        event.preventDefault()
        addMailbox(formData);
        setFormData(initialState)
        navigate('/mailboxes');
    };
    
    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Owner: </label>
                <input 
                    type="text"
                    id="boxOwner"
                    name="boxOwner"   // add this
                    value={formData.boxOwner}
                    onChange={handleChange} 
                    />
                <label htmlFor="boxSize">Box Size: </label>
                <select 
                    id="boxSize"
                    name="boxSize" 
                    value={formData.boxSize}
                    onChange={handleChange} 
                    >
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}


export default MailboxForm