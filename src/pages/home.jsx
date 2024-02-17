import Vision from "../components/homePageComponents/Vision";
import About from "../components/homePageComponents/about";
import Banner from "../components/homePageComponents/banner";
import Footer from "../components/homePageComponents/footer";
// import Join from "../components/homePageComponents/join";
// import Join from "../components/homePageComponents/join";
// import Join from "../components/homePageComponents/join";
import Location from "../components/homePageComponents/location";
import RegisterForm from "../components/homePageComponents/registerForm";
// import RegisterForm from "../homePageComponents/components/registerForm";
import Speakers from "../components/homePageComponents/speakers";
import Support from "../components/homePageComponents/support";
import Surprising from "../components/homePageComponents/surprising";
// import About from "../components/homePageComponents/about";
// import Banner from "../components/homePageComponents/banner";
// import Support from "../components/homePageComponents/support";
// import Ticket from "../components/ticket";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="px-3 lg:px-6 max-w-[1280px] mx-auto">
        <About />
        <Support />
        {/* <Join /> */}
        <RegisterForm />
        <Speakers />
        <Vision />
        <Location />
        <Surprising />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

// const createdAtUTC = "2024-02-17T04:43:27.580Z";
// const bdTimeZone = "Asia/Dhaka";

// const createdAtBD = new Date(createdAtUTC);
// const formattedBDTime = createdAtBD.toLocaleString("en-US", { timeZone: bdTimeZone });

// con
