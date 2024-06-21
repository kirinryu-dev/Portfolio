import ContactCard from '../../Components/Contact/Contact_card';

// import custom css 

import './Contact.css';

const Contact = () => {
    const handleEmailClick = () => {
        window.location.href = 'kirinryu.dev@gmail.com';
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/90553719', '_blank');
    };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/sam-tanguy-tchalim-93857927a/', '_blank');
    };

    const handleCallClick = () => {
        window.location.href = 'tel:+22890553719';
    };

    return (
        <div className='Contact'>
            <div className='Contact_title'>
            <h1>Get in Touch</h1>
            </div>

            <div className='Contact_card'>

            <div className='top_contact'>
               
               <ContactCard />

           </div>

           <div className="contact_container">
           <div className="contact_item" onClick={handleEmailClick}>
               <p>Email</p>
           </div>
           <div className="contact_item" onClick={handleWhatsAppClick}>
               <p>WhatsApp</p>
           </div>
           <div className="contact_item" onClick={handleLinkedInClick}>
               <p>LinkedIn</p>
           </div>
           <div className="contact_item" onClick={handleCallClick}>
               <p>Call Me Directly</p>
           </div>
       </div>
            </div>

        </div>
    );
};

export default Contact;
