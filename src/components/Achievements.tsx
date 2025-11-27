"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "1st Place — Blind Coding C, WISOTECH 2025",
    description: "Secured first place in the Blind Coding C competition at WISOTECH 2025, demonstrating strong problem-solving skills in C programming."
  },
  {
    title: "Participant — MSBTE Paper Presentation (AI & ML)",
    description: "Participated in MSBTE Paper Presentation on AI & ML, showcasing knowledge in artificial intelligence and machine learning."
  },
  {
    title: "Vice President — Student Association",
    description: "Served as Vice President of the Student Association, leading initiatives and fostering student engagement."
  },
  {
    title: "Organized internal SIH Hackathon",
    description: "Organized an internal Smart India Hackathon, promoting innovation and teamwork among students."
  },
];

const CERTS = ["Python", "C", "C++", "CSS", "JavaScript"];

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Achievements</h2>
        <div className="h-px flex-1 bg-border ml-4" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.article
            key={a.title}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-start gap-4 rounded-md border border-border bg-card p-4"
          >
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <Award size={20} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground">{a.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{a.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
