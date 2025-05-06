import React from "react";
import Button from "./Button";
import { useState } from "react";

export default function Player({ initialName, info, ...props }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    if (isEditing && playerName.trim() === "") {
      alert("Cannot be empty");
      return;
    }
    setIsEditing((editing) => !editing);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  const validateInput = () => {
    const x = document.forms["myInput"].value;
    if (x === "") {
      alert("fill it out");
    }
    return false;
  };
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        className="name-field"
        type="text"
        placeholder="Enter new name"
        required
        value={playerName}
        name="myInput"
        onChange={handleChange}
      />
    );
  }

  return (
    <li>
      <span {...props}>
        {editablePlayerName}
        <span className="player-symbol">{info}</span>
      </span>

      <Button onSelect={handleEditClick} className="edit-button">
        {isEditing ? "Save" : "Edit"}
      </Button>
    </li>
  );
}
