import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./Contact.module.css"; 
import Footer from "../Footer/Footer";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iti9d8s",
        "template_t7xb7ub",
        form.current,
        "mR3FzevIFnyULu6Y9"
      )
      .then(() => {
        toast.success("🍔 Thanks for your tasty feedback!");
        form.current.reset();
      })
      .catch(() => {
        toast.error("❌ Couldn't send your thoughts. Try again!");
      });
  };

  return (
    <>
      <div className={style.contactContainer}>
        <form ref={form} onSubmit={sendEmail} className={style.form}>
          <div className={`${style.form_front}`}>
            <div className={`${style.form_details} ${style.head} text-center`}>
              🍟 Tell Us About Your Meal!
            </div>

            <input
              type="text"
              name="name"
              className={style.input}
              placeholder="Your Name"
              required
            />
           
            <select name="category" className={style.input} required>
              <option value="">Select Feedback Type</option>
              <option value="taste">Burger Taste</option>
              <option value="service">Delivery Service</option>
              <option value="presentation">Meal Presentation</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="message"
              className={style.input}
              placeholder="Share your delicious thoughts..."
              rows="4"
              required
            ></textarea>

            <button type="submit" className={style.btn}>
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Footer/>
    </>
  );
}
