"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

const CERTS = [
  { name: "Python", link: "#" },
  { name: "C", link: "#" },
  { name: "C++", link: "#" },
  { name: "CSS", link: "#" },
  { name: "JavaScript", link: "#" },
];

export default function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Certificates</h2>
        <div className="h-px flex-1 bg-border ml-4" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {CERTS.map((c) => (
          <motion.article
            key={c.name}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-start gap-4 rounded-md border border-border bg-card p-4"
          >
            <div className="rounded-full bg-accent/10 p-2 text-accent">
              <CheckSquare size={20} />
            </div>
            <div>
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:underline"
              >
                {c.name}
              </a>
              <p className="mt-1 text-xs text-muted-foreground">Certificate</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
