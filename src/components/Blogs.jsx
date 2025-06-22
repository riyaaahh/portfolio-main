import React from 'react';

const blogs = [
  {
    id: 1,
    title: "Creating a Stunning Portfolio",
    author: "Jane Doe",
    date: "June 1, 2024",
    content: "Learn how to create a stunning portfolio to showcase your work. We'll guide you",
    imageUrl: "https://img.freepik.com/free-photo/portrait-happy-smiley-man_23-2149022622.jpg?t=st=1718856766~exp=1718860366~hmac=542b1bc10e496264127359dd8a5ff1355398d7473071a15e17968de268ee89e9&w=826"
  },
  {
    id: 2,
    title: "Top 10 Portfolio Tips",
    author: "John Smith",
    date: "June 10, 2024",
    content: "Discover the top 10 tips for creating an impressive portfolio that stands out.",
    imageUrl:"https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1718856607~exp=1718860207~hmac=298cbd319c17fab583967927cc3d9cabc1a94d96041d3b0296a3b3091bf447a9&w=740"
  },
  {
    id: 3,
    title: "Design Trends for Portfolios",
    author: "Alice Johnson",
    date: "June 15, 2024",
    content: "Stay updated with the latest design trends for portfolios in 2024.",
    imageUrl: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1718856563~exp=1718860163~hmac=3b10c0d9fe602637d6f1b7833175286967e2583597a4e7bd9b523d8150fd80c5&w=740"
  },
  {
    id: 4,
    title: "Effective Portfolio Design",
    author: "Michael Brown",
    date: "June 20, 2024",
    content: "Understand the key elements of effective portfolio design and how to apply them to your own work.",
    imageUrl: "https://img.freepik.com/free-photo/coquettish-attractive-happy-girlfriend-receive-charming-expensive-gift-smiling-joyfully-receive-desired-thing-clasp-hands-near-jawline-flirty-feminine-pose-standing-white-background_176420-36987.jpg?t=st=1718857038~exp=1718860638~hmac=0257524c230c1fa962c8a6346855c0e887f8dc7564504c9f21cca2ec660ade24&w=740"
  }
];

const BlogCard = ({ title, author, date, content, imageUrl }) => (
  <div className="max-w-md rounded overflow-hidden shadow-lg m-4 bg-white border-2 border-black">
    <img className="w-full h-72 object-cover border-black border-b-2" src={imageUrl} alt={author} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{content}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-green-200 rounded-lg px-6 py-2 text-sm font-semibold text-black mr-2 mb-2">{author}</span>
      <span className="inline-block bg-green-200 rounded-lg px-6 py-2 text-sm font-semibold text-black mr-2 mb-2">{date}</span>
    </div>
  </div>
);

const Blogs = () => {
  return (
    <div className="bg-white min-h-screen p-5 border-t-2 border-black mb-20 mt-20">
      <h1 className="text-4xl font-extrabold text-center mt-20 mb-8">Our Blogs</h1>
      <div className="flex flex-wrap justify-center">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            author={blog.author}
            date={blog.date}
            content={blog.content}
            imageUrl={blog.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
