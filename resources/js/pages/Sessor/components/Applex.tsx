import { useEffect } from "react";
import { UserIcon, PenIcon, HeadphonesIcon } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Applex = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      once: true, // animate only once
    });
    // AOS.init(Applex);
    // AOS.refresh();
  }, []);

  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000">
        <h2 className="text-4xl font-extrabold text-gray-900 relative inline-block">
          Why{" "}
          <span className="relative">
            <span className="absolute inset-0 bg-purple-100 w-18 h-16 rounded-tl-4xl rounded-br-4xl -translate-y-2  -z-10 rounded-sm"></span>
            Applex?
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Features */}
      <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {[
          {
            icon: UserIcon,
            title: "User Friendly",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            icon: PenIcon,
            title: "Awesome Design",
            desc: "Pellentesque eget enim id dolor facilisis semper id condimentum massa.",
          },
          {
            icon: HeadphonesIcon,
            title: "24/7 Support",
            desc: "Aenean dictum velit vitae est lobortis, et lobortis imperdiet erat placerat.",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center text-center p-10 rounded-2xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-500 transition duration-300"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={idx * 500} 
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center transform rotate-45 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.20)] bg-white group-hover:bg-white/20">
              <feature.icon className="h-6 w-6 text-purple-600 transform -rotate-45 group-hover:text-white transition duration-300" />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-white">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-500 group-hover:text-gray-200">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applex;
