import React from 'react'

const Contact = () => (
  <div id="contact" className="content-container contact-block">
    <div className="contact-block-left">
      <h1>Available for Commissions!</h1>
      <p>Please contact with inquiries.</p>
    </div>
    <div className="contact-block-right">
      <div className="contact-info">
        <a href="mailto:weslillig@gmail.com"><i className="fa fa-envelope-o"></i><p>weslillig@gmail.com</p></a>
      </div>
      <div className="contact-info">
        <a href="tel:1-816-686-6603"><i className="fa fa-phone" aria-hidden="true"></i><p>(816)686-6603</p></a>
      </div>
      <div className="contact-info">
        <a href="https://www.instagram.com/made_by_wes/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i><p>@made_by_wes</p></a>
      </div>
      <div className="contact-info">
        <a href="https://www.facebook.com/MadeByWesFurniture/" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i><p>MadeByWesFurniture</p></a>
      </div>
    </div>
  </div>
);

export default Contact;
