import React , {useState} from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';

function App() {
  const [addItem , setaddItem] = useState([]);

  const addNote=(title)=>{
  setaddItem((preVal)=>{
    return [ ...preVal,title ]
  });
  console.log(title);
  }

  return (
   <>
   <Header />
   <CreateNote passNote={addNote} />

   {addItem.map((item,index)=>{
     return (<Note 
     key={index}
     id={index}
     title={item.title}
     content={item.content}
     />
     );
   })}
   <Footer />
   </>
  );
}

export default App;
