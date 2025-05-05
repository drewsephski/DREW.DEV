
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandDiscord,
  IconMail,
  IconHeart,
  IconArrowUp
} from "@tabler/icons-react";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Demo", href: "/demo" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs/components" },
        { label: "Components", href: "/blog/components" },
        { label: "Blog", href: "/blog" },
        { label: "Design Tokens", href: "/docs/design-tokens" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/drewsephski/",
      icon: <IconBrandGithub size={20} />,
      hoverColor: "hover:text-gray-400"
    },
    {
      label: "Twitter",
      href: "https://twitter.com/",
      icon: <IconBrandTwitter size={20} />,
      hoverColor: "hover:text-blue-400"
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/",
      icon: <IconBrandLinkedin size={20} />,
      hoverColor: "hover:text-blue-600"
    },
    {
      label: "Discord",
      href: "https://discord.com/",
      icon: <IconBrandDiscord size={20} />,
      hoverColor: "hover:text-indigo-400"
    },
    {
      label: "Email",
      href: "mailto:contact@dzn.dev",
      icon: <IconMail size={20} />,
      hoverColor: "hover:text-red-400"
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("bg-neutral-900/50 border-t border-neutral-800/50 pt-12 pb-0", className)}>
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-0">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/next.svg"
                alt="DZN.DEV Logo"
                width={100}
                height={30}
                className="dark:invert"
              />
            </Link>
            <p className="text-neutral-400 mb-6 max-w-md">
              A modern UI component library for building beautiful, responsive web applications with the latest design trends and animations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("text-neutral-400 transition-colors", link.hoverColor)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-medium mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-neutral-800/50 pt-6 pb-6">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-white font-medium mb-2">Subscribe to our newsletter</h3>
            <p className="text-neutral-400 mb-4">
              Get the latest updates, articles, and resources delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-neutral-800 border border-neutral-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800/50 pt-6 flex flex-col md:flex-row justify-between items-center pb-6">
          <div className="text-neutral-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear} DZN.DEV. All rights reserved.</span>
            <span className="mx-2">•</span>
            <span>Made with <IconHeart size={14} className="inline text-red-500" /> by Drew</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/terms" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Cookies
            </Link>
            <motion.button
              onClick={scrollToTop}
              className="text-neutral-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <IconArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
