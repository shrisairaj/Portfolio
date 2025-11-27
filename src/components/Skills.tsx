"use client";

import React from "react";
import { motion } from "framer-motion";

type Skill = { name: string; level?: number };

const SKILLS: Record<string, Skill[]> = {
  Programming: [
    { name: "C", level: 75 },
    { name: "C++", level: 70 },
    { name: "Java", level: 75 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "PHP", level: 65 },
  ],
  Backend: [
    { name: "Spring Boot", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Express.js", level: 70 },
  ],
  Frontend: [
    { name: "React.js", level: 80 },
    { name: "HTML", level: 85 },
    { name: "CSS", level: 75 },
  ],
  Databases: [
    { name: "MySQL", level: 80 },
    { name: "PostgreSQL", level: 65 },
  ],
  Tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Skills</h2>
        <div className="h-px flex-1 bg-border ml-4" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-lg border border-border bg-card p-4"
            aria-labelledby={`skills-${category}`}
          >
            <h3 id={`skills-${category}`} className="mb-3 text-lg font-medium text-foreground">
              {category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s.name}
                  className="inline-flex items-center rounded-full bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
