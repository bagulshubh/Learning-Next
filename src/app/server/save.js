"use server"

import { prisma } from '@/db';

export const saveUserName = async (username1,username2) => {
    try {
      const saved = await prisma.players.create({ data: { firstname: username1 , secondname : username2 } });
      console.log(saved);
      return saved.id;
    } catch (error) {
      console.error('Error saving username:', error);
      // Handle the error (e.g., show a message to the user)
    }
  };

export const getPlayers = async (id)=>{
    try{
        const players  = await prisma.players.findUnique({where:{id:id}});
        return players
    } catch(err){
        console.log(err)
    }
}

export const updatePlayers = async(id,name1,name2)=>{
  try{

    const updated = await prisma.players.update({where:{id:id},data:{firstname:name1,secondname:name2}});
    console.log(updated)
    return updated;

  } catch(err){
    console.log(err)
  }
}

export const getAllPlayers = async ()=>{
  
  const players = await prisma.players.findMany({});
  console.log(players);
  return players
}