import React from 'react'
import {links} from './data'

const SideBar =()=>{
    return(
        <>
            <ul className='links'>
                {links.map((link)=>{
                    return(
                        <li key={link.id}>
                            <a href={link.id}>{link.text}</a>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}


export default SideBar