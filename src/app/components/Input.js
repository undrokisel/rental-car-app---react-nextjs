import Image from 'next/image'
import React from 'react'

export const Input = ({
    imgSrc,
    placeholder,
    labelText,
    type,
    pattern,
    maxLength,
    required,
    id,
    nameInput,
}) => {
    return (


        <div>
            <label for="email" className="block text-sm font-medium text-gray-700">
                {labelText}
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">

                {/* icon */}
                {imgSrc &&
                    <div className="absolute inset-y-0 left-0 flex items-center pl-1">
                        <Image width={25} height={25} className=""
                            src={imgSrc}
                        />
                    </div>
                }

                <input
                    className="w-full rounded-md border border-gray-200 pl-10 text-sm h-10 focus:outline-gray-300"
                    
                    pattern={pattern}
                    type={type}
                    id={id}
                    name={nameInput}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    required={required}
                />
            </div>
        </div>

    )
}
