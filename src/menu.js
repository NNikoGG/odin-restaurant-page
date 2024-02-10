const createMenuPage = () => {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = `Menu`;
    menuTitle.className = 'menu-title';
    content.appendChild(menuTitle);
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';
    content.appendChild(menuContainer);
    menuContainer.innerHTML = `<div class="item-1">
                                    <img src="../src/deathclaw-wellington.png" alt="">
                                    <p>Deathclaw Wellington</p>
                                    <p>100 bottlecaps</p>
                                </div>
                                <div class="item-2">
                                    <img src="../src/iguana-on-a-stick.png" alt="">
                                    <p>Iguana on a Stick</p>
                                    <p>80 bottlecaps</p>
                                </div>
                                <div class="item-3">
                                    <img src="../src/radscorpion-en-croute.png" alt="">
                                    <p>Radscorpion En Croute</p>
                                    <p>110 bottlecaps</p>
                                </div>
                                <div class="item-4">
                                    <img src="../src/firecap-soup.jpg" alt="">
                                    <p>Firecap Soup</p>
                                    <p>90 bottlecaps</p>
                                </div>`
}

export default createMenuPage;