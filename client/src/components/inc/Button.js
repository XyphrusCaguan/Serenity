import React from "react";
import { useState, useEffect, useRef } from 'react';
// import LoremIpsum from 'react-lorem-ipsum';
import Form from "../inc/Form.js";
import Chatbox from '../inc/Chatbox.js'
import {APIService} from '../inc/APIService';


function Button (props){
    // define variables for the present state of the form and another to change its state
    const [showForm, setShowForm] = useState(false);
    const [articles, setArticles] = useState([]);
    const ChildRef = useRef();
    // toggle between the two states,visible and hidden
    const toggleShowForm = () => {
        setShowForm(!showForm);
    }
    const insertedArticle = (article) =>{
        const new_articles = [...articles,article]
        setArticles(new_articles)
    }

    console.log(articles)

    const mystyle = {
        color: "black",
        fontFamily: "Arial"
    };
    
    return (
       
    <div>
        {
            articles.map(post => {
                return (
                    <div key={post.answer}>
                        <p>{post.input}</p>
                        <p>{post.answer}</p>
                    </div>
                )
            })
        }
        <div className = "App" >
            <div></div>
        </div>
        <div style={mystyle} className='buttonForm'>
            <Chatbox insertedArticle={insertedArticle} />
        </div>
    </div>
    );

}


export default Button;