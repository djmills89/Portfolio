// Porfile Card Web Component
class ProfileCard extends HTMLElement {
    constructor() {
        super()
        const template = document.getElementById('profileCardTemplate').content.cloneNode(true)

        this.appendChild(template)

        const button = this.querySelector('.showMore')
        const contact = this.querySelector('.contact')
        const hidden = this.querySelector('.hiddenText')

        button.addEventListener('click', () => {
           hidden.classList.toggle('hiddenText')
           button.textContent = button.textContent === 'Show More' ? 'Show Less' : 'Show More'
        })
        contact.addEventListener('click', () => {
            const profileName = this.getAttribute('name')
            const modal = document.querySelector('.modal')
            modal.setAttribute('data-profile', profileName)

            console.log(profileName)
        })

        this.querySelector('.card-text').textContent = this.getAttribute('bio')
        this.querySelector('.card-title').textContent = this.getAttribute('name')
        this.querySelector('.card-img-top').src = this.getAttribute('img')
        this.querySelector('.hiddenText').textContent = this.getAttribute('hidden-text')
        this.querySelector('.showMore').textContent = this.getAttribute('show-more')
        this.querySelector('.contact').textContent = this.getAttribute('contact')
    }
}

customElements.define('profile-card', ProfileCard)

//Variables
const $radios = $('input[name="toggleMode"]')
$radios.on('change', function() {
    const theme = $(this).val()
    $('html').attr('data-theme', theme)
    console.log(theme)
})

$('#contactBtn').on('click', () => {
    const person = $('.modal').data('profile')
    console.log($('.modal').data())

    if($('#firstName').val() === '' || $('#lastName').val() === '' || $('#phone').val() === '') {
        $('#confirmation').text('Please Fill Out the Form').css('color', 'red')
    } else {
        $('#confirmation').text(`Confirmed! Message sent to ${person}`).css('color', 'green')
    }
})

const modal = document.querySelector('.modal')
modal.addEventListener('hidden.bs.modal', () => {
    modal.querySelectorAll('input').forEach(input => input.value = '')
    document.getElementById('confirmation').textContent = ''
})