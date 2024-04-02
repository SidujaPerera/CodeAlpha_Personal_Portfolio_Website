// Wait for the DOM content to load before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Typed.js instance
    const typed = new Typed('.multiple', {
        strings: ["Software Engineer.", "Quality Assurance Engineer.", " Front - End Developer", "Desinger", "Musician"],
        typeSpeed: 80,
        backSpeed: 90,
        loop: true
    });
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwWqfka6shwD4KBfcY-3o4torGDYJOeUDpxdtIoG_dpRIYGrN_1BxghlG1KdNPa9dCl/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent Succesfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
