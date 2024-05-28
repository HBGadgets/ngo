import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import Campaign from "../components/Campaign";
import { useState, useEffect } from "react";

export default function Home() {
  const [campaigns, setCampaigns] = useState({});

  useEffect(() => {
    axios
      .get("campaigns")
      .then((response) => {
        setCampaigns(response.data.data);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <section className="mx-auto max-w-7xl mb-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <div className="flex flex-col justify-between gap-6">
          <h3 className="text-4xl font-bold text-violet-600">
            Empowering Change, Together.
          </h3>
          <p className="font-medium text-gray-900">
            Join us in making a difference and creating a better world.
          </p>
          <p className="text-gray-400">
          By empowering underprivileged children with education, we are investing in the future leaders, innovators, and changemakers of our society. Together, we can create a ripple effect of positive change that extends far beyond the classroom. Join us in our mission to empower change together and make a lasting impact on the lives of these deserving children.
          </p>
        </div>
        <div>
          {/* <img src="/hero.png" alt="" /> */}
          <img src="/logo.png" alt="" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-20 mb-16">
        <h2 className="text-3xl text-center font-medium capitalize mb-3">
          Our Commitment <span className="text-red-500">to Change</span>
        </h2>
        <p className="text-gray-400 text-center mb-3">
        Our commitment to change is rooted in our unwavering belief that every child deserves the opportunity to succeed. We are dedicated to transforming lives through education, providing underprivileged children with the resources, support, and encouragement they need to overcome obstacles and achieve their dreams. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="bg-violet-500 flex justify-center text-2xl shadow-md mb-2 items-center w-9 h-9 rounded p-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </span>
            <p className="text-gray-900 font-medium">Motivation</p>
            <small className="text-gray-400">
            We believe that motivation is the key to unlocking potential and achieving success, and we are committed to guiding and supporting every participant on their journey towards greatness.
            </small>
          </div>
          <div>
            <span className="bg-red-500 flex justify-center text-2xl shadow-md mb-2 items-center w-9 h-9 rounded p-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </span>
            <p className="text-gray-900 font-medium">Education</p>
            <small className="text-gray-400">
            We believe that education is the cornerstone of a brighter future, and we are committed to building strong, knowledgeable, and empowered communities, one child at a time.
            </small>
          </div>
          <div>
            <span className="bg-green-500 flex justify-center text-2xl shadow-md mb-2 items-center w-9 h-9 rounded p-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </span>
            <p className="text-gray-900 font-medium">Health Camps</p>
            <small className="text-gray-400">
            Our dedicated team of healthcare professionals works tirelessly to deliver comprehensive care, from preventive measures to immediate medical attention. By fostering a culture of health and wellness.
            </small>
          </div>
          <div>
            <span className="bg-sky-500 flex justify-center text-2xl shadow-md mb-2 items-center w-9 h-9 rounded p-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </span>
            <p className="text-gray-900 font-medium">Food</p>
            <small className="text-gray-400">
            Our daily food program is dedicated to providing nutritious meals to children in orphanages, ensuring they have the sustenance they need to grow, learn, and thrive.
            </small>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-20">
        <h2 className="text-2xl text-center font-medium capitalize mb-6">
          Some of our recent campaign
          <br />
          <span className="text-red-500 font-bold">
            to help helpless people
          </span>
        </h2>

        <div className="w-full">
          {campaigns.length > 0}
          {
            <OwlCarousel
              items={3}
              className="owl-theme"
              loop
              autoplay
              responsive={{ 0: { items: 1 }, 600: { items: 3 } }}
              dots={false}
              margin={8}
            >
              {campaigns.length > 0 &&
                campaigns.map((campaign) => {
                  return <Campaign key={campaign.id} campaign={campaign} />;
                })}
            </OwlCarousel>
          }
        </div>
      </section>
    </>
  );
}
