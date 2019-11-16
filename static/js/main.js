// Storage functions

// Set
function storageSetEmail(email) {
    localStorage.setItem('EventusEmail', email)
}

function storageSetName(name) {
    localStorage.setItem('EventusName', name)
}

function storageSetCity(city) {
    localStorage.setItem('EventusCity', city)
}

function storageSetInterests(interests) {
    localStorage.setItem('EventusInterests', interests)
}

//Get
function storageGetEmail() {
    return localStorage.getItem('EventusEmail')
}

function storageGetName() {
    return localStorage.getItem('EventusName')
}

function storageGetCity() {
    return localStorage.getItem('EventusCity')
}

function storageGetInterests() {
    return localStorage.getItem('EventusInterests').split(',')
}

//Remove
function storageRemoveEmail() {
    localStorage.removeItem('EventusEmail')
}

function storageRemoveName() {
    localStorage.removeItem('EventusName')
}

function storageRemoveCity() {
    localStorage.removeItem('EventusCity')
}

function storageRemoveInterests() {
    localStorage.removeItem('EventusInterests')
}