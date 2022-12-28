const contact = () => {
    const home = document.querySelector("#container"); 
    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("class", "contactContainer");
    const contactNumber = document.createElement("div");
    contactNumber.textContent = "📞 +2348140844256";
    const location = document.createElement("div");
    location.textContent = " 🏠 Hollywood Boulevard 42, Los Angeles, USA";
    location.setAttribute("id", "location");
    const locationImage = document.createElement("div");
    locationImage.setAttribute("id", "locationImage")
    contactContainer.append(contactNumber, location, locationImage);
    home.append(contactContainer);
}

export {contact};