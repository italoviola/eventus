// Storage functions

function storageSetEmail(email) {
    localStorage.setItem('EventusEmail', email)
}

function storageGetEmail() {
    return localStorage.getItem('EventusEmail')
}

function storageRemoveEmail() {
    localStorage.removeItem('EventusEmail')
}

// Template functions

// let storage

// const getApi = () => {
//     $.ajax({
//         url: "http://www.mocky.io/v2/5d97c12d3b00001100c317f2"
//     })
//     .done(function(res) {
//         const template = $("#template").html();
        
//         Mustache.parse(template);

//         const rendered = Mustache.render(template, res);

//         $(".site").html(rendered);
//     })
//     .fail(function(err) {
//         console.log("Error: " + err.status);
//     });
// };

// getApi()

// const template = $("#template").html();