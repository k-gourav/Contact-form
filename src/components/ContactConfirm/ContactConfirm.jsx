import React from 'react'
import successIcon from '../../assets/icons/icon-success-check.svg'
import styles from './ContactConfirm.module.css'

const ContactConfirm = () => {
  return (
    <div className={styles.confirm__container}>
    <div className={styles.confirm__title}>
        <img src={successIcon} alt="success-icon" />
        <h2>Message Sent!</h2>
    </div>
    <p className={styles.confirm__body}>Thanks for completing the form. We'll be in touch soon!</p>
    </div>
  )
}

export default ContactConfirm;