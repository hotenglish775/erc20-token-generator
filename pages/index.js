import React from "react";

//INTERNAL IMPORT
import {
  Header,
  Footer,
  About,
  Brand,
  Faq,
  Feature,
  HeroSection,
  Information,
  Staking,
  Swap,
  Welcome,
} from "../Components/index";
import { useStateContext } from "../Context/index";

const index = () => {
  const {
    createERC20,
    getAllERC20TokenListed,
    getUserERC20Tokens,
    connectWallet,
    fee,
    address,
    setAddress,
    nativeToken,
    transferNativeToken,
  } = useStateContext();

  return (
    <div>
      {/* <button onClick={() => createERC20()}>Create ERC20</button> */}
      <Header
        address={address}
        connectWallet={connectWallet}
        setAddress={setAddress}
      />
      <main>
        <HeroSection />
        <About />
        <Brand />
        <Swap
          nativeToken={nativeToken}
          transferNativeToken={transferNativeToken}
        />
        <Welcome />
        <Information />
        <Staking />
        <Feature />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default index;
