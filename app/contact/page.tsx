"use client";

import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <section className="section-container pt-32 pb-12">
        <h1 className="heading-xl mb-6">Get In Touch</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="section-container py-12">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="What's this about?"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell me about your project or inquiry..."
                required
              />
            </div>

            {/* Status Message */}
            {formStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  formStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="section-container py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-md mb-12">Other Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold mb-3 text-gray-900">Email</h3>
              <a 
                href="mailto:myny@mynewyorkishhome.com" 
                className="text-gray-600 hover:text-gray-900 hover:underline break-all text-sm"
              >
                myny@mynewyorkishhome.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold mb-3 text-gray-900">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/robertpetillo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 hover:underline text-sm"
              >
                linkedin.com/in/robertpetillo
              </a>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold mb-3 text-gray-900">Phone</h3>
              <a 
                href="tel:347-806-7290" 
                className="text-gray-600 hover:text-gray-900 hover:underline"
              >
                347-806-7290
              </a>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold mb-3 text-gray-900">Location</h3>
              <p className="text-gray-600">New York City</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
