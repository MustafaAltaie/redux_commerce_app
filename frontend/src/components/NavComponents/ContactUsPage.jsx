import '../../style/navComponents.css';
import Header from '../header/Header';
import { useState } from 'react';
import { useSendContactEmailMutation } from '../../features/productApi';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', subject: '', message: ''
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [sendContactEmail] = useSendContactEmailMutation();

  const handleChange = e => {
    setFormData(prev => (
      { ...prev, [e.target.name]: e.target.value }
    ));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendContactEmail(formData).unwrap();

      setSuccessMsg('Message sent successfully!');
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setSuccessMsg('');
        setErrorMsg('');
      }, 2000);
    } catch (err) {
      setErrorMsg('Failed to send message. Please try again.');
    }
  }

  return (
    <div className="contactUsMainWrapper">
      <Header />
      <div className='contactUsHeaderWrapper'>
        <h1>Contact Us</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ex, sapiente natus similique soluta dignissimos.</p>
      </div>
      <div className='contactUsFloatingWrapper'>
        <div className="contactUsPart1">
          <div>
            <div>
              <h4>Address</h4>
              <p>123 Lorem Street, Ipsum City</p>
            </div>

            <div>
              <h4>Phone</h4>
              <p>+1 (234) 567-8901</p>
            </div>

            <div>
              <h4>Email</h4>
              <p>contact@example.com</p>
            </div>

            <div>
              <h4>Working Hours</h4>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className='contactUsPart2'>
        <form onSubmit={handleSubmit}>
            <div className='userNameAndPhoneWrapper'>
              <div>
                <label>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            <div>
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div>
              <label>Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
            </div>

            <div>
              <label>Message</label>
              <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
            </div>

            <button type="submit">Send Message</button>

            {successMsg && <h6 style={{ color: 'green', position: 'absolute', bottom: '10px' }}>{successMsg}</h6>}
            {errorMsg && <h6 style={{ color: 'red', position: 'absolute', bottom: '10px' }}>{errorMsg}</h6>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;