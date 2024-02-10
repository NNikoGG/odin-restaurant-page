import createHomepage from "./home";
import createMenuPage from "./menu";

const createHeader = () => {
    const header = document.querySelector('#header')
    header.innerHTML = `<nav>
                            <div class="logo">
                                <img src="../src/logo.png" alt="">
                                <h1>The Vault Diner</h1>
                            </div>
                            <div class="buttons">
                                <button id="home-button">Home</button>
                                <button id="menu-button">Menu</button>
                                <button id="contact-button">Contact</button>
                            </div>
                        </nav>`;
                        
    const homeButton = document.querySelector('#home-button');
    const menuButton = document.querySelector('#menu-button');
    const logoButton = document.querySelector('.logo');

    homeButton.addEventListener('click', () => {
        createHomepage();
    })
    logoButton.addEventListener('click', () => {
        createHomepage();
    })
    menuButton.addEventListener('click', () => {
        createMenuPage();
    })
}

export default createHeader;