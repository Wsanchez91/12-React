import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" required onBlur={handleChange} />
                <input type="email" name="email" placeholder="Email" required onBlur={handleChange} />
                <textarea name="message" placeholder="Message" required onBlur={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
