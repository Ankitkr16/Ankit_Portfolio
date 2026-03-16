import { useState } from "react";
import SectionShell from "../layout/SectionShell";

const initialContactState = { name: "", email: "", message: "" };
const feedbackFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSc0OAe3pmm9s-JqCD9w65a7krIGG30dfssJ6WwWZmNBLFB8sQ/viewform?usp=publish-editor";

function Contact({ links }) {
  const [contactForm, setContactForm] = useState(initialContactState);
  const [contactErrors, setContactErrors] = useState({});
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactSending, setContactSending] = useState(false);
  const [contactError, setContactError] = useState("");
  const recipientEmail = links.find((link) => link.name === "Email")?.value;

  const submitForm = async ({ payload, setSending, setError, setSubmitted }) => {
    if (!recipientEmail) {
      setError("Recipient email is missing");
      return false;
    }

    setSending(true);
    setError("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          ...payload,
          _template: "table",
          _captcha: "false"
        })
      });

      const result = await response.json();

      if (!response.ok || result.success === "false") {
        throw new Error(result.message || "Unable to send right now");
      }

      setSubmitted(true);
      return true;
    } catch (error) {
      setError(error.message || "Unable to send right now");
      setSubmitted(false);
      return false;
    } finally {
      setSending(false);
    }
  };

  const validateContact = () => {
    const next = {};
    if (!contactForm.name.trim()) next.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(contactForm.email)) next.email = "Valid email is required";
    if (contactForm.message.trim().length < 10) next.message = "Message should be at least 10 characters";
    setContactErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    if (!validateContact()) return;

    const success = await submitForm({
      payload: {
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
        _subject: `New portfolio message from ${contactForm.name}`
      },
      setSending: setContactSending,
      setError: setContactError,
      setSubmitted: setContactSubmitted
    });

    if (success) {
      setContactForm(initialContactState);
      setContactErrors({});
    }
  };

  return (
    <SectionShell id="contact" title="Contact" kicker="Lets Connect">
      <div className="grid gap-6 lg:grid-cols-12">
        <form onSubmit={handleContactSubmit} noValidate className="space-y-4 rounded-3xl border border-white/15 bg-white/5 p-6 lg:col-span-7">
          <div>
            <input
              type="text"
              placeholder="Your name"
              value={contactForm.name}
              onChange={(event) => setContactForm((prev) => ({ ...prev, name: event.target.value }))}
              className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-white outline-none focus:border-accent"
            />
            {contactErrors.name && <p className="mt-1 text-xs text-red-300">{contactErrors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Your email"
              value={contactForm.email}
              onChange={(event) => setContactForm((prev) => ({ ...prev, email: event.target.value }))}
              className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-white outline-none focus:border-accent"
            />
            {contactErrors.email && <p className="mt-1 text-xs text-red-300">{contactErrors.email}</p>}
          </div>
          <div>
            <textarea
              rows="5"
              placeholder="Tell me about your project"
              value={contactForm.message}
              onChange={(event) => setContactForm((prev) => ({ ...prev, message: event.target.value }))}
              className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-white outline-none focus:border-accent"
            />
            {contactErrors.message && <p className="mt-1 text-xs text-red-300">{contactErrors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={contactSending}
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-ink disabled:cursor-not-allowed disabled:opacity-70"
          >
            {contactSending ? "Sending..." : "Send Message"}
          </button>
          {contactSubmitted && <p className="text-sm text-accent2">Message sent successfully. It should arrive in my email inbox.</p>}
          {contactError && <p className="text-sm text-red-300">{contactError}</p>}
        </form>

        <div className="space-y-4 lg:col-span-5">
          <div className="space-y-4 rounded-3xl border border-white/15 bg-white/5 p-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-accent">Portfolio Feedback</p>
              <h3 className="mt-2 text-xl text-white">Open the Google feedback form</h3>
              <p className="mt-2 text-sm text-mist">Share your thoughts, rate the portfolio, and suggest improvements through a simple Google Form.</p>
            </div>
            <a
              href={feedbackFormLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent/60 hover:text-accent"
            >
              Give Feedback
            </a>
            <p className="text-xs text-mist">The form opens in a new tab so visitors can submit feedback easily.</p>
          </div>

          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="block rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:border-accent/60"
              >
                <p className="text-xs uppercase tracking-widest text-accent">{link.name}</p>
                <p className="mt-1 text-white">{link.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default Contact;
