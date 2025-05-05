import React from "react";
import Button from "./Button";
import { useState } from "react";

export default function Player({ name, info, ...props }) {
    const [isEditing, setIsEditing] = useState(false);
const handleEditClick = () => {
  
    setIsEditing(true);
}

  return (
    <li>
      <span {...props}>
        {isEditing? <input className="name-field" type="text" placeholder="Enter new name" /> 
        :
        <>
        <span className="player-name">{name}</span>
      </>}
        <span className="player-symbol">{info}</span>
      </span>
      
      <Button onSelect = {handleEditClick} className="edit-button">
        Edit
      </Button>
    </li>
  );
}
