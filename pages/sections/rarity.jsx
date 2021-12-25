import React from "react";

const Rarity = () => {
  return (
    <div className="container mx-auto text-center text-nileblue">
      <h1 className="text-m font-bold mb-[20px]">How rare is My Ball-Lickin’ Cats?</h1>
      <p className="text-xs">
        The rarity tier of the Ball-Lickin’ Cats is determined based on the
        total of rarity points. Combination between race and fur color can be
        worth between 1 - 4 points based on how rare they are. And for costume,
        there are 5 possible types, which is no costume, only top / outfit, top
        & outfit, costume set & themed costume set. There is also a back
        attribute that can contain wing, regular back item or nothing.
      </p>
      <br />
      <p className="text-xs">
        These total rarity points are then added up and result in a total value
        between 1-10 points. And then the value point determines the cats rarity
        tier, the indication of rarity tier is on the background color & theme.
        So it can be easily recognized by looking at the background !
      </p>
      <br />
      <p className="text-xs">
        Remember, the rarity of your Ball-Lickin’ Cats can contribute on future
        development. So, get the coolest Ball-Lickin’ Cats as you can get !
      </p>
    </div>
  );
};

export default Rarity;
