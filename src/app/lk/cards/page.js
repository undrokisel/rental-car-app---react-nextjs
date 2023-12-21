'use client'

import { AddCardModal } from '@/app/components/AddCardModal'
import { BankCardControl } from '@/app/components/BankCardControl'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


import { motion } from "framer-motion"
import { fadeIn } from "../../../../variants"

const cardsData = [
    {

        name: 'Andrey K.',
        type: "Mastercard",
        number: "1111 2222 3333 4444",
        validFrom: "11/20",
        cvv: '123',
        expires: "12/25"
    },
    {

        name: 'Andrey K.',
        type: "Visa",
        number: "9898 8888 2727 3489",
        validFrom: "10/21",
        cvv: '321',
        expires: "10/24"
    },
    {

        name: 'Andrey K.',
        type: "Mir",
        number: "3333 4444 1111 2222",
        validFrom: "01/22",
        cvv: '453',
        expires: "01/26"
    },
]


export default function Cards() {

    const [cards, setCards] = useState(cardsData);


    const removeCard = (cardNumber) => {
        setCards(cards.filter(card => card.number !== cardNumber))
    }

    return (<>
        {/* <motion.header */}
        <motion.header
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className="flex items-center justify-end p-6 pt-[100px]
            "
        >

            <div className="pr-10">

                <Link
                    href="/lk"
                    className="btn 
                           btn-cta
                           min-w-[100px] 
                           flex-0 max-w-[10rem]"
                >
                    Назад
                </Link>
            </div>


        </ motion.header>

        <main 
            className="flex flex-col justify-center 
                        items-center p-6 pb-12 
                        md:mt-10
                        ">
            <motion.h3
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.4 }}
                className="  text-center uppercase
                            xxsm:text-[1.5rem]
                            xxsm:mt-1
                            
                            xsm:h2
                            xsm:mt-2
                ">
                Сохраненные карты
            </motion.h3>

            <AddCardModal />

            {/* cards */}
            <div className="flex flex-col items-center justify-center gap-6 mt-10">
                {
                    cards.map((card, index) => {
                        return <BankCardControl card={card} key={index} removeCard={removeCard} />
                    })
                }
            </div>

        </main>
    </>
    )
}
