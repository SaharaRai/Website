import type { NextPage } from "next";
import Aboutme from "../components/aboutme/aboutme";
import Icons from "../components/icons/icons";
import Navbar from "../components/navbar/navbar";
import Projects from "../components/projects/projects";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Aboutme />
      <Icons />
      <Projects />
    </div>
  );
};

export default Home;
