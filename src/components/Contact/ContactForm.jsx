import { useForm } from "react-hook-form";
import ContactConfirm from "../ContactConfirm/ContactConfirm";
import styles from "./ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit = () => {
    setShowModal(true);
    reset({
      firstname: "",
      lastname: "",
      email: "",
      query: "", 
      message: "",
      confirm: false, 
    });
  };
  return (
    <main className={styles.main__element}>
      <div className={styles.contactform__container}>
        <h1 className={styles.contactform__headline}>Contact Us</h1>
        {/* Input for namefield */}

        <div className={styles.contactform__name}>
          <div className={styles.contactform__firstname}>
            <label htmlFor="firstname">
              First Name<span className={styles.form__required}> *</span>
            </label>
            <input
              type="text"
              name="firstname"
              aria-label="Enter your first name"
              {...register("firstname", { required: "This field is required" })}
              id={styles.firstname}
              className={errors.firstname ? styles.error__input : styles.form__input}
              required
            />
            {errors.firstname && (
              <p className={styles.error__message}>
                {errors.firstname.message}
              </p>
            )}
          </div>
          <div className={styles.contactform__lastname}>
            <label htmlFor="lastname">
              Last Name<span className={styles.form__required}> *</span>
            </label>
            <input
              type="text"
              name="lastname"
              aria-label="Enter your last name"
              {...register("lastname", { required: "This field is required" })}
              id={styles.lastname}
              className={errors.lastname ? styles.error__input : styles.form__input}
              required
            />
            {errors.lastname && (
              <p className={styles.error__message}>{errors.lastname.message}</p>
            )}
          </div>
        </div>

        <div className={styles.contactform__email}>
          <label htmlFor="email">
            Email Address<span className={styles.form__required}> *</span>
          </label>
          <input
            type="email"
            name="email"
            aria-label="Enter your email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email address",
              },
            })}
            id={styles.email}
            className={errors.email ? styles.error__input : styles.form__input}
            required
          />
          {errors.email && (
            <p className={styles.error__message}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.contactform__query}>
          <legend>
            Query Type<span className={styles.form__required}> *</span>
          </legend>

          <div className={styles.contactform__querybox}>
            <div className={styles.contactform__queryfirst}>
              <input
                type="radio"
                name="query"
                value="General Enquiry"
                aria-label="Select General Enquiry"
                id={styles.generalenquiry}
                {...register("query", {
                  required: "Please select a query type",
                })}
              />
              <label htmlFor="generalenquiry">General Enquiry</label>
            </div>

            <div className={styles.contactform__querysecond}>
              <input
                type="radio"
                name="query"
                value="Support Request"
                aria-label="Select Support Request"
                id={styles.supportrequest}
                {...register("query")}
              />
              <label htmlFor="supportrequest">Support Request</label>
            </div>
          </div>
          {errors.query && (
            <p className={styles.error__message}>{errors.query.message}</p>
          )}
        </div>

        <div className={styles.contactform__message}>
          <label htmlFor="message">
            Message<span className={styles.form__required}> *</span>
          </label>
          <textarea
            type="text"
            name="message"
            rows="3"
            aria-label="Type your message"
            {...register("message", { required: "This field is required" })}
            id={styles.message}
            className={errors.message ? styles.error__input : styles.form__input}
            required
          />
          {errors.message && (
            <p className={styles.error__message}>{errors.message.message}</p>
          )}
        </div>

        <div className={styles.contactform__confirm}>
          <div className={styles.contactform__confirminput}>
            <input
              type="checkbox"
              name="confirm"
              aria-label="Confirm your consent to be contacted"
              id={styles.confirm}
              {...register("confirm", {
                required:
                  "To submit this form, please consent to being contacted",
              })}
              required
            />
            <label htmlFor="confirm">
              I hereby consent to being contacted by the team
              <span className={styles.form__required}> *</span>
            </label>
          </div>
          {errors.confirm && (
            <p className={styles.error__message}>{errors.confirm.message}</p>
          )}
        </div>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </div>
      {showModal && <ContactConfirm />}
    </main>
  );
};

export default ContactForm;
