import {bodyContent, container} from "./home.js";
import "./style.css";
import {contact,contactContainer } from "./contact.js";
import {menu, mainMenu} from "./menu.js";

const mainContainer = document.createElement("div");
const createHome = () => {
    
    mainContainer.setAttribute("id", "mainContainer");
    const mainContent = document.querySelector("#content");                
    const headerContent = document.createElement("div");
    headerContent.setAttribute("id", "headerContent");
    const header = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = "SMART COMPASS";
    header.appendChild(h1);
    header.setAttribute("id", "header");
    headerContent.appendChild(header);
    mainContent.append(headerContent, mainContainer);
    createList();
    bodyContent();
    menu();
    contact();
    createFooter();
   
}

const createList = () => {
    const myList = ["Home", "Menu", "Contact"];
    const ulItems = document.createElement("ul");
    ulItems.setAttribute("id", "myList");
    myList.forEach(list => {
        const li = document.createElement("li");
        li.textContent = list;
        const btn = document.createElement("button");
        if( li.textContent == "Home"){
            li.setAttribute("id", "btn1");
        }else if( li.textContent == "Menu"){
            li.setAttribute("id", "btn2");
        }else if(li.textContent == "Contact"){
            li.setAttribute("id", "btn3");
        };
        btn.appendChild(li);
        btn.classList.add("btn");
        ulItems.append(btn);
        headerContent.appendChild(ulItems);
    });
}

const createFooter = () => {
    const mainContent = document.querySelector("#content");   
    const footerContainer = document.createElement("div");
    footerContainer.textContent = "Copyright © 2022 Motion ";
    footerContainer.setAttribute("id", 'footer');
    mainContent.appendChild(footerContainer);
    
};
createHome();

const homeButton = document.querySelector("#btn1");
const menuButton = document.querySelector("#btn2");
const contactButton = document.querySelector("#btn3");

homeButton.addEventListener("click", () => {
    const contactContainer = document.querySelector(".contactContainer");
    const container = document.querySelector("#container");
    const mainMenu = document.querySelector("#mainMenu");
    if( container.style.display == "none") {
        console.log("home");
        mainMenu.style.display = "none";
        contactContainer.style.display = "none";
        container.style.display = "flex";
    }
   
});

menuButton.addEventListener("click",() => {
    const mainMenu = document.querySelector("#mainMenu");
    const container = document.querySelector("#container");
    const contactContainer = document.querySelector(".contactContainer");
    if(mainMenu.style.display == "none"){
        container.style.display = "none";
        contactContainer.style.display = "none";
        console.log("menu");
        mainMenu.style.display = "grid";
    }
} );

contactButton.addEventListener("click", () => {
    const mainMenu = document.querySelector("#mainMenu");
    const contactContainer = document.querySelector(".contactContainer");
    const container = document.querySelector("#container");
    if(contactContainer.style.display == "none"){
        console.log("contact");
        mainMenu.style.display = "none"; 
        container.style.display = "none";
        contactContainer.style.display = "flex";
    }

})
