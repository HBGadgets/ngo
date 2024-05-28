import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData(),
    createData(),
    createData(),
    createData(),
    createData(),
  ];

const ScholarshipForm = () => {
  // State variables for form fields
  const [applicantName, setApplicantName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [dateReceived, setDateReceived] = useState('');
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [caste, setCaste] = useState('');
  const [aadharCard, setAadharCard] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [scholarshipLastYear, setScholarshipLastYear] = useState('');
  const [courseDetails, setCourseDetails] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [collegeAddress, setCollegeAddress] = useState('');
  const [courseFees, setCourseFees] = useState('');
  const [otherExpenses, setOtherExpenses] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [totalRequirement, setTotalRequirement] = useState('');
  const [otherScholarship, setOtherScholarship] = useState('');
  const [ownContribution, setOwnContribution] = useState('');
  const [requiredScholarship, setRequiredScholarship] = useState('');
  const [examPassed, setExamPassed] = useState('');
  const [examMedium, setExamMedium] = useState('');
  const [examMonthYear, setExamMonthYear] = useState('');
  const [examPercentage, setExamPercentage] = useState('');
  const [boardUniversity, setBoardUniversity] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [guardianAddress, setGuardianAddress] = useState('');
  const [guardianQualification, setGuardianQualification] = useState('');
  const [guardianAge, setGuardianAge] = useState('');
  const [guardianMobile, setGuardianMobile] = useState('');
  const [guardianOccupation, setGuardianOccupation] = useState('');
  const [guardianIncome, setGuardianIncome] = useState('');
  const [residenceStatus, setResidenceStatus] = useState('');
  const [guardianAadharCard, setGuardianAadharCard] = useState('');
  const [guardianPanCard, setGuardianPanCard] = useState('');
  const [familyMembers, setFamilyMembers] = useState([]);
  const [recommendationPerson1, setRecommendationPerson1] = useState('');
  const [recommendationPerson2, setRecommendationPerson2] = useState('');

  // State for scholarship details table
  const [scholarshipDetails, setScholarshipDetails] = useState([{ trustName: '', amount: '' }]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log('Form submitted!');
  };

  // Function to handle adding a new row to scholarship details table
  const handleAddRow = () => {
    setScholarshipDetails([...scholarshipDetails, { trustName: '', amount: '' }]);
  };

  // Function to handle changing values in scholarship details table
  const handleTableChange = (index, field, value) => {
    const newDetails = [...scholarshipDetails];
    newDetails[index][field] = value;
    setScholarshipDetails(newDetails);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="outline" gutterBottom>
            ZAKAT SCHOLARSHIP FORM
        </Button>
        </Link>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Applicant Information */}
          <Grid item xs={12}>
            <Typography variant="h6">Applicant Information</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Applicant Name"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name of Course"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date of Received"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={dateReceived}
              onChange={(e) => setDateReceived(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Students ID No."
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </Grid>

          {/* Basic Information */}
          <Grid item xs={12}>
            <Typography variant="h6">Basic Information</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name of the Student"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Father's/Husband's Name"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mother's Name"
              value={motherName}
              onChange={(e) => setMotherName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Caste"
              value={caste}
              onChange={(e) => setCaste(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Aadhar Card No"
              value={aadharCard}
              onChange={(e) => setAadharCard(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Tel./Mobile No."
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Amount of Ummat Ki Khidmat Scholarship received in the last year"
              value={scholarshipLastYear}
              onChange={(e) => setScholarshipLastYear(e.target.value)}
            />
          </Grid>

          {/* Educational Information */}
          <Grid item xs={12}>
            <Typography variant="h6">Educational Information</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Details of the Course to be pursued: Diploma/Degree/FY/SY/TY/Final(Branch)"
              value={courseDetails}
              onChange={(e) => setCourseDetails(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name of the College"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="College Address"
              value={collegeAddress}
              onChange={(e) => setCollegeAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name of the Course"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Total Fees for the Year"
              value={courseFees}
              onChange={(e) => setCourseFees(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Duration of the Course"
              value={courseDuration}
              onChange={(e) => setCourseDuration(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Other expenses"
              value={otherExpenses}
              onChange={(e) => setOtherExpenses(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Total Requirement"
              value={totalRequirement}
              onChange={(e) => setTotalRequirement(e.target.value)}
            />
          </Grid>

          {/* Scholarship Requirement Details */}
          <Grid item xs={12}>
            <Typography variant="h6">Scholarship Requirement Details</Typography>
            <Typography>
              Give details of Scholarships to be received from other sources such as Govt. Scholarship or Private Trusts
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <Typography variant="body1">Name of the Trust / Government Scholarship</Typography>
                <Typography variant="body1">Amount to be Received</Typography>
              </Box>
              {scholarshipDetails.map((detail, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <TextField
                    label="Trust / Scholarship Name"
                    value={detail.trustName}
                    onChange={(e) => handleTableChange(index, 'trustName', e.target.value)}
                    fullWidth
                    sx={{ marginRight: 2 }}
                  />
                  <TextField
                    label="Amount"
                    value={detail.amount}
                    onChange={(e) => handleTableChange(index, 'amount', e.target.value)}
                    fullWidth
                    sx={{ marginLeft: 2 }}
                  />
                </Box>
              ))}
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddRow}
                startIcon={<AddIcon />}
              >
                Add Row
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Total Requirement"
              value={totalRequirement}
              onChange={(e) => setTotalRequirement(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Other Scholarship Amount"
              value={otherScholarship}
              onChange={(e) => setOtherScholarship(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Own Contribution"
              value={ownContribution}
              onChange={(e) => setOwnContribution(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Amount of Scholarship required"
              value={requiredScholarship}
              onChange={(e) => setRequiredScholarship(e.target.value)}
            />
          </Grid>

          {/* Past Educational Information */}
          {/* <Grid item xs={12}>
            <Typography variant="h6">Past Educational Information</Typography>
          </Grid> */}
          {/* Add past educational information fields here */}

          {/* Details about Parent/Guardian */}
          <Grid item xs={12}>
            <Typography variant="h6">Details about Parent/Guardian</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              value={guardianName}
              onChange={(e) => setGuardianName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address"
              value={guardianAddress}
              onChange={(e) => setGuardianAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Qualification"
              value={guardianQualification}
              onChange={(e) => setGuardianQualification(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Age"
              value={guardianAge}
              onChange={(e) => setGuardianAge(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mobile No."
              value={guardianMobile}
              onChange={(e) => setGuardianMobile(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Occupation & Place of Work"
              value={guardianOccupation}
              onChange={(e) => setGuardianOccupation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Monthly Income"
              value={guardianIncome}
              onChange={(e) => setGuardianIncome(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Status of residence"
              value={residenceStatus}
              onChange={(e) => setResidenceStatus(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Aadhar Card No."
              value={guardianAadharCard}
              onChange={(e) => setGuardianAadharCard(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Pan Card No."
              value={guardianPanCard}
              onChange={(e) => setGuardianPanCard(e.target.value)}
            />
          </Grid>

          {/* Details of Family Members & Income */}
          <Grid item xs={12}>
            <Typography variant="h6">Details of Family Members & Income</Typography>
          </Grid>
          {/* Add details of family members & income fields here */}
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.no</TableCell>
            <TableCell align="right">Name of Family Members</TableCell>
            <TableCell align="right">Relationship with Applicant</TableCell>
            <TableCell align="right">Service / Business Student</TableCell>
            <TableCell align="right">Monthly Income</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          {/* Recommendation */}
          <Grid item xs={12}>
  <Typography variant="h6">Recommendation</Typography>
</Grid>
{/* First Recommendation Card */}
<Grid item xs={12} sm={6}>
  <Paper sx={{ padding: 2 }}>
    <Typography variant="subtitle1">Recommendation 1</Typography>
    <TextField
      fullWidth
      label="Name of the person recommending"
      value={recommendationPerson1}
      onChange={(e) => setRecommendationPerson1(e.target.value)}
      sx={{ marginBottom: 2 }}
    />
    <TextField
      fullWidth
      label="Address"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      sx={{ marginBottom: 2 }}
    />
    <TextField
      fullWidth
      label="Mobile No."
      value={contactNo}
      onChange={(e) => setContactNo(e.target.value)}
      sx={{ marginBottom: 2 }}
    />
  </Paper>
</Grid>
{/* Second Recommendation Card */}
<Grid item xs={12} sm={6}>
  <Paper sx={{ padding: 2 }}>
    <Typography variant="subtitle1">Recommendation 2</Typography>
    <TextField
      fullWidth
      label="Name of the person recommending"
      value={recommendationPerson2}
      onChange={(e) => setRecommendationPerson2(e.target.value)}
      sx={{ marginBottom: 2 }}
    />
    <TextField
      fullWidth
      label="Address"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      sx={{ marginBottom: 2 }}
    />
    <TextField
      fullWidth
      label="Mobile No."
      value={contactNo}
      onChange={(e) => setContactNo(e.target.value)}
      sx={{ marginBottom: 2 }}
    />
  </Paper>
</Grid> 
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ScholarshipForm;
