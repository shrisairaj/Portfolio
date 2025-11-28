"use client";

import React from "react";
import { motion } from "framer-motion";

type Skill = { name: string};

const SKILLS: Record<string, Skill[]> = {
  Programming: [
    { name: "C"},
    { name: "C++"},
    { name: "Java"},
    { name: "Python"},
    { name: "JavaScript"},
    { name: "PHP"},
  ],
  Backend: [
    { name: "Node.js"},
    { name: "Express.js" },
    { name: "REST APIs" },
    { name: "JWT Auth" },
  ],
  Frontend: [
    { name: "React.js"},
    { name: "HTML"},
    { name: "CSS" },
    { name: "Tailwind CSS"},
  ],
  Databases: [
    { name: "MySQL",},
    { name: "PostgreSQL"},
  ],
  Tools: [
    { name: "Git",},
    { name: "GitHub" },
    { name: "Postman"},
  ],
  Core: [
    { name: "OOP" },
    { name: "DBMS" },
    { name: "DSA ",},

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

            <div className="space-y-3">
              {skills.map((s) => (
                <div key={s.name} className="inline-flex items-center rounded-full bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span className="text-sm font-medium text-foreground min-w-0 flex-1">{s.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
