import Footer from './Footer';
import ShapeDividerTop from './ShapeDividerTop';

const BgFooter = () => {
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-indigo-500 py-[50px] text-white">
            <ShapeDividerTop />
            {/* Hero Section */}
            <Footer/>
        </div>
    );
};

export default BgFooter;
