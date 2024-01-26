// DESKTOP NAV LOGIC
function isActive () {
    if(window.location.href === 'https://chasemcquown.github.io/cleanfolio/index.html') {
        document.querySelector(".nav-items a:nth-child(1)").style.borderBottom = '2px solid var(--Blue, #1032E9)'
        document.querySelector(".nav-items a:nth-child(2)").style.color = '#9A9A9F'
        document.querySelector(".nav-items a:nth-child(3)").style.color = '#9A9A9F'
        //hover about
        document.querySelector(".nav-items a:nth-child(2)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(2)").style.color = '#02030E')
        document.querySelector(".nav-items a:nth-child(2)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(2)").style.transition = '0.3s')
        document.querySelector(".nav-items a:nth-child(2)").addEventListener('mouseleave', () => document.querySelector(".nav-items a:nth-child(2)").style.color = '#9A9A9F')
        //hover resume
        document.querySelector(".nav-items a:nth-child(3)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(3)").style.color = '#02030E')
        document.querySelector(".nav-items a:nth-child(3)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(3)").style.transition = '0.3s')
        document.querySelector(".nav-items a:nth-child(3)").addEventListener('mouseleave', () => document.querySelector(".nav-items a:nth-child(3)").style.color = '#9A9A9F')

    } if(window.location.href === 'https://chasemcquown.github.io/cleanfolio/pages/about.html') {
        document.querySelector(".nav-items a:nth-child(1)").style.color = '#9A9A9F'
        document.querySelector(".nav-items a:nth-child(2)").style.borderBottom = '2px solid var(--Blue, #1032E9)'
        document.querySelector(".nav-items a:nth-child(3)").style.color = '#9A9A9F'
        //hover home
        document.querySelector(".nav-items a:nth-child(1)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(1)").style.color = '#02030E')
        document.querySelector(".nav-items a:nth-child(1)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(1)").style.transition = '0.3s')
        document.querySelector(".nav-items a:nth-child(1)").addEventListener('mouseleave', () => document.querySelector(".nav-items a:nth-child(1)").style.color = '#9A9A9F')
        //hover resume
        document.querySelector(".nav-items a:nth-child(3)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(3)").style.color = '#02030E')
        document.querySelector(".nav-items a:nth-child(3)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(3)").style.transition = '0.3s')
        document.querySelector(".nav-items a:nth-child(3)").addEventListener('mouseleave', () => document.querySelector(".nav-items a:nth-child(3)").style.color = '#9A9A9F')
    }
}

isActive()

// MOBILE MENU LOGIC
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


// CONTACT FORM LOGIC
const formButton = document.getElementById('formButton')
const successMessage = document.getElementById('successMessage')

successMessage.style.fontSize = '14px';
successMessage.style.marginTop = '4%';
successMessage.style.color = '#299C2E';

let subName = '';
let subEmail = '';
let subMessage = '';

// data sender
function sendData() {

    //stop reload
    event.preventDefault();
    
    //collect values
    subName = document.getElementById('subName').value
    subEmail = document.getElementById('subEmail').value
    subMessage = document.getElementById('subMessage').value

    document.getElementById('successMessage').innerHTML = 'Thanks for reaching out ' + subName + '!' + ' I will get back to you as soon as I can.';
}

formButton.addEventListener('click', sendData)



