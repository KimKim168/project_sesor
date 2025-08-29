'use client';
import { Facebook, Instagram, LinkedinIcon, Youtube } from 'lucide-react';

const Footer = () => {
    const footerLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Our Services", href: "#" },
    { name: "Our Mobile App", href: "#" },
    { name: "Driver Programs", href: "#" },
    { name: "Reward Programs", href: "#" },
  ];

  const socialIcons = [
    { label: "Facebook", icon: <Facebook />, href: "#" },
    { label: "Instagram", icon: <Instagram />, href: "#" },
    { label: "LinkedIn", icon: <LinkedinIcon />, href: "#" },
    { label: "YouTube", icon: <Youtube />, href: "#" },
  ];


    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-2 nd:justify-between">
          {/* Logo + Description */}
          <div className="w-full flex flex-col items-center sm:items-start text-center sm:text-left">
            <a href="#" className="mb-4">
              <img
                src="/assets/demo-images/sesor.jpeg"    
                alt="Company Logo"
                className="h-20 w-20 object-contain"
              />
            </a>
            <p className="max-w-sm text-base">
              Trusted in more than 100 countries & 5 million customers. Have any
              query?
            </p>
          </div>

         <div className="grid gap-10 grid-cols-2 justify-between">
             {/* Footer Links */}
          <div >
            <ul className="space-y-3 sm:text-left">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-gray-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center sm:items-start space-y-3">
            {socialIcons.map((link) => (
              <div
                key={link.label}
                className="group flex cursor-pointer items-center gap-3"
              >
                <a
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-indigo-600"
                >
                  {link.icon}
                </a>
                <span className="capitalize transition-colors group-hover:text-indigo-400">
                  {link.label}
                </span>
              </div>
            ))}
          </div>
         </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/30 pt-6 flex flex-col items-center justify-center sm:flex-row">
          <span className="text-sm">
            ©{" "}
            <a href="/" className="hover:text-indigo-400 transition-colors">
              2025
            </a>{" "}
            SESOR Express. All Rights Reserved.
          </span>
        </div>
      </div>
    );
};

export default Footer;
