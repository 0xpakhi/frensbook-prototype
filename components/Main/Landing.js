import {
  faTwitter,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import landingstyles from "../../styles/Landing.module.css";
import buttonstyles from "../../styles/Button.module.css";
import { WalletConnect } from "../wallet/connectWallet";

const Landing = () => {
  return (
    <>
      <div className={styles.bgimgdiv}>
        <Image
          className={styles.bgimg}
          src="/background.png"
          alt="bg"
          width="400"
          height="400"
        />
      </div>
      <div className={styles.header}>
        <h1>frensbook</h1>
        <div className={styles.line}></div>
        <div className={styles.subheader}>
          <h1>Networking made simpler using one click.</h1>
          <p>
            A one page to showcase all your social links and your NFT swags{" "}
          </p>
          {/* <button className={buttonstyles.filledbutton}>Connect Wallet</button> */}
          <WalletConnect />
          <div className={landingstyles.imgcontainer}>
            <Image
              src="/mobile.png"
              alt="mobile"
              width="350px"
              height="450px"
            />
            <p>built with 💙 from the house of CoS parivaar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
