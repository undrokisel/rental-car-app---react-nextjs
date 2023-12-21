import React, { useState } from 'react'

export const AddCardModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [numberCard, setNumberCard] = useState('');
    const [cvv, setCvv] = useState('');
    const [expires, setExpires] = useState('');

    const handleSave = () => {
        const isCardDataValid = (name, numberCard, cvv, expires) => {

            // check name valid
            if (!/^[a-zA-Z]+$/.test(name) || (name.length > 15)) return "name"
            // check cvv valid
            if ((cvv.length !== 3) || (!/^[0-9]+$/.test(cvv))) return "length"
            // check number card
            if ((numberCard.length !== 16) || (!/^[0-9]+$/.test(numberCard))) {
                return "numberCard"
            }
            // check expires
            if ((expires.length !== 4) || (!/^[0-9]+$/.test(expires))) {
                return "numberCard"
            }

        }
        isCardDataValid(name, numberCard, cvv, expires)
    }

    return (
        <>

            <button
                className="bg-red-600 text-white 
                        active:bg-pink-600 font-bold uppercase 
                        text-sm shadow 
                        hover:shadow-lg outline-none 
                        focus:outline-none mr-1 
                        mb-1 ease-linear transition-all duration-150
                        btn btn-lg max-w-sm my-10  hover:bg-green-700
                        xxsm:btn-sm xxsm:max-w-xs
                        xsm:btn-lg
                        "
                type="button"
                onClick={() => setShowModal(true)}
            >
                Добавить карту
            </button>



            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden 
                        overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">

                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative 
                            flex flex-col w-full bg-white outline-none focus:outline-none">


                                {/*header*/}
                                <div className="flex items-start justify-between p-5 
                                border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Введите данные о карте
                                    </h3>

                                    {/* close btn    */}
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 
                                        float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span
                                            className="bg-transparent text-black opacity-5 h-6 
                                        w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>

                                </div>


                                <div className="w-full max-w-lg mx-auto p-8">
                                    <div className="bg-white">
                                        <form>
                                            <div className="grid grid-cols-2 gap-6">

                                                <div className="col-span-2 sm:col-span-1">

                                                    <label htmlFor="card-number"
                                                        className="block text-sm font-medium text-gray-700 mb-2"
                                                    >
                                                        Номер карты:
                                                    </label>

                                                    <input
                                                        type="text" name="card-number" id="card-number"
                                                        value={numberCard}
                                                        onChange={(e) => setNumberCard(e.target.value)}
                                                        placeholder="0000 0000 0000 0000"
                                                        className="w-full py-3 px-4 border 
                                                                border-gray-400 rounded-lg focus:outline-none 
                                                                focus:border-orange-500"
                                                    />
                                                </div>

                                                <div className="col-span-2 sm:col-span-1">
                                                    <label
                                                        htmlFor="expiration-date"
                                                        className="block text-sm font-medium 
                                                                 text-gray-700 mb-2"
                                                    >
                                                        Выдана до:
                                                    </label>
                                                    <input type="text" name="expiration-date" id="expiration-date"
                                                        value={expires}
                                                        onChange={(e) => { setExpires(e.target.value) }}
                                                        placeholder="MM / YY"
                                                        className="w-full py-3 px-4 border border-gray-400
                                                    rounded-lg focus:outline-none focus:border-orange-500"
                                                    />
                                                </div>

                                                <div className="col-span-2 sm:col-span-1">
                                                    <label htmlFor="cvv"
                                                        className="block text-sm font-medium text-gray-700 mb-2"
                                                    >
                                                        CVV
                                                    </label>
                                                    <input type="text" name="cvv" id="cvv" placeholder="000"
                                                        value={cvv}
                                                        onChange={(e) => setCvv(e.target.value)}
                                                        className="w-full py-3 px-4 border border-gray-400 
                                                                rounded-lg focus:outline-none focus:border-orange-500" />
                                                </div>
                                                <div className="col-span-2 sm:col-span-1">
                                                    <label htmlFor="card-holder"
                                                        className="block text-sm font-medium text-gray-700 mb-2"
                                                    >
                                                        Имя (как на карте):
                                                    </label>
                                                    <input type="text" name="card-holder" id="card-holder"
                                                        placeholder="Имя"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        className="w-full py-3 px-4 border 
                                                                border-gray-400 rounded-lg focus:outline-none 
                                                                focus:border-orange-500"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>


                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase 
                                        px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 
                                        ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Закрыть
                                    </button>
                                    <button
                                        className="bg-red-500 text-white 
                                                    active:bg-green-600 font-bold uppercase 
                                                    text-sm px-6 py-3 rounded shadow 
                                                    hover:shadow-lg outline-none focus:outline-none 
                                                    mr-1 mb-1 ease-linear transition-all 
                                                    duration`-150"
                                        type="button"
                                        // onClick={() => setShowModal(false)}
                                        onClick={() => handleSave()}
                                    >
                                        Сохранить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}





        </>

    )
}
