import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import FirstSection from './Components/Sections/FirstSection';
import ClientSection from './Components/Sections/ClientSection';
import Card1 from './Components/Sections/Card1';
import SecsondSection from './Components/Sections/SecsondSection';
import ThirdSection from './Components/Sections/ThirdSection';
import FourthSection from './Components/Sections/FourthSection';
import FifhtSection from './Components/Sections/FifhtSection';
import Card2 from './Components/Sections/Card2';
import Demo from './Components/Sections/Demo';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div >
      <Navbar />
      <FirstSection />
      <ClientSection />
      <Card1 />
      <SecsondSection />
      <ThirdSection />
      <FourthSection />
      <FifhtSection />
      <Card2 />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
