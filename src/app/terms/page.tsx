"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/cards/card";

export default function TermsPage() {
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
            Terms of Service
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
                Welcome to DZN.DEV. These Terms of Service ("Terms") govern your use of our website, products, and services. By accessing or using DZN.DEV, you agree to be bound by these Terms.
              </p>
              <p className="text-neutral-300">
                Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you may not use our services.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">2. Definitions</h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li><strong className="text-white">"DZN.DEV"</strong> refers to our company, website, and services.</li>
                <li><strong className="text-white">"Services"</strong> refers to our component library, documentation, and related tools.</li>
                <li><strong className="text-white">"User"</strong> refers to any individual or entity that accesses or uses our Services.</li>
                <li><strong className="text-white">"Content"</strong> refers to all materials, information, and code available through our Services.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">3. Account Registration</h2>
              <p className="text-neutral-300 mb-4">
                Some features of our Services may require you to create an account. When you register, you agree to provide accurate and complete information and to keep this information updated.
              </p>
              <p className="text-neutral-300 mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
              </p>
              <p className="text-neutral-300">
                We reserve the right to suspend or terminate your account if any information provided during registration or thereafter proves to be inaccurate, incomplete, or fraudulent.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">4. Intellectual Property Rights</h2>
              <p className="text-neutral-300 mb-4">
                All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of DZN.DEV or our licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-neutral-300 mb-4">
                Our component library is licensed under the MIT License. You may use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the components, subject to the conditions specified in the license.
              </p>
              <p className="text-neutral-300">
                You may not use our trademarks, logos, or other proprietary information without our prior written consent.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">5. User Conduct</h2>
              <p className="text-neutral-300 mb-4">
                When using our Services, you agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Attempt to gain unauthorized access to our Services or systems</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
                <li>Engage in any activity that could harm our Services or other users</li>
                <li>Use our Services for any illegal or unauthorized purpose</li>
                <li>Transmit any viruses, malware, or other harmful code</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">6. Limitation of Liability</h2>
              <p className="text-neutral-300 mb-4">
                To the maximum extent permitted by law, DZN.DEV shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>Your use or inability to use our Services</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from our Services</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Services</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">7. Changes to Terms</h2>
              <p className="text-neutral-300 mb-4">
                We reserve the right to modify these Terms at any time. If we make changes, we will provide notice by updating the date at the top of these Terms and, in some cases, we may provide additional notice.
              </p>
              <p className="text-neutral-300">
                Your continued use of our Services after such changes constitutes your acceptance of the new Terms.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">8. Contact Information</h2>
              <p className="text-neutral-300 mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-neutral-300">
                Email: legal@dzn.dev<br />
                Address: 123 Design Street, San Francisco, CA 94103, United States
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
