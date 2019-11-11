// Storage functions

// Set
function storageSetEmail(email) {
    localStorage.setItem('EventusEmail', email)
}

function storageSetName(name) {
    localStorage.setItem('EventusName', name)
}

//Get
function storageGetEmail() {
    return localStorage.getItem('EventusEmail')
}

function storageGetName() {
    return localStorage.getItem('EventusName')
}

//Remove
function storageRemoveEmail() {
    localStorage.removeItem('EventusEmail')
}

function storageRemoveName() {
    localStorage.removeItem('EventusName')
}