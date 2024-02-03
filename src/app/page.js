'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveUserName } from './server/save';
import View from './Components/View';

export default function Home() {
  const [username1, setUsername1] = useState('');
  const [username2,setUsername2] = useState('');
  const router = useRouter();


  const handleFormSubmit = async(event) => {
    event.preventDefault();
    console.log(username1);
    console.log(username2);
    const id = await saveUserName(username1,username2);
    console.log("This is id in homeage"+id);
    router.push(`/game?id=${id}`);
  };

  const handleUsername1Change = (event) => {
    setUsername1(event.target.value);
  };
  const handleUsername2Change = (event) => {
    setUsername2(event.target.value);
  };

  return (
    <>
      <div className="heading">Welcome to OX Game</div>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username1"
          placeholder="Enter Your Name"
          value={username1}
          onChange={handleUsername1Change}
        />
        <input
          type="text"
          name="username2"
          placeholder="Enter Your Name"
          value={username2}
          onChange={handleUsername2Change}
        />
        <button type="submit">Start</button>
      </form>

      <View></View>

    </>
  );
}
