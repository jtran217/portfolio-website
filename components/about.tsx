"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'am a second-year Computer Science student at the University of Calgary
        with a background in Molecular Cellular Biology from Mount Royal
        University. My journey into coding began during my first degree, where I
        discovered how engaging and rewarding programming can be—and I’ve been
        hooked ever since.
      </p>

      <p>
        I’m passionate about learning and always strive to expand my skill set.
        Whether it’s mastering a new framework, picking up a new language, or
        trying my hand at a new sport, I embrace challenges as opportunities to
        grow.
      </p>
      <p>
        My transition from biology to computer science reflects my belief that
        education and curiosity are the keys to innovation. I’m excited to merge
        my analytical mindset and coding skills to create impactful solutions.
      </p>
    </motion.section>
  );
}
