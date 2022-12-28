import {bodyContent, createHome} from "./home.js";
import "./style.css";
import {contact} from "./contact.js";
import {menu} from "./menu.js"
createHome();

const homeButton = document.querySelector("#btn");
const menuButton = document.querySelector("#btn1");
const contactButton = document.querySelector("#btn2");

homeButton.addEventListener("click", ()=>{
    const mainContent = document.querySelector("#content");                
    if(mainContent){
        mainContent.textContent = "";
        createHome();
        console.log("home")

    }
            
} );
        
menuButton.addEventListener("click", ()=>{
    const container = document.querySelector("#container");
    if(container.textContent != ""){
        container.style.display = "none";
        menu();
        console.log("menu")
    }       
});
        
contactButton.addEventListener("click", ()=>{
    const homeContainer = document.querySelector("#mainMenu");
    const container = document.querySelector("#container");
    const home = document.querySelector("#mainContainer");
    if(homeContainer || home || createHome){
        container.textContent = "";
        contact();
        console.log("contact")
    }else {
        console.log("nothing");
    }
});
