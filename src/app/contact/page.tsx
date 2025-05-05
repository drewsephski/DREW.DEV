"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/cards/card";
import { AceternityGlareCard } from "@/components/ui/cards/aceternity-glare-card";
import { Button } from "@/components/ui/buttons/button";
import { 
  IconMail, 
  IconMapPin, 
  IconPhone, 
  IconBrandTwitter, 
  IconBrandGithub, 
  IconBrandLinkedin,
  IconCheck,
  IconAlertCircle
} from "@tabler/icons-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      if (Math.random() > 0.2) {
        setFormStatus("success");
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setFormStatus("error");
      }
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Get in Touch
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Fill out the form below or reach out through one of our channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <AceternityGlareCard className="h-full">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <IconMail className="text-blue-500 mt-1 mr-4" size={20} />
                    <div>
                      <h3 className="font-medium text-white mb-1">Email</h3>
                      <a href="mailto:contact@dzn.dev" className="text-neutral-400 hover:text-white transition-colors">
                        contact@dzn.dev
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <IconPhone className="text-blue-500 mt-1 mr-4" size={20} />
                    <div>
                      <h3 className="font-medium text-white mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-neutral-400 hover:text-white transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <IconMapPin className="text-blue-500 mt-1 mr-4" size={20} />
                    <div>
                      <h3 className="font-medium text-white mb-1">Office</h3>
                      <p className="text-neutral-400">
                        123 Design Street<br />
                        San Francisco, CA 94103<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-800">
                  <h3 className="font-medium text-white mb-4">Connect with us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neutral-800 hover:bg-blue-500/20 text-neutral-400 hover:text-blue-400 p-2 rounded-full transition-colors"
                    >
                      <IconBrandTwitter size={20} />
                    </a>
                    <a
                      href="https://github.com/drewsephski/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white p-2 rounded-full transition-colors"
                    >
                      <IconBrandGithub size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neutral-800 hover:bg-blue-600/20 text-neutral-400 hover:text-blue-400 p-2 rounded-full transition-colors"
                    >
                      <IconBrandLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </AceternityGlareCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-neutral-900/50 border-neutral-800/50">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        disabled={formStatus === "submitting"}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        disabled={formStatus === "submitting"}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-400 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      disabled={formStatus === "submitting"}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      disabled={formStatus === "submitting"}
                    ></textarea>
                  </div>

                  {formStatus === "success" && (
                    <div className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-md flex items-center">
                      <IconCheck size={20} className="mr-2" />
                      Your message has been sent successfully! We'll get back to you soon.
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-md flex items-center">
                      <IconAlertCircle size={20} className="mr-2" />
                      There was an error sending your message. Please try again later.
                    </div>
                  )}

                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={formStatus === "submitting"}
                    >
                      {formStatus === "submitting" ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-neutral-900/50 border-neutral-800/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">How can I get support for the component library?</h3>
                <p className="text-neutral-400">
                  You can reach out to our support team via email at support@dzn.dev or through our GitHub repository by opening an issue.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/50 border-neutral-800/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Do you offer custom development services?</h3>
                <p className="text-neutral-400">
                  Yes, we provide custom development services for businesses that need specialized components or integrations. Contact us for more details.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/50 border-neutral-800/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Is there a community forum for users?</h3>
                <p className="text-neutral-400">
                  We have a Discord server where users can ask questions, share their projects, and get help from our team and other community members.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/50 border-neutral-800/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">How often do you release updates?</h3>
                <p className="text-neutral-400">
                  We release minor updates and bug fixes weekly, with major feature updates approximately once a month. Check our changelog for details.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
