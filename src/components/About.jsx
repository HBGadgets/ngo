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
            </div>
            );
            };

export default About;
