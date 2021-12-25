import React from 'react'
import Link from 'next/link';
import PropTypes from 'prop-types';


const Button = ({link,onClick,text,href,className,fontSize}) => {
    const textSize = `text-${fontSize}`;
    if(link){
        return <Link href={href}>
            <div className={"text-nileblue cursor-pointer font-medium hover:drop-shadow-md" + " " + textSize + " " + className}>{text}</div>
            </Link>
    }else{
      return (
        <button
          onClick={() => onClick()}
          className={
            "bg-nileblue text-white font-bold py-[5px] px-[20px] rounded-[20px] drop-shadow-md hover:drop-shadow-xl" +
            " " +
            className
          }
        >
          {text}
        </button>
      );
    }
}

Button.defaultProps = {
  fontSize: 'xs'
};
export default Button;