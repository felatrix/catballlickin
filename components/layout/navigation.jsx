import {React,useState,useEffect} from 'react'
import Image from 'components/base/image'
import Button from 'components/base/button';
import Hamburger from 'components/layout/hamburger';


const NavigationBar = () => {
    const menuData = [
        { title: "About", linkHref: "/" },
        { title: "Rarity", linkHref: "/" },
        { title: "Roadmap", linkHref: "/" },
        { title: "Team", linkHref: "/" },
        { title: "FAQ", linkHref: "/" },
      ];
    const [mobileMenu,setMobileMenu] = useState(false);

    return (
        <div className='bg-anakiwa'>
            <div className='container mx-auto flex flex-row py-[10px] justify-between items-center'>
                <div className='flex items-center'>
                    <Image source={`${process.env.image_cdn}/images/logo%201.png`}/>
                    <p className='text-white font-bold ml-[10px] mobile:block tablet:hidden'>Ball <br></br> Lickin Cats</p>
                </div>
                <div className='flex-row h-max mobile:hidden tablet:flex'>
                    {menuData.map((menu)=>{
                        const {linkHref,title} = menu
                        return (
                            <div className='mx-[20px] h-max'>
                                <Button link href={linkHref} text={title}/>
                            </div>
                        )
                    })}
                </div>
                <Button text={"Mint Now"} className={"mobile:hidden tablet:flex"}/>
                <div className={"mobile:block tablet:hidden"}>
                    <Hamburger className={`${mobileMenu && "open"}`} onClick={()=>setMobileMenu(!mobileMenu)}/>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar