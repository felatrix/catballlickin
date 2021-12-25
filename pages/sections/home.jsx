import React from 'react'
import Button from '@/components/base/button'

const HomePage = () => {
    return (
        <div className='container mx-auto pt-[100px]'>
            <div className='mobile:w-[100%] tablet:w-[50%]'>
                <h1 className='text-xl mobile:text-m font-bold text-nileblue'>WELCOME To <br/>
                    Ball-Lickin’ Cats
                </h1>
                <p>
                    Ball-Lickin' Cats is a collection of cats roaming in the city of Ethereum Blockchain. Programmatically generated using beautiful hand-drawn traits. Each cats can have variety race, fur color, expression, outfit, hat, accessories & back accessories. In 1st gen there will be 10.000 male cats & 10.000 female cats.
                </p>
                <div className='flex flex-row mt-[20px]'>
                    <Button  text={"Join Discord"} className={"mr-[20px]"}/>
                    <Button  text={"Twitter"} />
                </div>
            </div>
        </div>
    )
}

export default HomePage