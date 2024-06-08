import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Typography, Grid, Container } from '@mui/material';

const About = () => {
  return (
    <div>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-20">
          <div className="flex lg:flex-1">
            <Link to={"/"} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-24 w-auto" src="/logo.png" alt="" />
            </Link>
          </div>
          <p className="text-4xl font-bold text-black-600" style={{ fontSize: 30, background: 'linear-gradient(to right, red, blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginRight:10 }}>
            UMMAT KI KHIDMAT FOUNDATION
          </p>
          <div className="hidden lg:flex lg:gap-x-4">
            <NavLink
              end
              to={"/about"}
              className="text-lg font-bold leading-6 text-gray-900"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "black",
              })}
            >
              About Us
            </NavLink>
            <NavLink
              end
              to={"/"}
              className="text-lg font-bold leading-6 text-gray-900"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "black",
              })}
            >
              Campaigns
            </NavLink>
            <NavLink
              end
              to={"/scholarship"}
              className="text-lg font-bold leading-6 text-gray-900"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "black",
              })}
            >
              Scholarship Form
            </NavLink>
            <NavLink
              end
              to={"/contact"}
              className="text-lg font-bold leading-6 text-gray-900"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "black",
              })}
            >
              Contact
            </NavLink>
            <NavLink
              end
              to={"/login"}
              className="text-lg font-bold leading-6 text-gray-900"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "black",
              })}
            >
              Login
            </NavLink>
          </div>
        </nav>
      </header>

    <hr />

      <Container style={{marginTop:50}}>
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
          <b>MANAGING COMMITTEE</b>
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {/* First Column */}
          <Grid item xs={4}>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
              Prof. Mehboob Kazi
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
              9175786919
            </Typography>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
              Prof. Sajid Khan
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
              9370323448
            </Typography>
          </Grid>
          {/* Second Column */}
          <Grid item xs={4}>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
              Dr. Rafiq Mokashi
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
              9822015412
            </Typography>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
              Shakir Chougule
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
              9890790075
            </Typography>
          </Grid>
          {/* Third Column */}
          <Grid item xs={4}>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
              Mobin Shaikh
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
              9890109897
            </Typography>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
              Jilani Patel
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
              9960306360
            </Typography>
          </Grid>
        </Grid><br/>
        {/* Chief Promoter */}
        <Typography variant="h4" align="center" color="red" gutterBottom style={{ fontSize: 24 }}>
          <b>Haji Gulamnabi Zohra Yunus Shaikh</b>
        </Typography>
        <Typography variant="h6" align="center" color="textPrimary" gutterBottom style={{ fontSize: 20 }}>
          Chief Promoter
        </Typography>
        <Typography variant="h5" align="center" color="textPrimary" gutterBottom style={{ fontSize: 18 }}>
          <strong>Mob. 9867797287</strong>
        </Typography>
      </Container>
        
        <hr/>
        <br/>

      {/* Additional Container */}
      <Container style={{marginBottom:50}}>
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
          <b>ADVISORY COMMITTEE</b>
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {/* First Column */}
          <Grid item xs={3}>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
            Haji Saipan Jatkar
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
            9967588156
            </Typography>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
            Nisar Tamboli
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
            9822247760
            </Typography>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
            Sabir Ali Sir
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
            9673137868
            </Typography>
          </Grid>
          {/* Second Column */}
          <Grid item xs={3}>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
            Asif Mahaldar
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
            9821017079
            </Typography>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
            Haji Shafi Momin
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
            8805356461
            </Typography>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
            Tanvir Sayyed
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
            9594066062
            </Typography>
          </Grid>
          {/* Third Column */}
          <Grid item xs={3}>
            <Typography variant="h6"
                color="red" style={{ fontSize: 24 }}>
            Haji Firoz Pathan
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
            Junnar 9860499786
            </Typography>
            <Typography variant="h6"
                color="red" style={{ fontSize: 24 }}>
            Dr. Amir Kazi
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
            9923682419
            </Typography>
            <Typography variant="h6"
                color="red" style={{ fontSize: 24 }}>
            Badshah Inamdar
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
            9890636015
            </Typography>
            </Grid>
            {/* Fourth Column */}
            <Grid item xs={3}>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
            Irfan Bhai Sayyed
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
            9850417575
            </Typography>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
            Rehan Kazi Sir
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
            9422088991
            </Typography>
            <Typography variant="h6" color="red" style={{ fontSize: 24 }}>
            Iqbal Ashrafi
            </Typography>
            <Typography variant="body1" color="textPrimary" style={{ fontSize: 18 }}>
            9323333474
            </Typography>
            </Grid>
            </Grid>
            </Container>

            <hr />

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
 <b style={{color:'red'}}>Haji Gulamnabi Zohra Yunus Shaikh</b><br/>
 <div style={{marginRight:'70px'}}> <p>Chief Promoter</p></div>
 </div>
          </p>
        </div>
        <div>
          {/* <img src="/hero.png" alt="" /> */}
          
        </div>
      </section>

      <footer>
        <div className="mx-auto max-w-7xl mb-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <Link to={'/'} className="mb-2">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/logo.png" alt="" />
            </Link>
            <p className="text-gray-400 md:text-sm">
              Ummat Ki Khidmat Foundation, an awarded NGO for its social contribution by Govt of Maharashtra.
            </p>
          </div>
          <div></div>
          <div></div>
          <div>
            <p className="mb-3 text-black font-medium">Legal Stuff</p>
            <ul className="text-gray-400">
              <li>
                <Link end to="/">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link end to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link end to="/">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center py-1 bg-gray-200 text-gray-500 text-sm">
          Copyright © 2024 UMMAT KI KHIDMAT | All Rights Reserved
        </p>
      </footer>
            </div>
            );
            };

export default About;
