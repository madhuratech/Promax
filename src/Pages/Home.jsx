import HeroSection from '../Components/Hero/hero'
import AboutSection from '../Components/About/about'
import AudioBrandsSection from '../Components/Brand/brand'
import ServiceSection from '../Components/Service/service'
import ProductSection from '../Components/ProductSection/ProductSection'
import Whychoose from '../Components/WhyChoose/whychoose'
import GallerySection from '../Components/Gallery/gallery'
import TestimonialsSection from '../Components/Testimonial/testimonialSection';
import FAQSection from '../Components/FAQ/faq'
import CTASection from '../Components/CallToAction/calltoaction'

function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <AudioBrandsSection />
            <ServiceSection />
            <ProductSection />
            <Whychoose />
            <GallerySection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
        </div>
    )
}

export default Home