function storageSetEmail(email) {
    localStorage.setItem('email', email)
}

function storageGetEmail() {
    return localStorage.getItem('email')
}
