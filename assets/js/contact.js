/*============ EMAIL JS =============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')


const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('','','')
       .then(() =>{
        //Show sent message
        contactMessage.textContent = 'Message sent sucessfully'

        //Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000
    )
    // Clear input fields
    contactForm.reset()
    }, () => {
        // show error message

        contactMessage.textContent = 'Message not sent (service error)'
    }
    )

} 

contactForm.addEventListener('submit',sendEmail )