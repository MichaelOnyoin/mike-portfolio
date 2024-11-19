import React from 'react';
//import Image from 'next/image';

interface BlogPostProps {
  imageSrc: string;
  category: string;
  author: string;
  date: string;
  title: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ imageSrc, category, author, date, title }) => (
  <article className="flex flex-col min-w-[240px] w-[416px]">
    <div className="flex relative gap-2.5 items-start w-full max-w-[416px] shadow-[0px_4px_55px_rgba(0,0,0,0.05)]">
      <img loading="lazy" src={imageSrc} alt={title} className="object-contain z-0 aspect-[0.96] min-w-[240px] w-[416px]" />
      <div className="flex absolute right-0 bottom-0 z-0 gap-2.5 justify-center items-center px-5 bg-slate-800 h-[114px] min-h-[114px] rotate-[-1.570796370506285rad] rounded-[57px] w-[115px] max-md:px-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/f473f9dc59707305ecfa06ffd6686003431957b65e03aa55f1f864128fe449ad?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain flex-1 shrink aspect-square basis-0 w-[72px]" />
      </div>
    </div>
    <div className="overflow-hidden gap-2.5 self-start px-8 py-4 mt-9 text-xl text-black bg-gray-100 rounded-3xl max-md:px-5">
      {category}
    </div>
    <div className="flex gap-9 items-start self-start mt-9 text-xl text-slate-700">
      <div className="flex gap-2.5 items-center">
        <div className="flex shrink-0 self-stretch my-auto bg-orange-400 rounded-full h-[9px] w-[9px]" />
        <div>{author}</div>
      </div>
      <div className="flex gap-2.5 items-center">
        <div className="flex shrink-0 self-stretch my-auto bg-orange-400 rounded-full h-[9px] w-[9px]" />
        <div>{date}</div>
      </div>
    </div>
    <h3 className="mt-9 text-3xl text-slate-700">{title}</h3>
  </article>
);

const BlogPosts: React.FC = () => {
  const blogPosts = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/3b1c8f9a09754ee0acecc3af4f41e95fbe049c835f561c76215adcc580d21e54?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
      category: "UI/ UX Design",
      author: "Jayesh Patil",
      date: "10 Nov, 2023",
      title: "Design Unraveled: Behind the Scenes of UI/UX Magic"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/c156205109c5a1e3454218b5d4337b3f7cd901a80f52cb81e0fddd4f05d0aae4?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
      category: "App Design",
      author: "Jayesh Patil",
      date: "09 Oct, 2023",
      title: "Sugee: Loan Management System for Rural Sector."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/6041be116a9e02c26c7eff4cff3061e34153ea7f3793add42c860e02cbcb4fa0?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
      category: "App Design",
      author: "Jayesh Patil",
      date: "13 Aug, 2023",
      title: "Cinetrade: Innovative way to invest in Digital Media"
    }
  ];

  return (
    <section className="flex overflow-hidden flex-col py-24 pr-16 pl-16 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full font-bold max-md:max-w-full">
        <h2 className="self-stretch my-auto text-5xl tracking-tighter text-slate-700 max-md:text-4xl">
          From my blog post
        </h2>
        <button className="overflow-hidden gap-2.5 self-stretch px-10 py-5 my-auto text-xl tracking-tight text-white bg-orange-400 rounded-[60px] max-md:px-5">
          See All
        </button>
      </div>
      <div className="flex flex-wrap gap-6 justify-between items-start self-center mt-12 max-w-full w-[1299px] max-md:mt-10">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;