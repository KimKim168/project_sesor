import AOS from 'aos';
import 'aos/dist/aos.css';
import { HeadphonesIcon, PenIcon, TimerIcon, TimerReset, UserIcon } from 'lucide-react';
import { useEffect } from 'react';

const Applex = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-out',
            once: true, // animate only once
        });
        AOS.init(Applex);
        AOS.refresh();
    }, []);

    return (
        <div id='our_services' className="bg-white px-4 mt-10 md:pt-24 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="relative mx-auto max-w-3xl text-center" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
                <h2 className="relative z-1 inline-block text-2xl md:text-4xl font-extrabold text-gray-900">
                    Our Services
                    <span className="absolute -bottom-2 md:-bottom-3 left-4/8 -z-1 h-[54px] w-[52px] md:h-[64px] md:w-[72px] -translate-x-1/2 rounded-tl-[26px] rounded-br-[26px] md:rounded-tl-[36px] md:rounded-br-[36px] bg-purple-100"></span>
                </h2>
                <p className="mt-4 md:text-lg text-gray-500">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>

            {/* Features */}
            <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                    {
                        icon: TimerIcon,
                        title: 'Express (1-2 Hours) Delivery',
                        desc: 'We  are committed to deliver any urgent or rush parcel  within 1-2 hours from pick-up time.',
                    },
                    {
                        icon: TimerReset,
                        title: 'Same day delivery',
                        desc: 'Any pick-up before noon time will be guaranteed to be delivered before  5 pm the same day.',
                    },
                    {
                        icon: TimerReset,
                        title: 'Next Day Delivery',
                        desc: 'Any non-urgent parcel can be delivered on the next day at a much lower cost.',
                    },
                ].map((feature, idx) => (
                    <div
                        key={idx}
                        className="group flex flex-col items-center rounded-2xl p-10 text-center transition duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-500"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={idx * 200}
                    >
                        {/* Icon */}
                        <div className="flex h-16 w-16 rotate-45 transform items-center justify-center rounded-2xl bg-white shadow-[0_0_10px_rgba(0,0,0,0.20)] group-hover:bg-white/20">
                            <feature.icon className="h-9 w-9 -rotate-45 transform text-purple-600 transition duration-300 group-hover:text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-white">{feature.title}</h3>

                        {/* Description */}
                        <p className="mt-2 text-gray-500 group-hover:text-gray-200">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Applex;
