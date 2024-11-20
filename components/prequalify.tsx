import React from "react";
import PageIllustration from "@/components/page-illustration";

export default function Prequalify() {
  return (
    <section className="relative">
        <PageIllustration />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Prequalify</h2>

            {/* Form */}
            <form
            action="https://formspree.io/f/xqakllkg" // Replace with your API endpoint
            method="POST"
            className="space-y-4"
            >
            {/* First Name */}
            <div>
                <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
                >
                First Name *
                </label>
                <input
                type="text"
                id="first-name"
                name="firstName"
                placeholder="First"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                />
            </div>

            {/* Last Name */}
            <div>
                <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
                >
                Last Name *
                </label>
                <input
                type="text"
                id="last-name"
                name="lastName"
                placeholder="Last"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                />
            </div>

            {/* Email */}
            <div>
                <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
                >
                Email *
                </label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                />
            </div>

            {/* Evening Number */}
            <div>
                <label
                htmlFor="evening-number"
                className="block text-sm font-medium text-gray-700"
                >
                Evening Number *
                </label>
                <input
                type="tel"
                id="evening-number"
                name="eveningNumber"
                placeholder="Enter your phone number"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                />
            </div>

            {/* Co-Borrower */}
            <div>
                <label
                htmlFor="co-borrower"
                className="block text-sm font-medium text-gray-700"
                >
                Is there a Co-Borrower? *
                </label>
                <select
                id="co-borrower"
                name="coBorrower"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
            </div>

            {/* Contact Preference */}
            <div>
                <label
                htmlFor="contact-method"
                className="block text-sm font-medium text-gray-700"
                >
                How Would You Prefer to be Contacted? *
                </label>
                <select
                id="contact-method"
                name="contactMethod"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                </select>
            </div>

            {/* Submit Button */}
            <div>
                <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
