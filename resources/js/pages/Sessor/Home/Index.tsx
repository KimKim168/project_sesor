import MySlide from '@/components/my-slide';
import Applex from '../components/Applex';
import BgFooter from '../components/BgFooter';
import BlogHeader from '../components/BlogHeader';
import Contact from '../components/Contact';
import FAQSection from '../components/FAQSection';
import MyFeatures from '../components/MyFeatures';
import ShapeDividerBottom from '../components/ShapeDividerBottom';
import ShapeDividerTop from '../components/ShapeDividerTop';
import SingleVideoPopup from '../components/Video';
import MyAlertDialog from '../components/MyAlertDialog';
import MyHero from '../components/MyHero';

const Index = () => {
    return (
        <>
            <BlogHeader />
            <div className="relative bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
                {/* Hero Section */}
                <section className="container mx-auto flex flex-col items-center justify-between px-8 py-6 md:flex-row">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl leading-tight font-extrabold md:text-5xl">About Us</h1>
                        <p className="text-gray-200 line-clamp-4">
                            SESOR Express is a subsidiary company of Westec Corporation with roots deeply planted in Cambodia's business landscape for
                            16 years. Our management team comprises seasoned entrepreneurs and tech experts from diverse backgrounds, collectively
                            bringing a wealth of hands-on experience to the table.
                        </p>
                        {/* <button className="mt-4 rounded-full border-2 border-white px-6 py-3 font-medium transition hover:bg-white hover:text-purple-600">
                            Read More
                        </button> */}
                        <div className='mt-4'>
                            <MyAlertDialog />
                        </div>
                    </div>

                    {/* Right Content (Phone Mockup) */}
                    <div className="relative mt-5 flex w-full justify-center md:mt-0 md:justify-end">
                        {/* iPhone Frame */}
                        <div className="relative w-64 sm:w-80 md:w-72 lg:w-80 xl:w-96">
                            <img src="/assets/demo-images/iphone-x-frame.png" className="relative z-20 h-auto w-full" alt="iPhone X Frame" />

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
            <MyHero />
            <Applex />
            <MyFeatures />
            <FAQSection />
            <div className="relative bg-gradient-to-r from-purple-600 to-indigo-500 py-[150px] text-white">
                <ShapeDividerTop />
                {/* Hero Section */}
                <section className="container mx-auto flex flex-col items-center justify-center px-8 py-6 md:flex-row">
                    {/* Left Content */}
                    <div className="relative mx-auto max-w-3xl text-center">
                        <h2 className="relative z-1 inline-block text-2xl font-extrabold md:text-4xl">
                            App Working
                            <span className="absolute -bottom-2 md:-bottom-3 left-4/8 -z-1 h-[54px] w-[52px] md:h-[64px] md:w-[72px] -translate-x-1/2 rounded-tl-[26px] rounded-br-[26px] md:rounded-tl-[36px] md:rounded-br-[36px] bg-purple-500"></span>
                        </h2>
                        <p className="mt-4 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, sunt
                            explicabo.
                        </p>
                        <div className="mt-4 flex justify-center">
                            <SingleVideoPopup />
                        </div>
                    </div>
                </section>
            </div>
            {/* <Stats/> */}
            <Contact />
            <BgFooter />
        </>
    );
};

export default Index;
