import MySlide from '@/components/my-slide';
import BlogHeader from '../components/BlogHeader';
import ShapeDividerBottom from '../ShapeDividerBottom';
import Applex from '../components/Applex';

const Index = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
        <BlogHeader />

        {/* Hero Section */}
        <section className="container mx-auto flex flex-col items-center justify-between px-8 py-6 md:flex-row">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl leading-tight font-extrabold md:text-5xl">
              Awesome App <br /> Landing Page
            </h1>
            <p className="text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s,
            </p>
            <button className="mt-4 rounded-full border-2 border-white px-6 py-3 font-medium transition hover:bg-white hover:text-purple-600">
              Start Now for Free!
            </button>
          </div>

          {/* Right Content (Phone Mockup) */}
          <div className="relative mt-5 flex w-full justify-center md:mt-0 md:justify-end">
            {/* iPhone Frame */}
            <div className="relative w-64 sm:w-80 md:w-72 lg:w-80 xl:w-96">
              <img
                src="/assets/demo-images/iphone-x-frame.png"
                className="relative z-20 h-auto w-full"
                alt="iPhone X Frame"
              />

              {/* Carousel inside frame (iframe effect) */}
              <div className="absolute top-[2%] left-[4%] z-10 h-[96%] w-[92%] overflow-hidden rounded-4xl shadow-lg">
                <MySlide className="h-full w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Wave Shape Divider */}
        <ShapeDividerBottom />
      </div>
      <Applex/>
    </>
  );
};

export default Index;
