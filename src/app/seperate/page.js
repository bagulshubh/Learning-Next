'use client'

import { prisma } from "@/db";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import { getPlayers } from "../server/save";

export default function Seperate(){

    const searchParams = useSearchParams();

    const [data,setdata] = useState(null)
    const id = searchParams.get("id");


    useEffect(()=>{
        console.log(id);

        const fetchPlayers = async(id)=>{
            console.log(id);
            const data = await getPlayers(id);
            console.log(data);
            setdata(data);
        }
        fetchPlayers(id);
    },[id])

    

    return <div>

        {
            data===null ? <div>loading</div> : <div>

                <div>FirstPlayer : <span>{data.firstname}</span></div>
                <div>SecondPlayer : <span>{data.secondname}</span></div>
                <div>Id : <span>{data.id}</span></div>

            </div>
        }

        

    </div>

}