"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Activity } from "lucide-react";

export default function Experience() {
  const items = [
    {
      title: "Software Developer Intern  — BraveSoft Advisory",
      icon: <Users size={18} />,
      bullets: [
        "Developed a web-based application for simplified E-commerce website creation, addressing complex UI challenges with easy-to-use forms for data management.",
        "Implemented responsive UI, inventory management, templates, and efficient data storage with a strong backend forseamless performance.",
        "Utilized HTML, CSS, JavaScript, PHP, MySQL, and Google Authentication to ensure secure access and scalable design.",
      ],
      },
    {
      title: "Vice President — CSESA",
      icon: <Briefcase size={18} />,
      bullets: [
        "Organized various Tech events fostering teamwork, creativity, and problem-solving among participants.",
        "Coordinated with volunteers by assigning responsibilities and monitoring progress.",
      ],
    },
  ];

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Experience & Leadership</h2>
        <div className="h-px flex-1 bg-border ml-4" />
      </div>

      <div className="relative ml-6 pl-6 before:absolute before:top-0 before:left-0 before:h-full before:w-px before:bg-border">
        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.6 }}
              className="relative"
              aria-labelledby={`exp-${i}-title`}
            >
              <span className="absolute left-[-42px] top-1 flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border">
                {it.icon}
              </span>

              <div className="rounded-md border border-border bg-card p-4">
                <h3 id={`exp-${i}-title`} className="text-lg font-medium text-foreground">
                  {it.title}
                </h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-2">
                  {it.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}

          {/* A smaller activity entry to show variety */}
          <motion.article
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: items.length * 0.08 }}
            viewport={{ once: true, amount: 0.6 }}
            className="relative"
          >
            <span className="absolute left-[-42px] top-1 flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border">
              <Activity size={18} />
            </span>

            <div className="rounded-md border border-border bg-card p-4">
              <h3 className="text-lg font-medium text-foreground">Other Activities</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-2">
                <li>Mentored juniors in data structures and algorithms</li>
                <li>Conducted workshops on backend design patterns</li>
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
