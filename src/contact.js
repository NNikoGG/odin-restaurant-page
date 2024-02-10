const createContactPage = () => {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = `Contact Us`;
    contactTitle.className = 'contact-title';
    content.appendChild(contactTitle);
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact-container';
    content.appendChild(contactContainer);
    contactContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.0243027587925!2d-74.01022474253145!3d40.70945576523445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a177d4bf5db%3A0x84e51f23e8c0a75c!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1707600777112!5m2!1sen!2sin" width="700" height="300" style="border:0;" allowfullscreen="" frameborder="0"
    aria-hidden="false"></iframe>
    <div class="message-headline-container">
        <img src="../src/email.svg" alt="">
        <h3 id="message-headline">Message Us</h3>
    </div>
    <form action="">
        <input type="text" placeholder="Full Name" required>
        <input type="text" placeholder="Email" required>
        <textarea name="" id="" cols="30" rows="4" placeholder="Enter your message"></textarea>
        <input id="submit-button" type="submit" value="Submit">
    </form>`
}

export default createContactPage;
