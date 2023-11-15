import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Inquiries = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // emailjs service id, template id, and public key
        const serviceId = 'service_jx00quc';
        const templateId = 'template_kxlpb5o';
        const publicKey = 'EOqH41-yiSffiPKvP';

        // create object
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'UBC Poker Club',
            message: message,
        };

        // send email
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

  return (
    <div className='max-w-[1240px] mx-auto px-4 text-center'>
        <h1>Inquiries</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center py-4'>
        <input 
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='mb-4 p-2 border border-gray-300 rounded'
        />
        <input 
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mb-4 p-2 border border-gray-300 rounded'
        />
        <textarea
            cols="30"
            rows="10"
            placeholder="Enter text..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='mb-4 p-2 border border-gray-300 rounded w-full sm:w-[500px] md:w-[600px] lg:w-[700px] h-[200px] sm:h-[250px] font-[Poppins]'
        >
        </textarea>
        <button className='mx-auto font-semibold hover:from-[var(--primary-light)] hover:to-[var(--primary-dark)] transition duration-300'>Send Email</button>
    </form>
    </div>
  )
}

export default Inquiries