const createHomepage = () => {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const headline = document.createElement('h2');
    headline.textContent = `Welcome to the Wasteland's Finest Culinary Haven!`;
    headline.className = 'headline';
    content.appendChild(headline);

    const subtext = document.createElement('h3');
    subtext.textContent = 'Where Survival Meets Flavor!';
    subtext.className = 'subtext';
    content.appendChild(subtext);

    const info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = `<div class="address">
                        <img src="../src/location.png" alt="">
                        <p>Vault 101, Main Street, <br> Capital Wasteland</p>
                    </div>
                    <div class="hours">
                        <img src="../src/clock.png" alt="">
                        <p>Open Daily: 10:00 AM to 10:00 PM <br> Late Night Specials on Fridays and Saturdays: 10:00 PM to 2:00 AM</p>
                    </div>`
    content.appendChild(info);
}

export default createHomepage;
