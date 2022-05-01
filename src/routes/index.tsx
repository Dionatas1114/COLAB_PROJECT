import { Routes, Route } from 'react-router-dom';

import { Main } from '@/pages/Main';

const AppRoutes = () => {
  return (
    // {/*change Routes to routes file that will control private/public access*/}
    <Routes>
      <Route path='/*' element={<Main />} />
      {/* <Route path="/signup" element={<SignUp />} />
      <Route path="dash" element={<Layout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="page1" element={<Page1 />} />
      </Route> */}
    </Routes>
  );
};

export default AppRoutes;
