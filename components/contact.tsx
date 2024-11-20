import React from "react";
import PageIllustration from "@/components/page-illustration";

export default function Contact() {
  return (
    <section className="relative">
        <PageIllustration />
        <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Contact Us
            </h2>
            <p className="text-gray-600 text-sm text-center mb-6">
            <span className="text-red-500">*</span> Indicates required field
            </p>
            <form
            action="https://formspree.io/f/xyzyppyo"
            method="POST"
            className="space-y-4"
            >
            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                >
                    First Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder="First"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                </div>
                <div>
                <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                >
                    Last Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    placeholder="Last"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                </div>
            </div>

            {/* Email */}
            <div>
                <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
                >
                Email <span className="text-red-500">*</span>
                </label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Comments */}
            <div>
                <label
                htmlFor="comments"
                className="block text-sm font-medium text-gray-700"
                >
                Comments <span className="text-red-500">*</span>
                </label>
                <textarea
                id="comments"
                name="comments"
                rows={4}
                placeholder="Your message"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
            </div>

            {/* Submit Button */}
            <div>
                <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                Submit
                </button>
            </div>
            </form>
        </div>
        </div>
    </section>
  );
}
