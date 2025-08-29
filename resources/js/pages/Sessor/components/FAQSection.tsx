import { Plus } from 'lucide-react';
import { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const faqs = [
    {
        question: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore?',
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        question: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud?',
        answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here". Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        question: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo?',
        answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    },
    {
        question: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?',
        answer: 'making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    },
];

export default function FAQSection() {
    useEffect(() => {
        AOS.init({
          duration: 1800,         // animation lasts 1.8s
          easing: "ease-out-cubic", // smooth easing
          once: true,             // animate only once
          offset: 100,            // trigger animation 100px before element is in view
        });
      }, []);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
        <section className="py-10 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Title */}
                    <div className="relative mx-auto max-w-3xl text-center">
                        <h2 className="relative z-1 inline-block text-2xl md:text-4xl font-extrabold text-gray-900">
                            Driver Programs
                            <span className="absolute -bottom-3 left-1/2 -z-1 h-[64px] w-[72px] -translate-x-1/2 rounded-tl-[36px] rounded-br-[36px] bg-purple-100"></span>
                        </h2>
                        <p className="mt-4 md:text-lg text-gray-500">
                            Nam a leo elit. Sed in sollicitudin odio, sed faucibus eros. Suspendisse elementum lacinia gravida metus vulputate
                            finibus.
                        </p>
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="mx-auto mt-8 max-w-5xl space-y-4 md:mt-16">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-l-2 border-purple-600 bg-gray-50 transition-all duration-200 hover:bg-gray-50"
                        >
                            <button
                                type="button"
                                onClick={() => toggleFAQ(index)}
                                className="flex cursor-pointer w-full flex-row-reverse items-center justify-end gap-6 px-4 py-5 sm:p-6"
                            >
                                <span className="flex text-lg font-semibold text-black">{faq.question}</span>
                                <Plus
                                    className={`h-6 w-6 text-black transition-transform duration-500 ${
                                        openIndex === index ? 'rotate-45' : 'rotate-0'
                                    }`}
                                />
                            </button>

                            {/* Animate answer instead of instantly hiding */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className="py-10 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Title */}
                    <div className="relative mx-auto max-w-3xl text-center">
                        <h2 className="relative z-1 inline-block text-2xl md:text-4xl font-extrabold text-gray-900">
                           Reward Programs
                            <span className="absolute -bottom-3 left-1/2 -z-1 h-[64px] w-[72px] -translate-x-1/2 rounded-tl-[36px] rounded-br-[36px] bg-purple-100"></span>
                        </h2>
                        <p className="mt-4 md:text-lg text-gray-500">
                            Nam a leo elit. Sed in sollicitudin odio, sed faucibus eros. Suspendisse elementum lacinia gravida metus vulputate
                            finibus.
                        </p>
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="mx-auto mt-8 max-w-5xl space-y-4 md:mt-16">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-l-2 border-purple-600 bg-gray-50 transition-all duration-200 hover:bg-gray-50"
                        >
                            <button
                                type="button"
                                onClick={() => toggleFAQ(index)}
                                className="flex cursor-pointer w-full flex-row-reverse items-center justify-end gap-6 px-4 py-5 sm:p-6"
                            >
                                <span className="flex text-lg font-semibold text-black">{faq.question}</span>
                                <Plus
                                    className={`h-6 w-6 text-black transition-transform duration-500 ${
                                        openIndex === index ? 'rotate-45' : 'rotate-0'
                                    }`}
                                />
                            </button>

                            {/* Animate answer instead of instantly hiding */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </div>
    );
}
