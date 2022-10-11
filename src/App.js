import IntroVideo from "./Components/IntroVideo";
import Section from "./Components/Section";
import Misc from "./Components/Misc";
import Footer from "./Components/Footer";
import data from "./Data/data.json";
import FreshImg from "./Assests/academy.png";
import FreshImg2 from "./Assests/story.png";
import TedTalks from "./Assests/in-the-news.gif";
import FranchiseImg from "./Assests/franchise.gif";
import MapImg from "./Assests/locations.png";
import BaratImg from "./Assests/image1.png";
import ChaiwalaImg from "./Assests/image3.png";
import CourseImg from "./Assests/image2.png";
import AlbumImg from "./Assests/mba-cares.gif";

import "./Styles/App.scss";
import "./Styles/Intro.scss";
import "./Styles/Section.scss";
import "./Styles/Footer.scss";
import "./Styles/Misc.scss";
import "./Styles/MediaQuery.scss";



const {
  freshTopic,
  freshTopic2,
  tedTalks,
  franchise,
  map,
  barat,
  chaiwala,
  courses,
  album,
} = data;
const yellow = "#fff100",
  pink = "#ed1e79",
  red = "#d20120",
  white = "#fff",
  brown = "#6d3d0f";

function App() {
  return (
    <>
      <IntroVideo />
      {/* Fresh Topic -1  */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        imgSrc={FreshImg}
        btnText={freshTopic.btn}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/* Fresh Topic -2 */}

      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        imgSrc={FreshImg2}
        btnText={freshTopic2.btn}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/* Ted Talks */}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        imgSrc={TedTalks}
        btnText={tedTalks.btn}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      {/* Franchise */}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        imgSrc={FranchiseImg}
        btnText={franchise.btn}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      {/* Map */}
      <Section
        h3={map.heading}
        text={map.text}
        imgSrc={MapImg}
        btnText={map.btn}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        hasbtn={false}
        btnBgColor={pink}
        btnColor={yellow}
      />
      {/* Courses*/}
      <Section
        h3={courses.heading}
        text={courses.text}
        imgSrc={CourseImg}
        imgSize={"30%"}
        btnText={courses.btn}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      {/* Album*/}
      <Section
        h3={album.heading}
        text={album.text}
        imgSrc={AlbumImg}
        btnText={album.btn}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      {/* Barat*/}
      <Section
        h3={barat.heading}
        text={barat.text}
        imgSrc={BaratImg}
        btnText={barat.btn}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/* Chaiwala*/}
      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        imgSrc={ChaiwalaImg}
        btnText={chaiwala.btn}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      <Footer />
      <Misc/>
    </>
  );
}

export default App;
