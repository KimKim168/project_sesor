"use client";
import {
  PanelsTopLeftIcon,
  PackageOpen,
  Palette,
  Smile,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MyFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800,         // animation lasts 1.8s
      easing: "ease-out-cubic", // smooth easing
      once: true,             // animate only once
      offset: 100,            // trigger animation 100px before element is in view
    });
  }, []);

  const features = [
    {
      icon: PanelsTopLeftIcon,
      title: "Responsive web design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: PackageOpen,
      title: "Free updates forever",
      desc: "Pellentesque eget enim id dolor facilisis semper id condimentum massa.",
    },
    {
      icon: Palette,
      title: "Infinite colors",
      desc: "Aenean dictum velit vitae est lobortis, et lobortis imperdiet erat placerat.",
    },
    {
      icon: Smile,
      title: "Friendly online support",
      desc: "Suspendisse eget velit euismod, facilisis felis et, rhoncus nulla. Cras quis risus aliquet, pretium turpis, accumsan est.",
    },
  ];

  return (
    <div className="mt-24 bg-gradient-to-r from-purple-600 to-indigo-500 py-14 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          data-aos="fade-down"
          className="mx-auto flex flex-col items-center text-center"
        >
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Our Mobile App
          </h2>
          <p className="mt-3 max-w-2xl text-base sm:text-lg text-gray-100">
            Aenean dictum velit vitae est lobortis, et imperdiet erat placerat.
            Fusce efficitur lectus et dui luctus ultrices.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-10 py-10 lg:flex-row lg:py-16">
          {/* iPhone Frame */}
          <div
            className="w-full lg:max-w-lg"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="relative mx-auto w-64 sm:w-80 md:w-72 lg:w-80 xl:w-96">
              <img
                src="/assets/demo-images/iphone-x-frame.png"
                className="relative z-20 h-auto w-full"
                alt="iPhone X Frame"
              />
              {/* Screen */}
              <div className="absolute top-[2%] left-[4%] z-10 h-[96%] w-[92%] overflow-hidden rounded-4xl shadow-lg">
                <img
                  src="/assets/demo-images/slide1.jpg"
                  className="h-full w-full object-cover"
                  alt="App Preview"
                />
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="flex flex-col gap-8">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div
                  key={idx}
                  data-aos="fade-left"
                  data-aos-delay={500 * (idx + 1)} // stagger animation
                  className="flex items-start gap-6 rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:shadow-xl"
                >
                  {/* Icon */}
                  <div className="flex h-16 w-16 rotate-45 transform items-center justify-center rounded-3xl bg-white shadow-md">
                    <Icon className="h-8 w-8 -rotate-45 text-indigo-600" />
                  </div>
                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{f.title}</h3>
                    <p className="mt-2 text-gray-200">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFeatures;
