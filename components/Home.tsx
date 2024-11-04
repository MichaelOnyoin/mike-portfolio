import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Experience from '../components/Experience';
import HireMe from '../components/HireMe';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import BlogPosts from '../components/BlogPosts';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Experience />
      <HireMe />
      <Portfolio />
      <Testimonials />
      <ContactForm />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/151e86ca7088d021ff23a217bbc0b6f0e330a52efab443dc5740470baeb89545?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Decorative image" className="object-contain self-center w-full rounded-3xl aspect-[9.8]" />
      <BlogPosts />
    </Layout>
  );
};

export default Home;