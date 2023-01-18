import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles';
import { useGlobalContext } from '../context';

import { PageHOC, CustomButton, CustomInput, GameLoad } from '../components';

const CreateBattle = () => {
  const { contract, battleName, setBattleName, gameData } = useGlobalContext();
  const navigate = useNavigate();

  const [waitBattle, setWaitBattle] = useState(false);

  useEffect(() => {
    if (gameData?.activeBattle?.battleStatus === 0) {
      setWaitBattle(true);
    }
  }, [gameData]);

  const handleClick = async () => {
    // if no battle name filled in, exit
    if (!battleName || !battleName.trim()) return null;

    // otherwise, create battle with contract and wait for player to join
    try {
      await contract.createBattle(battleName);

      setWaitBattle(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {waitBattle && <GameLoad />}

      <div className="flex flex-col mb-5">
        <CustomInput
          label="Battle"
          placeholder="Enter battle name"
          value={battleName}
          handleValueChange={setBattleName}
        />
        <CustomButton
          title="Create Battle"
          handleClick={handleClick}
          restStyles="mt-6"
        />
      </div>

      <p className={styles.infoText} onClick={() => navigate('/join-battle')}>
        Or join an already existing battle
      </p>
    </>
  );
};

export default PageHOC(
  CreateBattle,
  <>
    Create <br /> a new Battle
  </>,
  <>Create your own battle and wait for other players to join you</>
);
