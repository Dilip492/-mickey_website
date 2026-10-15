import { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    Check,
    ArrowRight,
} from "lucide-react";
import Footer from "../components/footer";
import Header from "../components/Header";
import { contactApi } from "../api/contactApi";
import toast from "react-hot-toast";

/* =========================================
   HERO
========================================= */
function ContactHero() {
    return (
        <section className="border-b border-roast/5 bg-cream-100 px-6 py-20 md:px-12 md:py-28">
            <div className="mx-auto max-w-7xl">
                <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
                    Mickey's Café &amp; Lounge
                </p>
                <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
                    Let's talk over
                    <br />
                    <span className="italic text-terracotta">a good cup.</span>
                </h1>
                <p className="mt-6 max-w-xl font-sans text-base leading-7 text-roast/60 md:text-lg">
                    Questions, or just want to say hello — we'd love to
                    hear from you.
                </p>
            </div>
        </section>
    );
}

/* =========================================
   CONTACT DETAILS (clean, minimal list)
========================================= */
function ContactDetails() {
    const details = [
        {
            icon: MapPin,
            label: "Visit",
            value: (
                <>
                    42 Lantern Lane
                    <br />
                    Shoreditch, London EC2A 4NE
                </>
            ),
        },
        {
            icon: Phone,
            label: "Call",
            value: (
                <a
                    href="tel:+442071234567"
                    className="transition hover:text-terracotta"
                >
                    +44 20 7123 4567
                </a>
            ),
        },
        {
            icon: Mail,
            label: "Email",
            value: (
                <a
                    href="mailto:hello@mickeyscafe.com"
                    className="transition hover:text-terracotta"
                >
                    hello@mickeyscafe.com
                </a>
            ),
        },
        {
            icon: Clock,
            label: "Hours",
            value: (
                <ul className="space-y-1">
                    <li className="flex justify-between gap-8">
                        <span>Mon – Thu</span>
                        <span className="text-roast/50">7:00 – 22:00</span>
                    </li>
                    <li className="flex justify-between gap-8">
                        <span>Fri – Sat</span>
                        <span className="text-roast/50">7:00 – 00:00</span>
                    </li>
                    <li className="flex justify-between gap-8">
                        <span>Sunday</span>
                        <span className="text-roast/50">8:00 – 20:00</span>
                    </li>
                </ul>
            ),
        },
    ];

    return (
        <ul className="divide-y divide-roast/10 border-y border-roast/10">
            {details.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-5 py-6">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                        <Icon size={17} strokeWidth={2} />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="mb-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-terracotta">
                            {label}
                        </p>
                        <div className="font-sans text-[15px] leading-6 text-roast/75">
                            {value}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

/* =========================================
   CONTACT FORM
========================================= */
/* =========================================
   CONTACT FORM
========================================= */
function ContactForm() {
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "General enquiry",
        message: "",
    });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await contactApi(form);

            console.log("that is the contact response", response);

            if (response.status) {
                setStatus("sent");

                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "General enquiry",
                    message: "",
                });

                toast.success("Message sent successfully!");

                setTimeout(() => {
                    setStatus("idle");
                }, 3500);
            } else {
                throw new Error(
                    response.data.message || "Failed to submit your enquiry."
                );
            }
        } catch (error) {
            console.error(
                "Contact form submission error:",
                error.response?.data || error.message
            );

            toast.error("Failed to send message. Please try again.");

            setStatus("error");
        }
    };

    const inputClasses = `
    w-full rounded-xl border border-roast/12 bg-cream-50 px-4 py-3
    font-sans text-sm text-roast placeholder:text-roast/30
    transition focus:border-terracotta focus:outline-none
    focus:ring-4 focus:ring-terracotta/10
  `;

    const labelClasses =
        "mb-2 block font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-roast/50";

    return (
        <div className="rounded-3xl border border-roast/10 bg-cream-100 p-7 md:p-10">
            <span className="font-curved text-2xl text-terracotta">
                Send a note
            </span>
            <h2 className="mt-2 font-serif text-3xl leading-tight md:text-4xl">
                Drop us a message
            </h2>
            <p className="mt-3 max-w-lg font-sans text-sm leading-6 text-roast/55">
                We usually reply within a few hours during opening times.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className={labelClasses}>
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className={inputClasses}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={labelClasses}>
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className={inputClasses}
                        />
                    </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label htmlFor="phone" className={labelClasses}>
                            Phone
                            <span className="ml-1 normal-case tracking-normal text-roast/35">
                                (optional)
                            </span>
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+44 20 7123 4567"
                            pattern="^[+()\-\s\d]{7,20}$"
                            title="Please enter a valid phone number (7–20 digits, may include + ( ) - and spaces)"
                            className={inputClasses}
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className={labelClasses}>
                            Subject
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className={`${inputClasses} cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%232c1e14%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                        >
                            <option>General enquiry</option>
                           
                            <option>Private event</option>
                            <option>Catering</option>
                            <option>Feedback</option>
                        </select>
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className={labelClasses}>
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us what's on your mind…"
                        className={`${inputClasses} resize-none`}
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={status !== "idle"}
                    className={`
            mt-2 flex items-center justify-center gap-2 self-start rounded-full
            px-7 py-3.5 font-sans text-sm font-bold text-white
            transition focus:outline-none focus-visible:ring-4
            focus-visible:ring-terracotta/25
            ${status === "sent"
                            ? "bg-emerald-600"
                            : status === "sending"
                                ? "cursor-wait bg-terracotta-light"
                                : "bg-terracotta hover:bg-terracotta-light"
                        }
          `}
                >
                    {status === "sent" ? (
                        <>
                            <Check size={16} /> Message sent
                        </>
                    ) : status === "sending" ? (
                        <>
                            <Send size={16} className="animate-pulse" /> Sending…
                        </>
                    ) : (
                        <>
                            Send message <ArrowRight size={16} />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}

/* =========================================
   MAP
========================================= */
function MapSection() {
    return (
        <section className="px-6 pb-20 md:px-12 md:pb-24">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-3xl border border-roast/10">
                    <iframe
                        title="Mickey's Café & Lounge location"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1276%2C51.5033%2C-0.1176%2C51.5083&layer=mapnik"
                        className="h-[400px] w-full grayscale-[40%] md:h-[480px]"
                        style={{ border: 0 }}
                        loading="lazy"
                    />
                    <div className="pointer-events-none absolute bottom-5 left-5 right-5 md:left-auto md:right-6 md:w-80">
                        <div className="pointer-events-auto rounded-2xl bg-cream-50/95 p-5 shadow-lg backdrop-blur">
                            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-terracotta">
                                Find us
                            </p>
                            <p className="mt-1.5 font-serif text-xl leading-tight">
                                42 Lantern Lane
                            </p>
                            <p className="font-sans text-sm text-roast/55">
                                Shoreditch, London EC2A 4NE
                            </p>
                            <a
                                href="https://maps.google.com/?q=Shoreditch+London"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center gap-1.5 font-sans text-xs font-bold text-terracotta transition hover:text-terracotta-light"
                            >
                                Get directions <ArrowRight size={13} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* =========================================
   BOTTOM CTA
========================================= */
function BottomCTA() {
    return (
        <section className="bg-roast px-6 py-20 text-center md:px-12 md:py-28">
            <span className="font-curved text-2xl text-terracotta-light">
                More than just coffee
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight text-cream-50 md:text-6xl">
                Bring a friend.
                <br />
                <span className="italic text-terracotta-light">
                    Stay for the moment.
                </span>
            </h2>
            {/* <button className="mt-8 rounded-full bg-terracotta px-8 py-4 font-sans text-sm font-bold text-white transition hover:bg-terracotta-light focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-roast">
                Reserve a Table
            </button> */}
        </section>
    );
}

/* =========================================
   MAIN COMPONENT
========================================= */
export default function Contact() {
    return (

        <main className="min-h-screen bg-cream-50 text-roast">
            {/* <Hero /> */}
            <Header />

            {/* <ContactHero /> */}

            <section className="px-6 py-20 md:px-12 md:py-24 border-">
                <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
                    {/* LEFT: heading + details */}
                    <div>
                        <span className="font-curved text-2xl text-terracotta">
                            Come say hi
                        </span>
                        <h2 className="mt-2 font-serif text-3xl leading-tight md:text-4xl">
                            We're always happy to chat
                        </h2>
                        <p className="mt-4 max-w-md font-sans text-sm leading-7 text-roast/55">
                            Whether you're booking a table, planning a private event, or
                            just curious about our beans — drop by, call, or send us a note.
                        </p>

                        <div className="mt-10">
                            <ContactDetails />
                        </div>
                    </div>

                    {/* RIGHT: form */}
                    <ContactForm />
                </div>
            </section>

            {/* <MapSection /> */}
            {/* <BottomCTA /> */}
            <Footer />
        </main>
    );
}