import React from "react";
import Blog1 from "../assets/blog1.jpeg"
import Blog2 from "../assets/Blog2.png"

export default function Blogs() {

    const post = [
        {
          img: Blog1,
          title: "Making Sense of Federated Learning: Concepts, Benefits, and Challenges",
          url: "https://medium.com/@myogitha0704/making-sense-of-federated-learning-concepts-benefits-and-challenges-af46b054cf7f",
        },
        {
          img: Blog2,
          title: "Using Federated Learning in anomaly detection and Analytics on real-time streaming Data of Healthcare",
          url: "https://dl.acm.org/doi/10.1145/3606283.3606288",
        },
      ];
    

    return (
    <section className="bg-primary text-white px-5 py-32" id="blogs">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-White-600 pb-2">
            Blogs
          </h2>

          <p className="pb-5">Some of my best blogs.</p>
        </div>

        <div></div>
      </div>

      <div className=" container mx-auto grid md:grid-cols-2 gap-10">
        {post.map((item) => {
          return (
            <div>
              <img src={item.img} alt={item.title} />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-[#797271] text-white px-6 py-3 hover:bg-transparent"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
    );

    
}
