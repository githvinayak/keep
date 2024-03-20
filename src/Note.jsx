import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "./index.css";

function Note(props) {
  return (
   <>
   <div className='main'>
   <div className='notes_center'>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button className='btn-delete'>
    <DeleteForeverIcon className="deleteIcon"/>
    </button>
   </div> 
   </div>
   </>
  );
}

export default Note;
