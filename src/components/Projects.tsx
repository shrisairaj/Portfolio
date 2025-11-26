"use client";

import React from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  tech: string[];
  highlights: string[];
};

const PROJECTS: Project[] = [
  {
    title: "NextGenPaper — AI-Powered Question Generator",
    tech: ["React.js", "Spring Boot", "JWT", "REST APIs", "MySQL"],
    highlights: [
      "Generated Bloom’s Taxonomy questions using Llama models",
      "Teacher-in-loop multi-set generation",
      "Increased paper-setting workflow efficiency by 80%",
    ],
  },
  {
    title: "BusTracker System — Smart Tracking System for School buses ",
    tech: ["React.js", "Spring Boot", "WebSocket", "REST APIs", "MySQL"],
    highlights: [
      "Real-time bus tracking with routes, ETA, live location",
      "WebSocket low-latency updates",
      "Role-based dashboards (admin, driver, user)",
    ],
  },
  {
    title: "Website Builder — Website Generator for end-users (Collaborated project with BraveSoft Advisory Company",
    tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    highlights: [
      "Built simplified e-commerce website generator",
      "Inventory management + template system",
      "Implemented secure Google login",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Projects</h2>
        <div className="h-px flex-1 bg-border ml-4" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, idx) => (
          <motion.article
            key={p.title}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-lg border border-border bg-card p-5 shadow-sm flex flex-col justify-between"
            aria-labelledby={`project-${idx}-title`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id={`project-${idx}-title`} className="text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="mt-5 flex items-center justify-end">
              <a
                href="#"
                aria-label={`View code for ${p.title}`}
                className="inline-flex items-center rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/20"
              >
                View Code
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
