"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Code, Target } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 gap-8 items-center md:grid-cols-2"
        >
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-4 w-full text-center md:text-left">
              <h1 className="text-3xl font-extrabold leading-tight text-foreground dark:text-foreground">
                Shrisairaj Gajjam
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Backend Developer | AI Prompt Engineer | DSA Enthusiast
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="max-w-xl text-md text-muted-foreground"
            >
              A passionate CS student specializing in backend development, AI-driven
              projects, and DSA. I love building scalable systems and problem-solving
              solutions.
            </motion.p>

            <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:items-center md:w-auto">
              <div className="flex gap-3">
                <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-muted/30 transition">
                  <Target size={20} />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-muted/30 transition">
                  <Linkedin size={20} />
                </a>
                <a href="https://codingninjas.com/yourprofile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-muted/30 transition">
                  <Code size={20} />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-muted/30 transition">
                  <Github size={20} />
                </a>
              </div>
              <Link href="#projects" className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/30">
                View Projects
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="order-first md:order-last flex items-center justify-center"
          >
            {/* Photo box: place your photo at `public/images/Photo.jpg` */}
            <div className="h-64 w-full max-w-sm rounded-2xl border border-border bg-card p-1 overflow-hidden">
              <img
                src="/images/Photo.jpg"
                alt="Shrisairaj Photo"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
