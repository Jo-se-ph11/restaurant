const contactContainer = document.createElement("div");
const contact = () => {
    const home = document.querySelector("#mainContainer"); 
    contactContainer.setAttribute("class", "contactContainer");
    const contactNumber = document.createElement("div");
    contactNumber.classList.add("contactNumber");
    contactNumber.textContent = "📞 +2348140844256";
    const location = document.createElement("div");
    location.textContent = " 🏠 Hollywood Boulevard 42, Los Angeles, USA";
    location.setAttribute("id", "location");
    const locationImage = document.createElement("div");
    locationImage.setAttribute("id", "locationImage")
    contactContainer.append(contactNumber, location, locationImage);
    home.append(contactContainer);
    contactContainer.style.display = "none";
}

export {contact, contactContainer};