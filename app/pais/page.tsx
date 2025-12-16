'use client'
import useSWR from 'swr'
import { Produto } from '@/models/interface'
import { Spinner } from "@/components/interface/spinner"
import { useState, useEffect } from 'react'
import '@/data/paises.json'

export default function PaisPage(){

    return(
        <div>
            <Pais />
        </div>
    )

}