'use client';

import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gsap-section-title">
          Contact Us
        </h2>

        <div className="mx-auto max-w-6xl bg-gray-800 shadow-lg rounded-lg gsap-contact-form">
          <div className="grid gap-8 p-6 md:grid-cols-2 lg:p-8">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MdLocationOn className="h-8 w-8 text-rose-700 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold uppercase">Our site:</h3>
                    <p className="text-slate-400">
                      Central, Central Rd. 123, Hong Kong Island
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MdPhone className="h-8 w-8 text-rose-700 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold uppercase">Contact Number:</h3>
                    <p className="text-slate-400">+123 4321 321</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MdEmail className="h-8 w-8 text-rose-700 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold uppercase">Email Us:</h3>
                    <p className="text-slate-400">name@example.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold uppercase">Socials</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-500 hover:text-gray-200">
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-200">
                    <FaFacebookF className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-200">
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block font-semibold uppercase"
                  >
                    FULL NAME
                  </label>
                  <input
                    id="fullName"
                    placeholder="Your Name"
                    className="border border-gray-400 bg-slate-600 rounded-md p-2 w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-semibold uppercase"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="email"
                    placeholder="hello@example.com"
                    type="email"
                    className="border border-gray-400 bg-slate-600 rounded-md p-2 w-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block font-semibold uppercase"
                >
                  SUBJECT
                </label>
                <input
                  id="subject"
                  placeholder="Your Subject"
                  className="border border-gray-400 bg-slate-600 rounded-md p-2 w-full"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block font-semibold uppercase"
                >
                  YOUR MESSAGE
                </label>
                <textarea
                  className="border border-gray-400 bg-slate-600 rounded-md p-2 w-full min-h-[150px]"
                  id="message"
                  placeholder="Write Your message"
                ></textarea>
              </div>
              <button
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md w-full md:w-auto"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
