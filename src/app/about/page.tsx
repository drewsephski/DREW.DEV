"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/cards/card";
import { AceternityGlareCard } from "@/components/ui/cards/aceternity-glare-card";
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            About DZN.DEV
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            We&apos;re building the next generation of UI components for modern web applications.
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <AceternityGlareCard className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-lg text-neutral-300 mb-6">
              At DZN.DEV, we&apos;re on a mission to simplify the process of building beautiful, responsive, and accessible web applications. We believe that great design should be accessible to everyone, regardless of their technical expertise.
            </p>
            <p className="text-lg text-neutral-300">
              Our component library combines the latest design trends with performance-optimized code to help developers create stunning user interfaces without sacrificing speed or accessibility.
            </p>
          </AceternityGlareCard>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden bg-neutral-900/50 border-neutral-800/50">
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9 relative h-48">
                  <Image
                    src="/images/team-member-1.jpg"
                    alt="Drew Sepeczi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-white">Drew Sepeczi</h3>
                  <p className="text-blue-400 mb-3">Founder & Lead Developer</p>
                  <p className="text-neutral-400 mb-4">
                    Full-stack developer with a passion for creating beautiful user interfaces and optimizing performance.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/drewsephski"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                      title="GitHub Profile"
                    >
                      <IconBrandGithub size={20} />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-blue-400 transition-colors"
                      title="Twitter Profile"
                    >
                      <IconBrandTwitter size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-blue-600 transition-colors"
                      title="LinkedIn Profile"
                    >
                      <IconBrandLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-neutral-900/50 border-neutral-800/50">
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9 relative h-48">
                  <Image
                    src="/images/team-member-2.jpg"
                    alt="Alex Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-white">Alex Johnson</h3>
                  <p className="text-blue-400 mb-3">UI/UX Designer</p>
                  <p className="text-neutral-400 mb-4">
                    Designer with an eye for detail and a focus on creating intuitive and accessible user experiences.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                      title="GitHub Profile"
                    >
                      <IconBrandGithub size={20} />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-blue-400 transition-colors"
                      title="Twitter Profile"
                    >
                      <IconBrandTwitter size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-blue-600 transition-colors"
                      title="LinkedIn Profile"
                    >
                      <IconBrandLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-neutral-900/50 border-neutral-800/50">
              <CardContent className="p-6">
                <div className="bg-blue-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Performance</h3>
                <p className="text-neutral-400">
                  We optimize every component for speed and efficiency, ensuring your applications load quickly and run smoothly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/50 border-neutral-800/50">
              <CardContent className="p-6">
                <div className="bg-purple-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Modularity</h3>
                <p className="text-neutral-400">
                  Our components are designed to work together seamlessly while remaining independent, giving you the flexibility to use only what you need.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/50 border-neutral-800/50">
              <CardContent className="p-6">
                <div className="bg-green-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Accessibility</h3>
                <p className="text-neutral-400">
                  We believe the web should be accessible to everyone. Our components follow WCAG guidelines to ensure they work for all users.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
          <Card className="bg-neutral-900/50 border-neutral-800/50">
            <CardContent className="p-8">
              <p className="text-lg text-neutral-300 mb-6">
                Have questions or want to learn more about our component library? We&apos;d love to hear from you!
              </p>
              <div className="flex items-center mb-4">
                <IconMail size={24} className="text-blue-500 mr-3" />
                <a href="mailto:contact@dzn.dev" className="text-neutral-300 hover:text-white transition-colors">
                  contact@dzn.dev
                </a>
              </div>
              <div className="flex items-center">
                <IconBrandTwitter size={24} className="text-blue-500 mr-3" />
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  @dzndev
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
