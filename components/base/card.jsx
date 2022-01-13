import React from 'react';
import Image from 'components/base/image';

const Card = () => {
  return (
    <div className="bg-white w-[250px] min-h-[350px] rounded-[15px] p-[10px] mx-auto">
      <div className="bg-pinkLight flex flex-row justify-around mx-[10px] px-[3px] items-center">
        <div className="ratting">
          <Image
            source={`${process.env.image_cdn}/images/star.png`}
            className={'w-[20px]'}
          />
        </div>
        <p className="text-xs font-bold">COMMON</p>
      </div>
      <Image
        source={`${process.env.image_cdn}/images/kucing-sample.png`}
        className={'w-full object-cover h-[200px] mx-auto my-[10px]'}
      />
      <div className="bg-pinkLight flex flex-row justify-center mx-[10px] px-[3px] items-center">
        <p className="text-xs font-bold">COMMON</p>
      </div>
      <div className="rating py-[10px] flex">
        <div className="stats w-[70%]">
          <div className="race flex flex-row items-center">
            <Image
              source={`${process.env.image_cdn}/images/race-icon.png`}
              className={'w-[50px] mr-[10px]'}
            />
            <div className="flex flex-row h-[5px] w-[calc(100%-50px)]">
              <div className="h-[5px] w-[25%] border-[1px] bg-[#18B4AA]"></div>
              <div className="h-[5px] w-[25%] border-[1px] bg-[#18B4AA]"></div>
              <div className="h-[5px] w-[25%] border-[1px] bg-[#18B4AA]"></div>
              <div className="h-[5px] w-[25%] border-[1px] bg-[#18B4AA]"></div>
            </div>
          </div>
          <div className="custom flex flex-row items-center">
            <Image
              source={`${process.env.image_cdn}/images/custome-icon.png`}
              className={'w-[50px] mr-[10px]'}
            />
            <div className="flex flex-row h-[5px] w-[calc(100%-50px)]">
              <div className="h-[5px] w-[25%] border-[1px] bg-[#18B4AA]"></div>
              <div className="h-[5px] w-[25%] border-[1px] bg-[#18B4AA]"></div>
              <div className="h-[5px] w-[25%] border-[1px] bg-[#18B4AA]"></div>
              <div className="h-[5px] w-[25%] border-[1px] bg-[#18B4AA]"></div>
            </div>
          </div>
          <div className="back flex flex-row items-center">
            <Image
              source={`${process.env.image_cdn}/images/back-value.png`}
              className={'w-[50px] mr-[10px]'}
            />
            <div className="flex flex-row h-[5px] w-[calc(100%-50px)]">
              <div className="h-[5px] w-[50%] border-[1px] bg-[#18B4AA]"></div>
              <div className="h-[5px] w-[50%] border-[1px] bg-[#18B4AA]"></div>
            </div>
          </div>
        </div>
        <div className="rating w-[30%] p-[5px]">
          <Image
            source={`${process.env.image_cdn}/images/rating/1.png`}
            className={'w-full h-full'}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
