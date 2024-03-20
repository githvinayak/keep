import React , {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import "./index.css";


function CreateNote(props) {
  const [title, setTitle] = useState({
    title: "",
    content:""
  });

const InputEvent =(event)=>{
  const {name, value} = event.target;
  setTitle((preVAL)=>{
    return {
    ...preVAL,
      [name]: value
    }
  });
  console.log(title);
}

const addItem=()=>{
  props.passNote(title);
  setTitle({
      title: "",
      content:""
    });
}
  return (
   <>
   <div className='create_note'>
   <form className='form'>
   <input type='text' placeholder='title' name="title" value={title.title} onChange={InputEvent} />
   <textarea row="3" column="4" placeholder='Write a note...' name="content" value={title.content} onChange={InputEvent} />
   <Button  onClick={addItem}>
   <AddIcon  className="btn-add" />
   </Button>
   </form>
   </div>    
   </>
  );
}

export default CreateNote;
