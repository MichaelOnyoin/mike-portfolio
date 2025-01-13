//import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import HireMe from '@/components/HireMe';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import BlogPosts from '@/components/BlogPosts';
import Marquee from '@/components/Marquee';
import Call from '@/components/Call';
export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Experience />
      <HireMe />
      <Portfolio />
      <Testimonials />
      <Call/>
      <Marquee/>
      <BlogPosts />
    </div>
  );
}