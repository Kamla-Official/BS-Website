import React, { useState } from 'react';
import './Contact.css';

const ThankYouPage = ({ supportId }) => {
  const [copied, setCopied] = useState(false);

  // Function to copy the support ID to clipboard
  const copySupportId = () => {
    navigator.clipboard.writeText(supportId)
      .then(() => setCopied(true))
      .catch(() => setCopied(false));
  };

  return (
    <div className="thank-you">
      <h1>Thank You for Contacting Us!</h1>
      <p>Your submission has been received. Your Support ID is:</p>

      <div className="support-id-container">
        <span className="support-id">{supportId}</span>
      </div>

      <button onClick={() => window.location.reload()}>Go Back</button>

      <button className="copy-button" onClick={copySupportId}>
        {copied ? 'Support ID Copied!' : 'Copy Support ID'}
      </button>
    </div>
  );
};

const Contact = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [contact, setContact] = useState('');
  const [discordName, setDiscordName] = useState('');
  const [discordId, setDiscordId] = useState('');
  const [reason, setReason] = useState('');
  const [code, setCode] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Function to generate a random code (Support ID)
  const generateCode = () => {
    const codePart = Math.random().toString(36).substr(2, 5).toUpperCase();
    return `DBS-${codePart}`;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const randomCode = generateCode();
    setCode(randomCode);

    // Create the embed content for Discord webhook
    const embedContent = {
      embeds: [
        {
          title: 'New Contact Form Submission',
          fields: [
            { name: 'Name', value: name },
            { name: 'In-City Name', value: city },
            { name: 'Contact', value: contact },
            { name: 'Discord Name', value: discordName },
            { name: 'Discord ID', value: discordId },
            { name: 'Reason', value: reason },
            { name: 'Support ID', value: randomCode },
          ],
          color: 3447003,
        },
      ],
    };

    // Send data to Discord Webhook
    await fetch('https://discord.com/api/webhooks/1331292178848157758/uAMNmIFj3gHQyY-JTfiWjLx4TY4qNZGVxUFnJ12C90F_J_PthZ3rQVLWrmQS3hN8ExKu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `<@&1331294115492790313>`, // This will ping the role
          ...embedContent, // This adds the embed content
        }),
      });
    
      setSubmitted(true);
    };

  if (submitted) {
    return <ThankYouPage supportId={code} />;
  }

  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>In-City Name</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>In-City Contact Number</label>
          <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Discord Name</label>
          <input type="text" value={discordName} onChange={(e) => setDiscordName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Discord User ID</label>
          <input type="text" value={discordId} onChange={(e) => setDiscordId(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Reason</label>
          <textarea value={reason} onChange={(e) => setReason(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
