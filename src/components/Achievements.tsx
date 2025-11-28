"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "1st Place — Blind Coding C, WISOTECH 2025",
    description: "Secured 1st Place among 70+ participants in a national-level Blind Coding competition. Demonstrated strong programming logic and memory skills by writing and debugging C code without a display interface."
  },
  {
    title: "190+ LeetCode Problems Solved (Ongoing)",
    description: "Consistently practising Data Structures & Algorithms with over 190 problems solved on LeetCode. Strengthened core concepts including Sliding Window, Two Pointers, Prefix Sum, Kadane’s Algorithm, Strings, Recursion, and Backtracking. Actively improving competitive coding skills for internships and SDE roles."
  },
  {
    title: "Selected for SIH 2025 Internal Hackathon",
    description: "Qualified in the institute-level selection round for Smart India Hackathon 2025, competing with a team to design and develop an innovative solution. Worked on the SmartCart project, integrating real-time product data using external APIs and focusing on performance, accuracy, and user experience."
  },
  {
    title: "MSBTE Technical Paper Presentation (State Level)",
    description: "Participated as a two-member team in the MSBTE State-Level Technical Paper Presentation Competition held at S.T.E. Society’s Sou. Venutai Chavan Polytechnic, Pune. Presented a technical paper on “Artificial Intelligence and Machine Learning”, demonstrating strong technical communication, teamwork, and the ability to explain complex concepts to a panel of judges."
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
