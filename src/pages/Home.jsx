import React from 'react';
import Banner from '../components/Banner';
import Download from '../components/Download';
import FewQuestion from '../components/FewQuestion';
import Footer from '../components/Footer';
import KidsConpo from '../components/KidsCompo';
import Main from '../components/Main'
import Navbar from '../components/Navbar';
import Pera from '../components/Pera';

const Home = () => {
  return (
    <div>
      <Navbar />
     <Main />
     <Banner />
     <Download />
     <Pera />
     <KidsConpo />
     <FewQuestion />
     <Footer />
    </div>
  )
}

export default Home