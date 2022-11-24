import React from 'react'
import { useSelector } from 'react-redux'

export default function Homepage(){

    const moviesList = useSelector((state) => state)

    console.log(moviesList)

    return(
        <div>
            Homepage
        </div>
    )
}