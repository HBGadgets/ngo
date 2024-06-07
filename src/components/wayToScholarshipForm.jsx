import React from 'react';
import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { Box, TextField, Button, Typography, Grid, IconButton,Checkbox } from '@mui/material';


export const wayToScholarshipForm = () => {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
        <Button>Click here</Button>
        <NavLink
              end
              to={"/ScholarshipForm"}
              className="text-lg font-bold leading-6 text-gray-900"
              style={({ isActive }) => ({
                color: isActive
                  ? 'greenyellow'
                  : 'black',
              })}
            >
              ZAKAT SCHOLARSHIP DETAILS
        </NavLink>
    </div>
  )
}
