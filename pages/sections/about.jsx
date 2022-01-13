import React from 'react';
import { useState, useEffect } from 'react';
import Image from '@/components/base/image';

const AboutPage = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date('1/1/2022').getTime()
  );
  const [state, setState] = useState([0, 0, 0, 0]);

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState([days, hours, minutes, seconds]);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="tablet:w-[60%] mobile-[90%] mx-auto text-center px-[50px] py-[20px] bg-[#263776]/[0.6] rounded relative">
        <h1 className="text-white tablet:text-sm mobile:text-xs">
          Countdown: 1st January 2022
        </h1>
        <p className="text-white tablet:text-xs mobile:text-xxs leading-[24px]">
          What are you waiting for? Get whitelisted for the pre-sale and avoid
          gas war! Join our discord and find out how.
        </p>
        <h1 className="text-white tablet:text-sm mobile:text-xs font-bold mt-[20px]">
          Released In:
        </h1>
        <div className="absolute w-full left-0">
          <div className="flex flex-row bg-broom mx-auto w-[80%] justify-around rounded-[20px] py-[10px] items-center px-[10px]">
            {state.map((data, index) => {
              const timeUnit = (unit) => {
                switch (unit) {
                  case 0:
                    return 'Day';
                  case 1:
                    return 'Hours';
                  case 2:
                    return 'Minutes';
                  case 3:
                    return 'Seconds';
                }
              };
              return (
                <>
                  <div>
                    <h1 className="text-sm text-nileblue h-[28px]">
                      {data || '0'}
                    </h1>
                    <p className="text-xxs text-[#4F5665]">{timeUnit(index)}</p>
                  </div>
                  {index !== state.length - 1 && (
                    <div className="h-[40px] bg-nileblue w-[3px]"></div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="laptop:w-[60%] tablet:w-[80%] mobile:w-[90%] mx-auto flex flex-col items-center py-[100px]">
        <Image
          source={`${process.env.image_cdn}/images/kucing-about.png`}
          className={'w-[350px]'}
        />
        <h1 className="text-m text-nileblue text-center">
          What Is Ball-Lickin’ Cats & It’s Mission
        </h1>
        <p className="text-center text-nileblue">
          Ball-Lickin' Cats is an NFT Collectible in the form of a cute digital
          cat with a noble mission for the cat world. Our mission is to create
          an international community and movement that cares about cats and the
          environment with a focus on supporting the Trap-Neuter-Return program
          to address the main problem in the cat world, namely overpopulation.
          But it does not rule out the possibility to help in other problems
          such as helping in captivity who are having trouble & adopt a stray
          cat. But also do not forget to give value to the NFT we made, because
          we intend to make this mission as a sustainable mission and not only
          once, so there will be a lot of future developments in the NFT that we
          made to make this mission as a sustainable mission.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
