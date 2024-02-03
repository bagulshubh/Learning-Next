'use client'

import { prisma } from "@/db"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllPlayers } from "../server/save";
import { useRouter } from "next/navigation";


export default function View (){

    const router = useRouter()

   
    const [data,setdata] = useState(null);

    useEffect(()=>{
        fetchPlayers();
    },[])

    const fetchPlayers = async()=>{
        const data = await getAllPlayers();
        setdata(data);
    }

    const clickHandler = (id)=>{
        console.log(id)
        router.push(`/seperate?id=${id}`)
    }

return <div>

    {
        data === null ? <div>loading</div> : <div>{
        
            data.map(card=>(
                <div onClick={()=>{clickHandler(card.id)}}>
                    <div>{card.id}</div>
                    <div>{card.firstname} {card.secondname} </div>
                </div>
            ))
        
        }</div>
    }

    </div>

}