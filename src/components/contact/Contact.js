import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './ContactStyles.css'
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("queries")) {
            localStorage.setItem("queries", JSON.stringify([]));
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem(
            "queries",
            JSON.stringify([
                ...JSON.parse(localStorage.getItem("queries")),
                { name, email, message },
            ])
        );
        alert("Saved Successfully");
        setName("")
        setEmail("")
        setMessage("")

    };
    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form onSubmit={onSubmit}>
                        <h1><span>Contact</span> Us</h1>
                        <div>
                            <label>Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter your name' />
                        </div>
                        <div>
                            <label>Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email' />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea svalue={message} onChange={(e) => setMessage(e.target.value)} rows='10' placeholder='Enter your name' />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
