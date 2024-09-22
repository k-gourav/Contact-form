import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <main className={styles.main__element}>
      <div className={styles.contactform__container}>
        <h1 className={styles.contactform__headline}>Contact Us</h1>
        {/* Input for namefield */}
        <div className={styles.contactform__name}>
          <div className={styles.contactform__firstname}>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              aria-label="Enter your first name"
              required
            />
          </div>
          <div className={styles.contactform__lastname}>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              aria-label="Enter your last name"
              required
            />
          </div>
        </div>

        <div className={styles.contactform__email}>
          <label htmlFor="lastname">Email Address</label>
          <input
            type="email"
            name="email"
            aria-label="Enter your email"
            required
          />
        </div>

        <div className={styles.contactform__query}>
          <legend>Query Type</legend>

          <div className={styles.contactform__queryfirst}>
            <input type="radio" name="query" value="General Enquiry" />
            <label htmlFor="generalenquiry">General Enquiry</label>
          </div>

          <div className={styles.contactform__querysecond}>
            <input type="radio" name="query" value="Support Request" />
            <label htmlFor="supportrequest">Support Request</label>
          </div>
        </div>

        <div className={styles.contactform__message}>
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="message"
            aria-label="Type your message"
            required
          />
        </div>

        <div className={styles.contactform__confirm}>
          <input
            type="checkbox"
            name="confirm"
            aria-label="Confirm your consent to be contacted"
            required
          />
          <label htmlFor="confirm">
            I hereby consent to being contacted by the team
          </label>
        </div>
        <button type="submit">Submit</button>
      </div>
    </main>
  );
};

export default ContactForm;
