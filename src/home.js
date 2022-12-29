const container = document.createElement("div");
const bodyContent = () => {
    const mainContainer = document.querySelector("#mainContainer");  
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
    //container.style.display = "none"
    
}

export {bodyContent, container};
