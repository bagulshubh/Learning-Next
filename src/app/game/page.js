// Import necessary modules and functions
'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // Corrected import
import { getPlayers, updatePlayers } from '../server/save';

const GamePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [players, setPlayers] = useState([]);
  const [name1, setName1] = useState(players.firstname);
  const [name2, setName2] = useState(players.secondname);

  useEffect(() => {
    const id = searchParams.get('id');
    console.log("Id in game page: ", id);
    fetchPlayers(id);
  }, [router.query]);

  const fetchPlayers = async (id) => {
    const output = await getPlayers(id);
    setPlayers(output);
    setName1(output.firstname);
    setName2(output.secondname);
  };

  const changeHandler = (event) => {
    if (event.target.name === "name1") {
      setName1(event.target.value);
    } else {
      setName2(event.target.value);
    }
  };

  const submitHandler = async () => {
    console.log(name1 + name2);
    const id = searchParams.get('id');
    const updated = await updatePlayers(id, name1, name2);
    console.log(updated);
    setPlayers(updated)
    // setName1(updated.firstname); // No need to set the state here
    // setName2(updated.secondname); // No need to set the state here
  };

  // useEffect to handle state updates after async operation
  useEffect(() => {
    setName1(players.firstname);
    setName2(players.secondname);
  }, [players]);

  return (
    <div>
      <div>Player 1: <p>{players.firstname}</p></div>
      <div>Player 2: <p>{players.secondname}</p></div>

      <input type='text' placeholder='Change name1' name='name1' value={name1} onChange={changeHandler}></input>
      <input type='text' placeholder='Change name2' name="name2" value={name2} onChange={changeHandler}></input>

      <div onClick={submitHandler}>Change</div>
    </div>
  );
};

export default GamePage;
