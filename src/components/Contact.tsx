"use client";

import React, { useState } from "react";
import { Github, Linkedin, Code, Code2, Activity } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // dummy handler — just show a success state
    setSent(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setSent(false);
    }, 2000);
  }

  const social = [
    { name: "GitHub", icon: <Github size={16} />, href: "#" },
    { name: "LeetCode", icon: <Code size={16} />, href: "#" },
    { name: "CodingNinjas", icon: <Code2 size={16} />, href: "#" },
    { name: "HackerRank", icon: <Activity size={16} />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin size={16} />, href: "#" },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <div className="h-px flex-1 bg-border ml-4" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-md border border-border bg-card p-6">
          <h3 className="text-lg font-medium text-foreground">Get in touch</h3>

          <p className="mt-3 text-sm text-muted-foreground">
            Name: <strong>Shrisairaj Gajjam</strong>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Email: <a className="text-primary underline" href="mailto:shrisairajgajjam@gmail.com">shrisairajgajjam@gmail.com</a>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Phone: <a className="text-primary underline" href="tel:+917058780706">+91 7058780706</a></p>

          <div className="mt-4 flex flex-wrap gap-3">
            {social.map((s) => (
              <a key={s.name} href={s.href} className="inline-flex items-center gap-2 rounded-md border border-border bg-background/30 px-3 py-2 text-sm text-foreground hover:bg-muted/30">
                {s.icon}
                <span className="hidden sm:inline">{s.name}</span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-md border border-border bg-card p-6">
          <div className="mb-3">
            <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">Name</label>
            <input
              id="contact-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contact-email" className="block text-sm font-medium text-foreground">Email</label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contact-message" className="block text-sm font-medium text-foreground">Message</label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 h-32 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Write your message"
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-95">
              {sent ? "Sending..." : "Send Message"}
            </button>
            <button type="button" onClick={() => { setName(""); setEmail(""); setMessage(""); }} className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-sm text-foreground">Reset</button>
          </div>
        </form>
      </div>
    </section>
  );
}
