import React, { useContext } from 'react';
import ISSContext from '../context/ISSContext';
import useTimer from '../effects/useTimer';

const PeopleInSpace = () => {
  const { peopleInSpace, getPeopleInSpace } = useContext(ISSContext);

  useTimer(getPeopleInSpace, 5000);

  return (
    <section>
      <h3>{`Existem ${peopleInSpace.length} pessoas no espaço agora`}</h3>
      <ul>
        {peopleInSpace.map(({ name }) => <li>{name}</li>)}
      </ul>
    </section>
  );
};

export default PeopleInSpace;
