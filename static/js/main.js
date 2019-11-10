function storageSetEmail(email) {
    localStorage.setItem('EventusEmail', email)
}

function storageGetEmail() {
    return localStorage.getItem('EventusEmail')
}

function storageRemoveEmail() {
    localStorage.removeItem('EventusEmail')
}
