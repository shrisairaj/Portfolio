"use client";

import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-border bg-background/60 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <h3 className="text-lg font-medium text-foreground">Get in touch</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Email: <a className="text-primary underline" href="mailto:shrisairajgajjam@gmail.com">shrisairajgajjam@gmail.com</a>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Phone: <a className="text-primary underline" href="tel:+917058780706">+91 7058780706</a>
          </p>
        </div>

        <div className="text-sm text-center text-muted-foreground">
          © 2025 Shrisairaj Gajjam
        </div>
      </div>
    </footer>
  );
}
