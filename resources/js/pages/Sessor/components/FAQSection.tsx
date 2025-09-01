import AOS from 'aos';
import 'aos/dist/aos.css';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
const DriverPrograms = [
    {
        question: 'Our Core Team',
        answer: 'We have highly motivated employees catering to customer’s various needs.  All our drivers and support staff at the office are properly trained for the job and are reliable for delivering on time.',
    },
    {
        question: 'Freelancers',
        answer: 'We also have some freelancer drivers who can do delivery job at their convenience at a much lower cost. This option is best for non-urgent package.',
    },
    // {
    //     question: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo?',
    //     answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    // },
    // {
    //     question: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?',
    //     answer: 'making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    // },
];
const RewardPrograms = [
    {
        question: 'Customers Rewards',
        answer: 'Our reward program offers our customers cash back on delivery cost. The more you use us, the more money you save into your point system. These points credit can be applied to cover your next delivery job.',
    },
    {
        question: 'Be Our Partner',
        answer: 'We offer special service rate and proven quality service for a mutually benefited long term business partnership. Please contact us for more details.',
    },
];

export default function FAQSection() {
    useEffect(() => {
        AOS.init({
            duration: 1800, // animation lasts 1.8s
            easing: 'ease-out-cubic', // smooth easing
            once: true, // animate only once
            offset: 100, // trigger animation 100px before element is in view
        });
    }, []);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div >
            <section id='driver_programs' className="py-10 sm:py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Title */}
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {/* Title */}
                        <div className="relative mx-auto max-w-3xl text-center">
                            <h2 className="relative z-1 inline-block text-2xl font-extrabold text-gray-900 md:text-4xl">
                                Driver Programs
                                 <span className="absolute -bottom-2 md:-bottom-3 left-4/8 -z-1 h-[54px] w-[52px] md:h-[64px] md:w-[72px] -translate-x-1/2 rounded-tl-[26px] rounded-br-[26px] md:rounded-tl-[36px] md:rounded-br-[36px] bg-purple-100"></span>
                            </h2>
                            <p className="mt-4 text-gray-500 md:text-lg">
                                Nam a leo elit. Sed in sollicitudin odio, sed faucibus eros. Suspendisse elementum lacinia gravida metus vulputate
                                finibus.
                            </p>
                        </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="mx-auto mt-8 max-w-5xl space-y-4 md:mt-16">
                        {DriverPrograms.map((faq, index) => (
                            <div key={index} className="border-l-2 border-purple-600 bg-gray-50 transition-all duration-200 hover:bg-gray-50">
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full cursor-pointer flex-row-reverse items-center justify-end gap-6 px-4 py-5 sm:p-6"
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
            <section id='reward_programs' className="py-10 sm:py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Title */}
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {/* Title */}
                        <div className="relative mx-auto max-w-3xl text-center">
                            <h2 className="relative z-1 inline-block text-2xl font-extrabold text-gray-900 md:text-4xl">
                                Reward Programs
                                 <span className="absolute -bottom-2 md:-bottom-3 left-4/7 -z-1 h-[54px] w-[52px] md:h-[64px] md:w-[72px] -translate-x-1/2 rounded-tl-[26px] rounded-br-[26px] md:rounded-tl-[36px] md:rounded-br-[36px] bg-purple-100"></span>
                            </h2>
                            <p className="mt-4 text-gray-500 md:text-lg">
                                Nam a leo elit. Sed in sollicitudin odio, sed faucibus eros. Suspendisse elementum lacinia gravida metus vulputate
                                finibus.
                            </p>
                        </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="mx-auto mt-8 max-w-5xl space-y-4 md:mt-16">
                        {RewardPrograms.map((faq, index) => (
                            <div key={index} className="border-l-2 border-purple-600 bg-gray-50 transition-all duration-200 hover:bg-gray-50">
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full cursor-pointer flex-row-reverse items-center justify-end gap-6 px-4 py-5 sm:p-6"
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
