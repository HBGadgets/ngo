import React, { useEffect, useState,useRef } from 'react';
import { Box, TextField, Button, Typography, Grid, IconButton,Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import Pdf from 'react-to-pdf';
import { PDFExport } from '@progress/kendo-react-pdf';



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
  const targetref=useRef();
  
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
  // const [requiredScholarship, setRequiredScholarship] = useState('');
  // const [examPassed, setExamPassed] = useState('');
  // const [examMedium, setExamMedium] = useState('');
  // const [examMonthYear, setExamMonthYear] = useState('');
  // const [examPercentage, setExamPercentage] = useState('');
  // const [boardUniversity, setBoardUniversity] = useState('');
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
  const [recommendationPerson1, setRecommendationPerson1] = useState('');
  const [recommendationPerson2, setRecommendationPerson2] = useState('');

  //States for familty details and income table
  const [familyMembers, setFamilyMembers] = useState([{ name: '', relationship: '', occupation: '', income: '' }]);
  const [totalFamilyIncome, setTotalFamilyIncome] = useState('');

  //State for total requiremnt for education
  const [totalReqForEducation, setTotalReqForEducation]= useState('');

  // State for scholarship details table
  const [scholarshipDetails, setScholarshipDetails] = useState([{ trustName: '', amount: '' }]);

  //State for total scholarship requiremnet
  const [amtOfScholarshipReq, setAmtOfScholarshipReq]= useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log('Form submitted!');
  };


  //States for Past Educational details table
  const [tableData, setTableData] = useState([
    { examPassed: 'S.S.C', medium:'', monthYear:'', percentage: '', boardUniversity: '' },
    { examPassed: 'H.S.C', medium:'', monthYear:'', percentage: '', boardUniversity: '' },
    { examPassed: 'F.Y', medium:'', monthYear:'', percentage: '', boardUniversity: '' },
    { examPassed: 'S.Y', medium:'', monthYear:'', percentage: '', boardUniversity: '' },
    { examPassed: 'T.Y', medium:'', monthYear:'', percentage: '', boardUniversity: '' },
    { examPassed: 'Others', medium:'', monthYear:'', percentage: '', boardUniversity: '' },
  ]);

  
    const handleInputChange = (rowIndex, colIndex, value) => {
      const newTableData = [...tableData];
      newTableData[rowIndex][colIndex] = value;
      setTableData(newTableData);
    };

    //states for self attested table
  const [selfAttested, setSelfAttested] = useState([
    { srno: 1, studentchecklist: 'Duly filled & signed application form', student: false, office: false },
    { srno: 2, studentchecklist: 'Additional two passport size recent photographs of the student with the name written behind it', student: false, office: false },
    { srno: 3, studentchecklist: 'Attested copies of SSC, HSC & University annual examination mark sheet/result copies', student: false, office: false },
    { srno: 4, studentchecklist: 'Proof of address first & last page of Ration card', student: false, office: false },
    { srno: 5, studentchecklist: 'Aadhaar card, Pan Card of Parent & Student', student: false, office: false },
    { srno: 6, studentchecklist: 'Cast Certificate (if eligible)', student: false, office: false },
    { srno: 7, studentchecklist: 'Proof of Income - Salary certificate or Govt. approved Income certificate or Pay Slip', student: false, office: false },
    { srno: 8, studentchecklist: 'Fees structure of School/College/Institute with break-up of fees (in original)', student: false, office: false },
    { srno: 9, studentchecklist: 'Proof of admission/Selection in course for which scholarship is applied', student: false, office: false },
    { srno: 10, studentchecklist: 'Copies of certificates of academic, co-curricular & extracurricular activities', student: false, office: false },
    { srno: 11, studentchecklist: 'Copy of bank pass book - First page (name, bank a/c no. & address details)', student: false, office: false },
  ]);

  //check box handling
  const handleCheckboxChange = (rowIndex, type) => {
    const updatedSelfAttested = [...selfAttested];
    updatedSelfAttested[rowIndex][type] = !updatedSelfAttested[rowIndex][type];
    setSelfAttested(updatedSelfAttested);
  };
  
  //Family details handling
  const handleFamilyMemberChange = (index, field, value) => {
    const newFamilyMembers = [...familyMembers];
    newFamilyMembers[index][field] = value;
    setFamilyMembers(newFamilyMembers);
  };

  //Initial row for family member details
  const addFamilyMemberRow = () => {
    setFamilyMembers([...familyMembers, { name: '', relationship: '', occupation: '', income: '' }]);
  };

  //calculating total family income
  useEffect( () => {
    const total = familyMembers.reduce((total, member) => total + parseFloat(member.income || 0), 0);
    setTotalFamilyIncome(total);
  });

  //calculating total final amount of scholarship required
  useEffect(()=>{
    const sum1= scholarshipDetails.reduce((total,current)=>total+parseFloat(current.amount || 0),0);
    const sum2= parseFloat(otherScholarship || 0)+parseFloat(ownContribution || 0);
    setAmtOfScholarshipReq(parseFloat(totalRequirement || 0)-(sum1+sum2));
    });

  //Calculate the total requirements for the course
  useEffect(() => {
    
    setTotalReqForEducation(parseFloat(courseFees || 0)+parseFloat(otherExpenses || 0));
    
  }, [courseFees, otherExpenses]);

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
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})} >
          Download PDF
        </Button>
      <form onSubmit={handleSubmit} ref={targetref}>
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
              label="Name of the Course"
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
              value={totalReqForEducation}
              onChange={(e) => setTotalReqForEducation(e.target.value)}
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
              value={amtOfScholarshipReq}
              onChange={(e) => setAmtOfScholarshipReq(e.target.value)}
            />
          </Grid>



          {/* Past Educational Information */}

          <Grid item xs={12}>
  <Typography variant="h6">Past Educational Information</Typography>
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="past educational details table">
      <TableHead>
        <TableRow>
          <TableCell>Exam Passed</TableCell>
          <TableCell>Medium</TableCell>
          <TableCell>Month & Year</TableCell>
          <TableCell>Percentage%</TableCell>
          <TableCell>Name of Board/University</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            <TableCell>
              {row.examPassed}
            </TableCell>
            <TableCell align="right">
              <TextField
                value={row.medium}
                onChange={(e) => handleInputChange(rowIndex, 'medium', e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                value={row.monthYear}
                onChange={(e) => handleInputChange(rowIndex, 'monthYear', e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                value={row.percentage}
                onChange={(e) => handleInputChange(rowIndex, 'percentage', e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                value={row.boardUniversity}
                onChange={(e) => handleInputChange(rowIndex, 'boardUniversity', e.target.value)}
                fullWidth
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Grid>


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
         
          {/* <Grid item xs={12} sx={{ textAlign: 'right', marginTop: 2 }}>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})} >
          Download PDF
        </Button>
      </Grid> */}
         {/* <div ref={targetRef}> */}
         
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom>Details of Family Members & Income</Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr. No.</TableCell>
                <TableCell>Name of Family Member</TableCell>
                <TableCell>Relationship with Applicant</TableCell>
                <TableCell>Service/Business/Student</TableCell>
                <TableCell>Monthly Income</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {familyMembers.map((member, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <TextField
                      value={member.name}
                      onChange={(e) => handleFamilyMemberChange(index, 'name', e.target.value)}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={member.relationship}
                      onChange={(e) => handleFamilyMemberChange(index, 'relationship', e.target.value)}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={member.occupation}
                      onChange={(e) => handleFamilyMemberChange(index, 'occupation', e.target.value)}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={member.income}
                      onChange={(e) => handleFamilyMemberChange(index, 'income', e.target.value)}
                      fullWidth
                      type="number"
                    />
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={4} align="right">Total Family Income</TableCell>
                <TableCell>{totalFamilyIncome}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 2 }}>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={addFamilyMemberRow} fullWidth>
          Add Row
        </Button>
        <Typography variant="h7" align='left' sx={{marginLeft:'100px'}}>I solemnly affirm that I am eligible for Zakat and the detils given in this form are correct and if anything is found untrue, the application will be rejected.</Typography>
        <br/>
      <br/>
      <br/>
      <div style={{ width: '100%', display: 'flex',
          justifyContent: 'space-between'}}>
        <div><b>______________________________</b><br/><b>Signature of the Student</b></div>
        <div><b>_______________________________________</b><br/><b>Signature of the Parent/Guardian</b></div>
      </div>
      </Grid>
      
      

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

{/* Bonafied Certificate From the head of the institution */}
<Grid item>
      <Typography variant="h6" gutterBottom>
        Bonafied Certificate From The Head Of The Institution
      </Typography>
      <Typography variant="h7" gutterBottom>
        I certify that Mr./Miss/Master
        <TextField
          size="small"
          sx={{ width: '150px', display: 'inline-block', marginLeft: '10px', marginRight: '10px', verticalAlign: 'middle' }}
          value={applicantName}
        /> 
        is seeking admission/admitted in this institution for the year 20__ to 20__ in 
        <TextField
          size="small"
          sx={{ width: '150px', display: 'inline-block', marginLeft: '10px', marginRight: '10px', verticalAlign: 'middle' }}
          value={courseName}
        /> 
        Course. The Total Annual Fees is Rs.
        <TextField
          size="small"
          sx={{ width: '150px', display: 'inline-block', marginLeft: '10px', marginRight: '10px', verticalAlign: 'middle' }}
          value={courseFees}
        /> 
        . He/She is eligible for the Govt. Scholarship of Rs.
        <TextField
          size="small"
          sx={{ width: '150px', display: 'inline-block', marginLeft: '10px', marginRight: '10px', verticalAlign: 'middle' }}
          value={amtOfScholarshipReq}
        />
      </Typography>
      <br/>
      <br/>
      <br/>
      <div style={{ width: '100%', display: 'flex',
          justifyContent: 'space-between'}}>
        <div><b>Seal of the Institue</b></div>
        <div><b>Signature of the Head of the Institution</b></div>
      </div>
      
    </Grid>

{/* Self attected documents verification */}
<Grid item xs={12}>
  <Typography variant="h6">Self Attested Document Information (Tick Marks the attachments)</Typography>
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="past educational details table">
      <TableHead>
        <TableRow>
          <TableCell>Sr.No.</TableCell>
          <TableCell>Student Check List</TableCell>
          <TableCell>Student</TableCell>
          <TableCell>Office</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {selfAttested.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            <TableCell>
              {row.srno}
            </TableCell>
            <TableCell>
              {row.studentchecklist}
            </TableCell>
            <TableCell>
            <Checkbox
                    checked={row.student}
                    onChange={() => handleCheckboxChange(rowIndex, 'student')}
            />
            </TableCell>
            <TableCell>
            <Checkbox
                    checked={row.office}
                    onChange={() => handleCheckboxChange(rowIndex, 'office')}
            />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
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
