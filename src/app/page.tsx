import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Graphs from "../components/graphs";
import Badges from "../components/badges";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="main-content">
        <Graphs></Graphs>
        <Badges></Badges>
      </div>
      <Footer></Footer>
    </>
  );
}
