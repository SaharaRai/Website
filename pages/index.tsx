import type { NextPage } from "next";
import Aboutme from "../components/aboutme/aboutme";
import Navbar from "../components/navbar/navbar";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Aboutme />
    </div>
  );
};

export default Home;
