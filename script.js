// DESKTOP NAV LOGIC
function isActive () {
    if(window.location.href === 'file:///C:/Users/kmcqu/Desktop/cleanfolio/index.html') {
        document.querySelector(".nav-items a:nth-child(1)").style.borderBottom = '2px solid var(--Blue, #1032E9)'
        document.querySelector(".nav-items a:nth-child(2)").style.color = '#9A9A9F'
        document.querySelector(".nav-items a:nth-child(3)").style.color = '#9A9A9F'
        document.querySelector(".nav-items a:nth-child(4)").style.color = '#9A9A9F'
        //hover about
        document.querySelector(".nav-items a:nth-child(2)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(2)").style.color = '#02030E')
        document.querySelector(".nav-items a:nth-child(2)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(2)").style.transition = '0.3s')
        document.querySelector(".nav-items a:nth-child(2)").addEventListener('mouseleave', () => document.querySelector(".nav-items a:nth-child(2)").style.color = '#9A9A9F')
        //hover contact
        document.querySelector(".nav-items a:nth-child(3)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(3)").style.color = '#02030E')
        document.querySelector(".nav-items a:nth-child(3)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(3)").style.transition = '0.3s')
        document.querySelector(".nav-items a:nth-child(3)").addEventListener('mouseleave', () => document.querySelector(".nav-items a:nth-child(3)").style.color = '#9A9A9F')
        //hover resume
        document.querySelector(".nav-items a:nth-child(4)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(4)").style.color = '#02030E')
        document.querySelector(".nav-items a:nth-child(4)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(4)").style.transition = '0.3s')
        document.querySelector(".nav-items a:nth-child(4)").addEventListener('mouseleave', () => document.querySelector(".nav-items a:nth-child(4)").style.color = '#9A9A9F')

    } if(window.location.href === 'file:///C:/Users/kmcqu/Desktop/cleanfolio/pages/about.html') {
        document.querySelector(".nav-items a:nth-child(1)").style.color = '#9A9A9F'
        document.querySelector(".nav-items a:nth-child(2)").style.borderBottom = '2px solid var(--Blue, #1032E9)'
        document.querySelector(".nav-items a:nth-child(3)").style.color = '#9A9A9F'
        document.querySelector(".nav-items a:nth-child(4)").style.color = '#9A9A9F'
        //hover home
        document.querySelector(".nav-items a:nth-child(1)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(1)").style.color = '#02030E')
        document.querySelector(".nav-items a:nth-child(1)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(1)").style.transition = '0.3s')
        document.querySelector(".nav-items a:nth-child(1)").addEventListener('mouseleave', () => document.querySelector(".nav-items a:nth-child(1)").style.color = '#9A9A9F')
        //hover contact
        document.querySelector(".nav-items a:nth-child(3)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(3)").style.color = '#02030E')
        document.querySelector(".nav-items a:nth-child(3)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(3)").style.transition = '0.3s')
        document.querySelector(".nav-items a:nth-child(3)").addEventListener('mouseleave', () => document.querySelector(".nav-items a:nth-child(3)").style.color = '#9A9A9F')
        //hover resume
        document.querySelector(".nav-items a:nth-child(4)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(4)").style.color = '#02030E')
        document.querySelector(".nav-items a:nth-child(4)").addEventListener('mouseover', () => document.querySelector(".nav-items a:nth-child(4)").style.transition = '0.3s')
        document.querySelector(".nav-items a:nth-child(4)").addEventListener('mouseleave', () => document.querySelector(".nav-items a:nth-child(4)").style.color = '#9A9A9F')
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