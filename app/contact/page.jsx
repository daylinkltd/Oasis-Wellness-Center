import React from 'react'
import styles from "@/app/ui/dashboard/contact/contact.module.css"
import ContactForm from "@/app/ui/dashboard/contact/contactForm"
function Contact()  {
    return (
      <div className={styles.container}>
        <h1>Contact Us!</h1>
        <p>
          What ever written here
        </p>
        <ContactForm/>
      </div>
    )
  }
  
  export default Contact