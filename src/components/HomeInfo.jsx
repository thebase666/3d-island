import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold ml-2 text-white'>Leo</span>, A react
        developer.
        <br />
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>My skills:</p>
        Javascript, Typescript, React, Next.js, React Native, TailwindCss,
        Framer motion(animation), Redux, Responsive web design, Functional
        programming, Threejs(3d components), web3, blockchain, ChatGPT, Figma,
        Firebase, Mongodb, Linux, Shell, Cache, Ethers.js, alchemy-api, GraphQL,
        Node, Google-api, Git, Headless-CMS, hardhat, openzeppelin. Have
        knowledge of information security.
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>Here is my Github</p>

        <Link
          to='https://github.com/thebase666'
          className='neo-brutalism-white neo-btn'
        >
          Github
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>Here is my Github</p>

        <Link
          to='https://github.com/thebase666'
          className='neo-brutalism-white neo-btn'
        >
          Github
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
