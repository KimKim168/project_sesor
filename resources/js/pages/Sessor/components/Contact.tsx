import { Mail, MapPinIcon, PhoneCallIcon } from 'lucide-react';
import Form from './Form';

const Contact = () => {
    return (
        <section id='contact' className="py-10 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="relative mx-auto max-w-3xl text-center">
                    <h2 className="relative z-1 inline-block text-2xl font-extrabold text-gray-900 md:text-4xl">
                        Contact us
                        {/* <span className="absolute -bottom-3 left-1/2 -z-1 h-[64px] w-[72px] -translate-x-1/2 rounded-tl-[36px] rounded-br-[36px] bg-purple-100"></span> */}
                         <span className="absolute -bottom-2 md:-bottom-3 left-4/8 -z-1 h-[54px] w-[52px] md:h-[64px] md:w-[72px] -translate-x-1/2 rounded-tl-[26px] rounded-br-[26px] md:rounded-tl-[36px] md:rounded-br-[36px] bg-purple-100"></span>
                    </h2>
                    <p className="mt-4 text-gray-500 md:text-lg">
                        Cras lectus lectus, efficitur nec semper vel, efficitur quis turpis. Ut sit amet metus hendrerit sapien gravida lobortis.
                    </p>
                </div>

                {/* Contact Items */}
                <div className="mx-auto mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            icon: PhoneCallIcon,
                            label: 'Tel',
                            link: 'tel:+85516551575',
                            text: '+855 16 551 575 | 012 271 262',
                        },
                        {
                            icon: Mail,
                            label: 'Email',
                            link: 'mailto:contact@sesorexpress.com',
                            text: 'contact@sesorexpress.com',
                        },
                        {
                            icon: MapPinIcon,
                            label: 'Location',
                            link: 'https://www.google.com/maps?q=11.584365,104.872123', // replace with exact coords
                            text: '#20, Street 598C, Phum Tomnob, Sangkat Phnom Penh Thmey, Khan SenSok, Phnom Penh, Cambodia',
                        },
                    ].map((feature, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col items-center rounded-2xl p-10 text-center transition duration-300"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay={idx * 500}
                        >
                            {/* Icon */}
                            <div className="flex h-16 w-16 rotate-45 items-center justify-center rounded-2xl bg-white shadow-[0_0_10px_rgba(0,0,0,0.20)] group-hover:bg-white/20">
                                <feature.icon className="h-6 w-6 -rotate-45 text-purple-600 transition duration-300" />
                            </div>

                            {/* Link */}
                            <a
                                href={feature.link}
                                target={feature.label === 'Location' ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="mt-6 text-base text-gray-700 hover:text-blue-600"
                            >
                                {feature.text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Form />
        </section>
    );
};

export default Contact;
