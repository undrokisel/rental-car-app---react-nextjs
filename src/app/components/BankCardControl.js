
import React from 'react'
import BankCard from './BankCard'

export const BankCardControl = ({ card, removeCard }) => {

    const isExpired = checkCardExpires(card)


    return (
        <div
            className="flex flex gap-4
                        flex-col
                        sm:flex-row
                        xxsm:border-b-2 xxsm:border-gray-400
                        xxsm:pb-4
                        sm:border-none
                        "
        >
            <BankCard card={card} />
            <div className="flex-[30%] flex 
                            sm:flex-col
                            justify-end items-end gap-2"
            >

                <button
                    className={`${isExpired ? 'text-green-700' : 'text-red-700'} 
                    btn btn-sm bg-white font-bold
                    uppercase`}
                >
                    {isExpired ? "Активна" : "Срок действия истек"}
                </button>

                <button
                    onClick={() => removeCard(card.number)}
                    className='btn 
                    sm:text-xs
                    md:text-sm
                    btn-sm btn-accent uppercase '>Удалить</button>
            </div>
        </div>
    )
}

function checkCardExpires(card) {
    const { expires } = card;
    const [month, year] = expires.split('/');
    const expiresCard = (new Date(`20${year}`, month)).getTime()
    const dateNow = Date.now()
    return expiresCard > dateNow
}
