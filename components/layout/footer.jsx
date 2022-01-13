import React from 'react';
import Image from 'components/base/image';

const Footer = () => {
  return (
    <div
      className={`bg-[url('https://cdn.ball-lickincats.com/images/bgFooter.png')] h-[350px] bg-[length:auto_100%] bg-center bg-no-repeat-x justify-end	flex flex-col mt-[-300px] z-10 absolute w-[100vw]`}
    >
      <div className="container mx-auto flex tablet:flex-row mobile:flex-col py-[10px] justify-between items-center">
        <div className="flex items-center mobile:z-10">
          <Image source={`${process.env.image_cdn}/images/logo%201.png`} />
          <p className="text-white font-bold ml-[10px]">
            Ball <br></br> Lickin Cats
          </p>
        </div>
        <div className="flex flex row items-center mobile:z-10">
          <Image
            source={`${process.env.image_cdn}/images/ig.png`}
            className={'mx-[10px] h-[35px]'}
          />
          <Image
            source={`${process.env.image_cdn}/images/fb.png`}
            className={'mx-[10px] h-[35px]'}
          />
          <Image
            source={`${process.env.image_cdn}/images/twt.png`}
            className={'mx-[10px] h-[35px]'}
          />
          <Image
            source={`${process.env.image_cdn}/images/dc.png`}
            className={'mx-[10px] h-[35px]'}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
