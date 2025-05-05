"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/cards/card";

export default function CookiesPage() {
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
            Cookie Policy
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
                This Cookie Policy explains how DZN.DEV ("we", "us", or "our") uses cookies and similar technologies on our website. This policy is designed to help you understand what cookies are, how we use them, and the choices you have regarding their use.
              </p>
              <p className="text-neutral-300">
                By continuing to browse or use our website, you agree to our use of cookies as described in this Cookie Policy.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">2. What Are Cookies?</h2>
              <p className="text-neutral-300 mb-4">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. Cookies are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
              <p className="text-neutral-300">
                Cookies help website owners understand how users interact with their website, remember user preferences, and improve the overall user experience. They can also help deliver more relevant advertisements to users.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">3. Types of Cookies We Use</h2>
              <p className="text-neutral-300 mb-4">
                We use different types of cookies for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-4 text-neutral-300">
                <li>
                  <strong className="text-white">Essential Cookies:</strong>
                  <p className="ml-6 mt-1">These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</p>
                </li>
                <li>
                  <strong className="text-white">Preference Cookies:</strong>
                  <p className="ml-6 mt-1">These cookies allow the website to remember choices you make (such as your preferred language or the region you are in) and provide enhanced, more personal features.</p>
                </li>
                <li>
                  <strong className="text-white">Analytics Cookies:</strong>
                  <p className="ml-6 mt-1">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the way our website works.</p>
                </li>
                <li>
                  <strong className="text-white">Marketing Cookies:</strong>
                  <p className="ml-6 mt-1">These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">4. Specific Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-800">
                      <th className="py-2 px-4 text-left text-neutral-200">Cookie Name</th>
                      <th className="py-2 px-4 text-left text-neutral-200">Type</th>
                      <th className="py-2 px-4 text-left text-neutral-200">Purpose</th>
                      <th className="py-2 px-4 text-left text-neutral-200">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 px-4 text-neutral-300">_ga</td>
                      <td className="py-2 px-4 text-neutral-300">Analytics</td>
                      <td className="py-2 px-4 text-neutral-300">Used by Google Analytics to distinguish users</td>
                      <td className="py-2 px-4 text-neutral-300">2 years</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 px-4 text-neutral-300">_gid</td>
                      <td className="py-2 px-4 text-neutral-300">Analytics</td>
                      <td className="py-2 px-4 text-neutral-300">Used by Google Analytics to distinguish users</td>
                      <td className="py-2 px-4 text-neutral-300">24 hours</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 px-4 text-neutral-300">_gat</td>
                      <td className="py-2 px-4 text-neutral-300">Analytics</td>
                      <td className="py-2 px-4 text-neutral-300">Used by Google Analytics to throttle request rate</td>
                      <td className="py-2 px-4 text-neutral-300">1 minute</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 px-4 text-neutral-300">dzn_session</td>
                      <td className="py-2 px-4 text-neutral-300">Essential</td>
                      <td className="py-2 px-4 text-neutral-300">Maintains user session state</td>
                      <td className="py-2 px-4 text-neutral-300">Session</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 px-4 text-neutral-300">dzn_preferences</td>
                      <td className="py-2 px-4 text-neutral-300">Preference</td>
                      <td className="py-2 px-4 text-neutral-300">Stores user preferences (e.g., theme)</td>
                      <td className="py-2 px-4 text-neutral-300">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">5. Third-Party Cookies</h2>
              <p className="text-neutral-300 mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements, and so on.
              </p>
              <p className="text-neutral-300">
                These third-party services include but are not limited to Google Analytics, Google Ads, and social media platforms. Each third-party provider has its own privacy and cookie policies, which we encourage you to review.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">6. Managing Cookies</h2>
              <p className="text-neutral-300 mb-4">
                Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version.
              </p>
              <p className="text-neutral-300 mb-4">
                You can generally find information about how to manage cookies in the "Help" section of your browser, or by visiting the website of your browser provider:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Microsoft Edge</a></li>
              </ul>
              <p className="text-neutral-300 mt-4">
                Please note that if you choose to block cookies, you may not be able to use all the features of our website.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">7. Changes to This Cookie Policy</h2>
              <p className="text-neutral-300">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date at the top of this policy. We encourage you to review this Cookie Policy periodically to stay informed about how we are using cookies.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">8. Contact Information</h2>
              <p className="text-neutral-300 mb-4">
                If you have any questions or concerns about our Cookie Policy, please contact us at:
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
