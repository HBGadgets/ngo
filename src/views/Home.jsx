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
      <section style={{margin:40}}>
        <div className="gap-6" >
          <div style={{display:'flex', justifyContent:'space-between'}}>
          <div style={{textAlign:'center'}}>
          <p className="text-4xl font-bold text-red-600" style={{fontSize:30}}>
            EDUCATION IS THE BATTLE AGAINST POVERTY
          </p>
          <p className="text-4xl font-bold text-black-600" style={{fontSize:40}}>
          Support Our Muslim Community's<br/> Education Drive !
          </p></div>
          <div>
          <img src="/picc.jpg" alt="" style={{height:250, width:250, marginRight:100}} />
          </div>
          </div>

          
          <p>
          Assalamu Alaikum to all<br /> 
            In the spirit of giving and improving our world, we <b style={{color:'red'}}>Ummat KI Khidmat Foundation </b> 
has launched an educational initiative aimed at uplifting our Muslim 
community for the last several years.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Many of our community members, particularly in underprivileged regions, face 
barriers to education. The lack of resources, infrastructure, and support often holds 
back bright young minds from reaching their full potential. The knowledge that these 
students could share with the world is being stifled due to these challenges.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;But you can help change that! By donating to our cause, you're not only giving 
these students access to education but also investing in the future of our community. We 
are thankful to all our generous <b style={{color:'red'}}> Ummat Donors </b> for their huge contribution for the last 
several years. Due to your Zakat Donation we are able to provide the <b style={{color:'red'}}> Zakat Scholarship </b>
 to the eligible students for higher studies.<b style={{color:'green'}}>"Scholarships:" </b> Funds are 
allocated to support the education of deserving students who demonstrate academic 
excellence but lack financial resources to pursue higher education.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;As members of a global community, it's incumbent upon us to support each other. By 
donating, you are not only investing in the education of our youth but also in the future 
leaders, thinkers, and innovators of our world. Let's work together to create a brighter 
future for the Muslim community and beyond.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Donate now and be a catalyst for change! Your <b style={{color:'red'}}>ZAKAT / SADQA / ATIYA </b> 
contribution, no matter how big or small, will make a meaningful difference in the lives of 
many Muslim Students.<b style={{color:'green'}}> Jazak Allahu Khairan! (May Allah reward you abundantly!) </b> <br/>
&nbsp;&nbsp;&nbsp;&nbsp;Our Muslim Community has realised now that only education can pull it out of its 
backwardness. And the <b style={{color:'purple'}}> Today's Recipient of Zakat should become Tomorrow's Zakat Donor. </b> <b style={{color:'red'}}>That is our Mission...</b>
 <div style={{textAlign:'right'}}>
 <b style={{color:'red'}}>Haji Gulamnabi Shaikh</b><br/>
 <div style={{marginRight:'30px' }}> <p>Chief Promoter</p></div>
 </div>
          </p>
        </div>
        <div>
          {/* <img src="/hero.png" alt="" /> */}
          
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
