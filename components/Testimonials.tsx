import React from 'react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, rating }) => (
  <div className="flex overflow-hidden relative flex-col items-start p-5 mx-auto w-full text-gray-50 rounded-3xl bg-white bg-opacity-10 max-md:px-5 max-md:mt-6 max-md:max-w-full">
    <div className="flex z-0 gap-3 text-center">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/f025460dda5f3662d701c1e4b5e22df405d12ac07578a9a8d0cac798f3c21500?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt={`${author}'s avatar`} className="object-contain shrink-0 self-start aspect-square w-[55px]" />
      <div className="flex flex-col items-start">
        <div className="text-2xl font-bold">{author}</div>
        <div className="text-lg">{role}</div>
      </div>
    </div>
    <div className="flex z-0 gap-1.5 items-center mt-3.5 text-2xl font-medium tracking-tight whitespace-nowrap">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/b9949262d5be39ab3fa9e5468c9516800453edda476eb3db2d9dd9ec85083293?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt={`${rating} star rating`} className="object-contain shrink-0 self-stretch my-auto w-40 aspect-[5]" />
      <div className="self-stretch my-auto">{rating}.0</div>
    </div>
    <p className="z-0 self-stretch mt-3.5 text-xl tracking-tight text-gray-50 max-md:max-w-full">
      {content}
    </p>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/656cc7945843b1f9ad1c51b1f902f46c57e708cbdce8dbba7553895a254fb24a?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Quotation mark" className="object-contain absolute top-3 right-3.5 z-0 w-32 max-w-full h-32 aspect-square" />
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Hiring Mariam to manage our digital marketing was one of the best decisions we've made. She completely revamped our online presence, crafted campaigns that resonated with our audience, and dramatically increased our leads and sales. If you want real results, look no further than Mariam!",
      author: "Jayesh Patil",//Sarah P., E-commerce Entrepreneur
      role: "CEO, Lirante",
      rating: 5
    },
    // Add more testimonials here if needed
    {
      content: "Working with Mariam for our accounting needs has been a game-changer for our business. They not only streamlined our bookkeeping but also provided invaluable insights into tax planning and financial forecasting. Thanks to their expertise, we've saved both time and money while gaining a clearer picture of our company's financial health. I highly recommend their services to anyone looking for a knowledgeable and reliable accountant  --Alexandra M., Business Owner",
      author: "Jay Jamal",
      role: "CTO, Lirante",
      rating: 5
    },
    {
      content: "I was feeling stuck and overwhelmed in my career until I started coaching sessions with Mariam. Their thoughtful guidance and actionable strategies helped me set clear goals and finally take the steps I needed to advance. Every session felt tailored to my needs, I'm now thriving in ways I never imagined. Thank you, Mariam!",
      author: "Dr. Michael Thompson",
      role: "Marketing Professional",
      rating: 5
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col items-center pt-28 pr-16 pb-48 pl-16 w-full bg-neutral-900 min-h-[863px] rounded-[50px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex relative flex-col max-w-full text-center w-[1299px]">
        <h2 className="z-0 self-center text-5xl font-medium tracking-tighter text-gray-50 max-md:max-w-full max-md:text-4xl">
          Testimonials That Speak to <span className="text-orange-400">My Results</span>
        </h2>
        <p className="z-0 self-center mt-3.5 text-xl tracking-tight text-gray-50 max-md:max-w-full">
        See for yourself what my former clients say about my work and testify on my behalf about their satisfaction.
        </p>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/f5327575cf9fa5bf9ea692db7da40c258a53cfbe43e6c27e1d53f96324df7744?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain absolute z-0 w-7 aspect-[0.97] h-[29px] right-[421px] top-[-9px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/6c2a80615f90fb38a6ee0a66c759dd9f25f8d2d139144360ff02f38bdf215cf4?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain absolute z-0 aspect-square bottom-[65px] h-[25px] right-[238px] w-[26px]" />
      </div>
      <div className="mt-24 max-w-full w-[1299px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`flex flex-col ${index === 1 ? 'w-[56%]' : 'w-[22%]'} max-md:ml-0 max-md:w-full`}>
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;