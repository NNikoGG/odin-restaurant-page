import createHomepage from "./home";

const createHeader = () => {
    const header = document.querySelector('#header')
    header.innerHTML = `<nav>
                            <h1>The Vault Diner</h1>
                            <div class="buttons">
                                <button id="home-button">Home</button>
                                <button id="menu-button">Menu</button>
                                <button id="contact-button">Contact</button>
                            </div>
                        </nav>`;
                        
    const homeButton = document.querySelector('#home-button');
    homeButton.addEventListener('click', () => {
        createHomepage();
    })
}

export default createHeader;