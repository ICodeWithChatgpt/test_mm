import React from "react";
import "../../styles/index.css"; // Corrected import path

const sendEmail = async (email, name, message) => {
    const response = await fetch('https://test-mm.vercel.app/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, name, message})
    });

    if (response.ok) {
        console.log('Email sent successfully');
    } else {
        console.error('Failed to send email');
    }
};

const Test = () => (
    <div className="test-container">
        <h1 className="test-title">Hello World</h1>
        <p className="test-description">Welcome to your new Gatsby site.</p>
        <button className="send-email-button"
                onClick={() => sendEmail(
                    'mario.rubio.c@gmail.com',
                    'testName',
                    'This is a test email from the Gatsby site.'
                )}>Send Test Email</button>
    </div>
);

export default Test;