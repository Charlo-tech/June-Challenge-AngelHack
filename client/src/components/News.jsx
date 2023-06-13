/* eslint-disable react/prop-types */
import { SiEthereum } from "react-icons/si";
import { FaBitcoin } from "react-icons/fa";
import { SiDogecoin } from "react-icons/si";


const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-4 m-2 cursor-pointer hover:shadow-xl">
      <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-white text-lg">{title}</h3>
        <p className="mt-1 text-white text-sm md:w-9/12">
          {subtitle}
        </p>
      </div>
    </div>
  );
  
  const News = () => (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
          
        <div className="flex-1 flex flex-col justify-start items-center">
          <ServiceCard
            color="bg-[#2952E3]"
            title="Ethereum News"
            icon={<SiEthereum fontSize={21} className="text-white" />}
            subtitle="ETH rolled back to third place in top crypto capitalization rankings but remains influential in the currency market."
          />
          <ServiceCard
            color="bg-[#8945F8]"
            title="Bitcoin News"
            icon={<FaBitcoin fontSize={21} className="text-white" />}
            subtitle="Bitcoin hovered around $25,900 Tuesday after briefly reclaiming its $26,400 weekend level prior to the CPI report."
          />
          <ServiceCard
            color="bg-[#F84550]"
            title="DogeCoin News"
            icon={<SiDogecoin fontSize={21} className="text-white" />}
            subtitle="Dogecoin investors amended the $258 billion lawsuit against Musk, accusing the Tesla CEO of market manipulation."
          />
        </div>
      </div>
    </div>
  );

  export default News;