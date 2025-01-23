import React from "react";
import styles from "./ContactDetails.module.css";

const ContactDetails = () => {
  return (
    <section
      id="contact-details"
      className={`container ${styles.contactDetails}`}
    >
      <h2>Contact Details</h2>
      <p>123 Pub Street, Pubtown, PUB123</p>
      <p>Email: info@pub.com</p>
      <p>Phone: 123-456-7890</p>
    </section>
  );
};

export default ContactDetails;
