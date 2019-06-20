import React from 'react';
import Popup from 'reactjs-popup';
import insIMG from './IMG/How-to-IMG.png';

const Instruction = ({ onClearButton }) => {
  return(
    <div className="w-15 flex items-start pl4 flex-column">
      <Popup trigger={<button className="b ph3 pv2 ba b--black bg-transparent grow pointer f3 dib mb3"> Instructions </button>} modal closeOnDocumentClick>
        <img src={insIMG} alt="missing img"></img>
      </Popup>
      <button onClick={onClearButton} className="b ph3 pv2 ba b--black bg-transparent grow pointer f3 dib"> Clear Image </button>
    </div>
  )
}

export default Instruction;
