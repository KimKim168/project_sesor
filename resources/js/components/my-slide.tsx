import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Link } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const MySlide = ({ className, images = [] }: { className?: string; images?: any }) => {
    images = [
        {
            id: '1',
            image: '/assets/demo-images/slide1.jpg',
            alt: 'image 1',
        },
        {
            id: '2',
            image: '/assets/demo-images/slide2.png',
            alt: 'image 2',
        },
        
    ];

    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    return (
        <div className={className}>
            {images.length > 0 && (
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                    opts={{ align: 'start', loop: false }}
                    setApi={setApi}
                    className='bg-true-primary '
                >
                    <CarouselContent>
                        {images.map((image) => (
                            <CarouselItem key={image.id} className='pl-0 w-full aspect-[9/19]'>
                                <Link href={image.link || '#'}>
                                    <img
                                        className={`w-full h-full object-cover transition-all duration-500 ${
                                            image.link ? 'border-primary hover:scale-95 hover:border-2' : ''
                                        }`}
                                        src={image.image}
                                        alt={image.name}
                                    />
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            )}
        </div>
    );
};

export default MySlide;
