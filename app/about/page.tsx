"use client";

import { FormEvent, useState } from "react";

export default function AboutPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Thank you! Your message has been submitted.");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="pageContainer">
      <section className="aboutSection">
        <div>
          <p className="eyebrow">About MiniShop</p>

          <h1>Simple shopping, better experience.</h1>

          <p>
            MiniShop is a product showcase application
            designed to provide a simple and responsive
            shopping experience.
          </p>

          <p>
            Users can browse products, search by product
            name, filter by category, view product details,
            and manage products in their shopping cart.
          </p>
        </div>

        <div className="aboutFeatures">
          <div className="aboutFeature">
            <h3>Easy Product Discovery</h3>
            <p>
              Search and filter products to quickly find
              what you need.
            </p>
          </div>

          <div className="aboutFeature">
            <h3>Responsive Design</h3>
            <p>
              The website adapts to desktop, tablet,
              and mobile screen sizes.
            </p>
          </div>

          <div className="aboutFeature">
            <h3>Simple Shopping Cart</h3>
            <p>
              Add products, change quantities, remove
              items, and view the order total.
            </p>
          </div>
        </div>
      </section>

      <section className="contactSection">
        <div className="contactIntro">
          <p className="eyebrow">Contact Us</p>

          <h2>Have a question?</h2>

          <p>
            Send us a message using the form and
            we&apos;ll get back to you.
          </p>  
        </div>

        <form
          className="contactForm"
          onSubmit={handleSubmit}
        >
          <div className="formGroup">
            <label htmlFor="contactName">
              Name
            </label>

            <input
              id="contactName"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
            />
          </div>

          <div className="formGroup">
            <label htmlFor="contactEmail">
              Email
            </label>

            <input
              id="contactEmail"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />
          </div>

          <div className="formGroup">
            <label htmlFor="contactMessage">
              Message
            </label>

            <textarea
              id="contactMessage"
              placeholder="How can we help?"
              rows={5}
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
            />
          </div>

          {error && (
            <p className="formError">
              {error}
            </p>
          )}

          {success && (
            <p className="formSuccess">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="contactButton"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}