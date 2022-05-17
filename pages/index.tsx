import type { NextPage } from "next";
import Aboutme from "../components/aboutme/aboutme";
import Icons from "../components/icons/icons";
import Navbar from "../components/navbar/navbar";
import Projects from "../components/projects/projects";
import { useEffect } from "react";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  useEffect(() => {
    document.title = "Sahara Rai";
  }, []);

  return (
    <div>
      <Navbar />
      <Aboutme />
      <Icons />
      <div id="projectid">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
