import React from "react";
import { useState, useEffect } from 'react';
// import LoremIpsum from 'react-lorem-ipsum';
import Form from "../inc/Form.js";
import Chatbox from '../inc/Chatbox.js'

function Button (){
    // define variables for the present state of the form and another to change its state
    const [showForm, setShowForm] = useState(false);
    const [articles, setArticles] = useState([]);
    // toggle between the two states,visible and hidden
    const toggleShowForm = () => {
        setShowForm(!showForm);
    }
    const insertedArticle = (article) =>{
        const new_articles = [...articles,article]
        setArticles(new_articles)
        console.log(new_articles)
    }

    const mystyle = {
        color: "black",
        fontFamily: "Arial"
      };
    return (
    <div>
        <div>
            {this.insertedArticle(this.props.new_articles)}
        </div>
        <div style={mystyle} className='buttonForm'> 
            <button 
            onClick={toggleShowForm}
            className="btn btn-primary"
            >
            Write an article
            <i className="bi bi-pencil-square m-2"></i>
            </button>
            {showForm && (
            <Chatbox insertedArticle={insertedArticle}
            />
            )}
        </div>
    </div>
    );
}



export default Button;