'use client';

import MySelectLanguageSwitch from '@/components/my-select-language-switch';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const BlogHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', text: 'Home' },
        { href: '#about_us', text: 'About Us' },
        { href: '#our_services', text: 'Our Services' },
        { href: '#our_mobile_app', text: 'Our Mobile App' },
        { href: '#driver_programs', text: 'Driver Programs' },
        { href: '#reward_programs', text: 'Reward Programs' },
        { href: '#contact', text: 'Contact' },
    ];

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-purple-600 to-indigo-500 py-4 backdrop-blur-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo Section */}
                        <div className="flex-shrink-0">
                            <a href="#" className="flex items-center space-x-2">
                                <img className="h-20 w-20" src={`/assets/demo-images/sesor.jpeg`} />
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center space-x-8 lg:flex">
                            {navLinks.map((link) => (
                                <a
                                    key={link.text}
                                    href={link.href}
                                    className="text-sm font-medium text-white transition-colors duration-300 hover:text-emerald-300"
                                >
                                    {link.text}
                                </a>
                            ))}
                            <MySelectLanguageSwitch />
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-2 lg:hidden">
                            <MySelectLanguageSwitch />

                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-md p-2 text-white" aria-label="Toggle menu">
                                <Menu
                                    className={`h-7 w-7 transition-transform duration-300 ${isMenuOpen ? 'scale-0 rotate-90' : 'scale-100 rotate-0'}`}
                                />
                                {/* <X
                  className={`h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                  }`}
                /> */}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Overlay */}
            <div
                className={`bg-opacity-50 fixed inset-0 z-40 bg-black transition-opacity lg:hidden ${
                    isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
            ></div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 z-50 h-full w-4/5 max-w-sm transform bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex h-full flex-col">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between border-b border-gray-800 p-4">
                        <a href="#" className="flex items-center space-x-2">
                            <img className="h-20 w-20" src={`/assets/demo-images/sesor.jpeg`} />
                        </a>
                        <button onClick={() => setIsMenuOpen(false)} className="rounded-md p-2 text-white hover:bg-gray-800" aria-label="Close menu">
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <nav className="flex-grow p-4">
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.text}
                                    href={link.href}
                                    className="rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.text}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default BlogHeader;
