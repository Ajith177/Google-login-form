import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const Home = () => {
    const {username}=useContext(AppContext);
  return (
    <div>
        {username}
    </div>
  )
}

export default Home
