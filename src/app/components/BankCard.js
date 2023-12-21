"use client"

import React from 'react'

export default function BankCard({ card }) {

    const { name, number, validFrom, cvv, expires, type } = card;


    const imgSrc = type === "Visa"
        ? "visa2"
        : type === "Mir"
            ? "mir"
            : type === "Mastercard"
                ? "Mastercard"
                : null
    const gradient = type === "Visa"
        ? "from-orange-400 to-red-700"
        : type === "Mir"
            ? "from-green-400 to-green-700"
            : type === "Mastercard"
                ? "from-blue-400 to-blue-700"
                : null


    return (

        <div className={
            `bg-gradient-to-r 
            ${gradient}  
            
            relative m-auto  rounded-xl 
            shadow-2xl transition-transform  sm:hover:scale-105
            
            h-48 w-80
            xxsm:h-44 xxsm:w-62
            sm:h-56 sm:w-96
            `
        }
        >
            <div className="absolute top-4 w-full px-8 sm:top-8  
                            xxsm:text-xs
                            sm:text-sm 
                            ">
                {/* строка с именем */}
                <div className="flex justify-between">
                    <div className="">
                        <p className="font-light text-black">Name</p>
                        <p className="font-medium tracking-widest text-black">{name}</p>
                    </div>
                    <img className="h-14 w-14 object-contain" src={`/icons/bank/${imgSrc}.svg`} />
                </div>

                {/* строка с номером карты */}
                <div className="pt-1">
                    <p className="font-light text-black">Card Number</p>
                    <p className="tracking-more-wider font-medium text-black">{number}</p>
                </div>

                {/* нижние строки */}
                <div className="pt-4 pr-6 sm:pt-6">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="text-xs font-light text-black">Valid From</p>
                            <p className="sm:text-base font-medium text-black tracking-widest">{validFrom}</p>
                        </div>
                        <div className="">
                            <p className="text-xs font-light text-black">Expires</p>
                            <p className="sm:text-base font-medium tracking-widest text-black">{expires}</p>
                        </div>

                        <div className="">
                            <p className="text-xs font-light text-black">CVV</p>
                            <p className="tracking-more-wider text-black sm:text-sm">{cvv}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}





