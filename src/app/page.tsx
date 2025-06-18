'use client';

import Image from "next/image";
import { Cover } from "@/app/components/ui/cover";
import { FeaturesSectionDemo } from "@/app/components/Feature/Page";
import Work_Section from "@/app/components/How_Work/Page";
import  Testimonial_Feature  from "@/app/components/Testimonial/Page";
import PricingSection from "@/app/components/Price/Page";
import Footer from '@/app/components/Footer/Page';
import { useAuth0 } from '@auth0/auth0-react';

const sampleTestimonials = [
  {
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarah Johnson",
    jobtitle: "Business Owner",
    text: "Legal Care helped me navigate a complex contract dispute. Their expertise saved me thousands and gave me peace of mind.",
    rating: 5
  },
  {
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarah Johnson",
    jobtitle: "Business Owner",
    text: "Legal Care helped me navigate a complex contract dispute. Their expertise saved me thousands and gave me peace of mind.",
    rating: 5
  },
  {
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarah Johnson",
    jobtitle: "Business Owner",
    text: "Legal Care helped me navigate a complex contract dispute. Their expertise saved me thousands and gave me peace of mind.",
    rating: 5
  },
  {
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarah Johnson",
    jobtitle: "Business Owner",
    text: "Legal Care helped me navigate a complex contract dispute. Their expertise saved me thousands and gave me peace of mind.",
    rating: 5
  },
  
];

export default function Home() {
  const { loginWithRedirect } = useAuth0();

  const handleGetLegalAdvice = () => {
    loginWithRedirect();
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 max-w-4xl mx-auto">
          <h1 className="font-bold text-white leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl merriweather-title">
            Facing Legal Trouble?
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold text-white merriweather-title">
              Just Use
            </span>
            <Cover className="inline-block text-blue-400 font-extrabold text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-6xl align-middle pacifico-regular">
              Legal Care
            </Cover>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg" onClick={handleGetLegalAdvice}>
              Get Legal Advice
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg">
              Explore Legal Topics
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen bg-white dark:bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
              Why Choose Legal Care?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Get the legal support you need with our comprehensive suite of services designed for modern legal challenges.
            </p>
          </div>
          <FeaturesSectionDemo/>
        </div>
      </section>
      
      {/* How Work Section */}
      <div>
        <section>
          <Work_Section/>
        </section>
      </div>
      
      <section className="py-40">
        <Testimonial_Feature testimonials={sampleTestimonials} mode="dark"/>
      </section>
      <section className="py-40">
        <PricingSection/>
      </section>
      <Footer/>
    </div>
    
  );
}
