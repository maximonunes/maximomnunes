'use client'

import '@/data/paises.json'

interface PaisPropt{
    name:string,
    language:string,
    nativeName: string,
    area: number,
    pop : number
}

const fetch = async function 

export default function Pais({name , language , nativeName , area , pop} : PaisPropt){

    const url = 'https://restcountries.com/v3.1/independent?status=true&fields=name,area,population'


    return(

        <div className='w-44 h-44 bg-pink-700 text-white rounded-xl p-4 m-3 flex flex-col items-center justify-center'>
            <h2 className='text-center'>{name}</h2>
            <p>Língua oficial: {language}</p>
            <p>Native name : {nativeName}</p>
            <p>Área : {area}</p>
            <p>População : {pop}</p>
        </div>
    )


}