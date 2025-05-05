"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/cards/card";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Privacy Policy
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
              <p className="text-neutral-300 mb-4">
                At DZN.DEV, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-neutral-300">
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, you should not use our website or services. By accessing or using our website, you agree to this Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>
              <p className="text-neutral-300 mb-4">
                We collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li><strong className="text-white">Personal Information:</strong> Name, email address, and other contact details you provide when registering an account, subscribing to our newsletter, or contacting us.</li>
                <li><strong className="text-white">Usage Information:</strong> Information about how you use our website and services, including your browsing actions and patterns.</li>
                <li><strong className="text-white">Device Information:</strong> Information about your computer, internet connection, and browser, including your IP address, operating system, and browser type.</li>
                <li><strong className="text-white">Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and to hold certain information.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
              <p className="text-neutral-300 mb-4">
                We use the information we collect about you for various purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>Providing, maintaining, and improving our website and services</li>
                <li>Processing your account registration and managing your account</li>
                <li>Responding to your inquiries, comments, or questions</li>
                <li>Sending you technical notices, updates, security alerts, and support messages</li>
                <li>Communicating with you about products, services, offers, and events</li>
                <li>Monitoring and analyzing trends, usage, and activities in connection with our website</li>
                <li>Detecting, preventing, and addressing technical issues</li>
                <li>Protecting the security and integrity of our website and business</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">4. Disclosure of Your Information</h2>
              <p className="text-neutral-300 mb-4">
                We may disclose personal information that we collect or you provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li><strong className="text-white">To Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform functions on our behalf.</li>
                <li><strong className="text-white">For Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                <li><strong className="text-white">For Legal Purposes:</strong> We may disclose your information to comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
                <li><strong className="text-white">With Your Consent:</strong> We may disclose your information for any other purpose with your consent.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">5. Data Security</h2>
              <p className="text-neutral-300 mb-4">
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.
              </p>
              <p className="text-neutral-300">
                Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website. Any transmission of personal information is at your own risk.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">6. Your Rights and Choices</h2>
              <p className="text-neutral-300 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li><strong className="text-white">Access:</strong> You may request access to your personal information.</li>
                <li><strong className="text-white">Correction:</strong> You may request that we correct inaccurate or incomplete personal information.</li>
                <li><strong className="text-white">Deletion:</strong> You may request that we delete your personal information.</li>
                <li><strong className="text-white">Restriction:</strong> You may request that we restrict the processing of your personal information.</li>
                <li><strong className="text-white">Data Portability:</strong> You may request a copy of your personal information in a structured, commonly used, and machine-readable format.</li>
                <li><strong className="text-white">Objection:</strong> You may object to the processing of your personal information.</li>
              </ul>
              <p className="text-neutral-300 mt-4">
                To exercise any of these rights, please contact us using the information provided in the "Contact Information" section below.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">7. Children's Privacy</h2>
              <p className="text-neutral-300">
                Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe we may have collected information about a child, please contact us using the information provided in the "Contact Information" section below.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">8. Changes to Our Privacy Policy</h2>
              <p className="text-neutral-300">
                We may update our Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">9. Contact Information</h2>
              <p className="text-neutral-300 mb-4">
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="text-neutral-300">
                Email: privacy@dzn.dev<br />
                Address: 123 Design Street, San Francisco, CA 94103, United States
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
