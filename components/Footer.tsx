import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const sectionLinks = [
  [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
  ],
  [
    { name: 'Trainers', href: '#trainers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Contact Us', href: '#contact' },
  ],
];

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
];

export function Footer() {
  return (
    <footer className="pt-10 bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Contact */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-2">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Elite Combat Fitness
              </span>
            </Link>
            <p className="text-gray-400 mb-8">
              Your ultimate destination for Boxing, Muay Thai, and MMA training.
            </p>
            <ul className="text-gray-300 space-y-4">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-red-500" />
                <span>Central, Central Rd. 123, Hong Kong Island</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-red-500" />
                <span>name@example.com</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-red-500" />
                <span>+123 4321 321</span>
              </li>
            </ul>
          </div>
          {/* Useful Links */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold uppercase text-red-500">
              Useful Links
            </h2>
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              {sectionLinks.map((column, columnIndex) => (
                <ul key={columnIndex}>
                  {column.map((link) => (
                    <li key={link.name} className="mb-4">
                      <Link href={link.href} className="hover:underline">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          {/* Follow Us */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold uppercase text-red-500">
              Follow Us
            </h2>
            <div className="flex mt-4 space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2024 Elite Combat Fitness™. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
