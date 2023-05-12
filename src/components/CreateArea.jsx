import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [checked, setChecked] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleOnChange(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function handleOnClick(event) {
    props.onAdd(note);
    setNote(() => {
      return {
        title: "",
        content: ""
      };
    });
    setChecked(false)
    event.preventDefault();
  }

  function handleZoom(){
    setChecked(true)
  }

  return (
    <div>
      <form className="create-note">
        {checked && 
          <input
          onChange={handleOnChange}
          name="title"
          placeholder="Title"
          value={note.title}
          />
        }

        <textarea
          onClick={handleZoom}
          onChange={handleOnChange}
          name="content"
          placeholder="Take a note..."
          rows={checked ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={checked} style={{ transitionDelay: checked ? '10ms' : '0ms' }}>
          <Fab onClick={handleOnClick}><AddIcon size="large"/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
