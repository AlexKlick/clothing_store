import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import Band from '../../components/button/Chart';

const Home = () => {
  return (
    <div>
      {/* <Directory />
      <Outlet /> */}
      <Band/>
    </div>
  );
};

export default Home;
