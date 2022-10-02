import React from "react";
import Chatbox from "../inc/Chatbot.js";

import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";



function Form() {
    
    <Chatbox/>
    return(
    <div class="container">

    
            <div class="chatbox">
                <div class="chatbox__support">
                    <div class="chatbox__header">
                        <div class="chatbox__image--header">
                            <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt=""/>
                        </div>
                        <div class="chatbox__content--header">
                            <h4 class="chatbox__heading--header">Chat support</h4>
                            <p class="chatbox__description--header">Hi. My name is Serenity. How can I help you?</p>
                        </div>
                    </div>
                    <div class="opBtnBg">
                        <button class="oBtn" onclick="openForm()">Open Form</button>
                    </div>
                    <div class="chatbox__messages">
                        <ul id="messages"></ul>
                    </div>
                    <div class="chatbox__footer" >
                       {/*
                        <form id="message-user">
                        </form>
                        */}
                        <input id="message-input" type="text" placeholder="Write a message..." class="uInput"/>
                        {/*chatbox__send--footer send__button  */}
                        <button id="message-btn" class="send__button" type="submit">Send</button>
                    </div>
                </div>
                <div class="chatbox__button">
                    <button class="btn"><img src="/static/images/chatbox-icon.svg" alt= "" /></button>
                </div>
            </div>
       
       </div>

    );
    
}

export default Form;
