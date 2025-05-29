// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import SignInPage from '../Signupages/SignUpPage';
// import LandingPage from '../Landingpage/Landingpage';
// import EmailLoginForm from '../Loginpages/Loginpage';
// import DashboardPage from '../Dashboard/Dashboard';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/signin" element={<SignInPage />} />
//       <Route path="/login" element={<EmailLoginForm />} />
//       <Route path="/dashboard" element={<DashboardPage />} />
//     </Routes>
//   );
// };

// export default AppRoutes;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignInPage from '../Signupages/SignUpPage';
import LandingPage from '../Landingpage/Landingpage';
import EmailLoginForm from '../Loginpages/Loginpage';
import DashboardPage from '../Dashboard/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/login" element={<EmailLoginForm />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default AppRoutes;




  