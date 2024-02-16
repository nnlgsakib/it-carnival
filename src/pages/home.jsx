import About from '../components/about';
import Banner from '../components/banner';
import Footer from '../components/footer';
import Join from '../components/join';
import Location from '../components/location';
import RegisterForm from '../components/registerForm';
import Speakers from '../components/speakers';
import Support from '../components/support';
import Surprising from '../components/surprising';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='px-3 lg:px-6 max-w-[1280px] mx-auto'>
        <About />
        <Support />
        <Join />
        <RegisterForm />
        <Speakers />
        <Location />
        {/* <Surprising /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;