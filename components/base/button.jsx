import React from 'react'
import Link from 'next/link';

const Button = ({link,onClick,text,href,className}) => {
    if(link){
        return <Link href={href}>
            <div className={"text-nileblue cursor-pointer font-medium text-xs hover:drop-shadow-md" + className}>{text}</div>
            </Link>
    }else{
        return <button onClick={()=>onClick()} 
                className={"bg-nileblue text-white font-bold py-[5px] px-[20px] rounded-[20px] drop-shadow-md hover:drop-shadow-xl" + " " +className}>
                    {text}
            </button>
    }
}

export default Button;