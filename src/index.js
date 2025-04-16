import './style.css';

fetch('http://localhost:3000/contacts')
    .then(response => response.json())
    .then(data => {
        data.forEach((item) => {
            const divContactsContainer = document.body.querySelector('.contacts-container');
            const divContact = document.createElement("div");
            const h2Name = document.createElement("h2");
            const divPhoneMail = document.createElement("div");
            const pMail = document.createElement("p");
            const pPhone = document.createElement("p");

            divContact.setAttribute("class", "contacts-container__contact");
            divPhoneMail.setAttribute("class", "contacts-container__phone-email");


            h2Name.textContent = item["name"];
            pMail.textContent = item["email"];
            pPhone.textContent = item["phone"

            divPhoneMail.append(pPhone, pMail);
            divContact.append(h2Name, divPhoneMail);
            divContactsContainer.append(divContact);
        })
    })