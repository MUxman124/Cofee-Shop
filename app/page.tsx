'use client'
import Explore from "@/Components/Explore";
import Favorite from "@/Components/Favurite";
import BestSelling from "@/Components/BestSelling";
import InstantCoffee from "@/Components/InstantCoffee";
import Testimonial from "@/Components/Testimonial";
import Hero from "@/Components/Hero";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000, 
      });
    }
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Explore />
      <Favorite />
      <BestSelling />
      <InstantCoffee />
      <Testimonial />
    </main>
  );
}
