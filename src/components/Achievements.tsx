"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Star, CheckSquare } from "lucide-react";

const ACHIEVEMENTS = [
  "1st Place — Blind Coding C, WISOTECH 2025",
  "Participant — MSBTE Paper Presentation (AI & ML)",
  "Vice President — Student Association",
  "Organized internal SIH Hackathon",
];

const CERTS = ["Python", "C", "C++", "CSS", "JavaScript"];

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Achievements & Certifications</h2>
        <div className="h-px flex-1 bg-border ml-4" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.article
              key={a}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-start gap-4 rounded-md border border-border bg-card p-4"
            >
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <Award size={20} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground">{a}</h3>
                <p className="mt-1 text-xs text-muted-foreground">&nbsp;</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-md border border-border bg-card p-4"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-accent/10 p-2 text-accent">
                <Star size={18} />
              </div>
              <h3 className="text-sm font-medium text-foreground">Certifications</h3>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {CERTS.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  <CheckSquare size={14} />
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-md border border-border bg-card p-4"
          >
            <h3 className="text-sm font-medium text-foreground">More</h3>
            <p className="mt-2 text-sm text-muted-foreground">Open to sharing certificates and detailed reports on request.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
