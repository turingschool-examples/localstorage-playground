/* Use this area for pseudo - coding:



*/

// Query selectors
nameGenerator = document.querySelector('.js-name');
emailGenerator = document.querySelector('.js-email');
addContact = document.getElementById('register-btn')
displayContact = document.querySelector('#display-btn');
section = document.querySelector('.js-displayArea')





// Event listeners
addContact.addEventListener('click', addContactToList);
displayContact.addEventListener('click', displayContactList);


// Functions
function addContactToList() {
    localStorage.setItem('newContact', nameGenerator.value);
    localStorage.setItem('newEmail', emailGenerator.value);
    alert('Contact added to list');
}


function displayContactList() {
    var contact = localStorage.getItem('newContact')
    var email = localStorage.getItem('newEmail')
    var contactName = document.createElement('p')
    contactName.innerText = `name: ${contact}`
    section.appendChild(contactName);

    var contactEmail = document.createElement('p')
    contactEmail.innerText = `email: ${email}`
    section.appendChild(contactEmail);
}