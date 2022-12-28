const createHome = () => {

    const mainContent = document.querySelector("#content");                
    const headerContent = document.createElement("div");
    headerContent.setAttribute("id", "headerContent");
    const header = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = "SMART COMPASS";
    header.appendChild(h1);
    header.setAttribute("id", "header");
    headerContent.appendChild(header);
    mainContent.appendChild(headerContent);
    createList();
    bodyContent();
    createFooter();
}

const createList = () => {
    const myList = ["Home", "Menu", "Contact"];
    const ulItems = document.createElement("ul");
    ulItems.setAttribute("id", "myList")
    myList.forEach(list => {
    const li = document.createElement("li");
    li.textContent = list;
    const btn = document.createElement("button");
    if( li.textContent == "Home"){
        li.setAttribute("id", "btn");
    }else if( li.textContent == "Menu"){
        li.setAttribute("id", "btn1");
    }else if(li.textContent == "Contact"){
        li.setAttribute("id", "btn2");
    };
    btn.appendChild(li);
    btn.classList.add("btn")
    ulItems.append(btn);
    headerContent.appendChild(ulItems);
    });
}

const bodyContent = () => {
    const mainContent = document.querySelector("#content");   
    const mainContainer = document.createElement("div");
    mainContainer.setAttribute("id", "mainContainer") 
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    const firstText = document.createElement("div");
    const secondText = document.createElement("div");
    firstText.textContent = "Best pizza in your country"
    firstText.setAttribute("id", "firstText");
    secondText.setAttribute("id", "secondText");
    secondText.textContent = "Made with passion since 2019.";
    const centerImage = document.createElement("div");
    centerImage.setAttribute("id", "centerImage");
    const thirdText = document.createElement("div");
    thirdText.setAttribute("id", "thirdText");
    thirdText.textContent = "order online or visit us!"
    container.append(firstText, secondText, centerImage ,thirdText);
    mainContainer.append(container);
    mainContent.appendChild(mainContainer);

}

const createFooter = () => {
    const mainContent = document.querySelector("#content");   
    const footerContainer = document.createElement("div");
    footerContainer.textContent = "Copyright © 2022 Motion ";
    footerContainer.setAttribute("id", 'footer');
    mainContent.appendChild(footerContainer);
    
}

export {createHome, bodyContent};
