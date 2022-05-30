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
    if (nameGenerator.value === '' || emailGenerator.value === '') {
        alert('Please enter a name and email');
    } else {
        localStorage.setItem('newContact', nameGenerator.value);
        localStorage.setItem('newEmail', emailGenerator.value);
        alert('Contact added to list');
    }
}



function displayContactList() {
    if (contact === null || email === null) {
        alert('Please Add a contact first!')
    } else {
        var contact = localStorage.getItem('newContact')
        var email = localStorage.getItem('newEmail')
        var contactName = document.createElement('p')
        contactName.innerText = `name: ${contact}`
        section.appendChild(contactName);

        var contactEmail = document.createElement('p')
        contactEmail.innerText = `email: ${email}`
        section.appendChild(contactEmail);
    }
}