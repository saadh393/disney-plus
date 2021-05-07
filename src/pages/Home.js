/*  
💥 Title : home
📃 Description : This is Home page commonent to store all the components to disply on the home page
✍ Author : Saad Hasan
⌚ Date : 23/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import AvailableDevices from "../components/AvailableDevices";
import BlockbusterList from "../components/BlockbusterList";
import BringsEntertainment from "../components/BringsEntertainment";
import MainHead from "../components/MainHead";
import NowStreaming from "../components/NowStreaming";
import WatchTheWay from "../components/WatchTheWay";
import Footer from "../components/Footer";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <MainHead />
      <NowStreaming />
      <WatchTheWay />
      <BlockbusterList />
      <BringsEntertainment />
      <AvailableDevices />
      <Footer />
    </>
  );
};

export default Home;
