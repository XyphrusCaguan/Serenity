import { useState, useEffect } from 'react';
import APIService from '../inc/APIService'

const Chatbox = (props) => {
    const [body, setBody] = useState('');

    const insertArticle = () =>{
      APIService.InsertArticle({body})
      .then((response) => props.insertedArticle(response))
      .catch(error => console.log('error',error))
    }
    
    const handleSubmit=(event)=>{ 
      event.preventDefault()
      insertArticle()
      setBody('')
    }

  return (
    <div>
      <p>some paragraph</p>
    </div>,
    <form onSubmit = {handleSubmit} >
        <label htmlFor="body" className="form-label">Body</label>
        <input 
          type="text"
          className="form-control" 
          placeholder ="Enter text"
          value={body}
          onChange={(e)=>setBody(e.target.value)}
          required
          />

        <button 
        className="btn btn-primary mt-2"
        >
        Send</button>

    </form>
  )}

export default Chatbox;