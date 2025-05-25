// Porfile Card Web Component
class ProfileCard extends HTMLElement {
    constructor() {
        super()
        const template = document.getElementById('profileCardTemplate').content.cloneNode(true)

        this.appendChild(template)

        const $card = $(this)
        const $button = $card.find('.showMore')
        const $contact = $card.find('.contact')
        const $hidden = $card.find('.hiddenText')

        $button.on('click', () => $hidden.toggle())
        $contact.on('click', () => {
            const profileName = this.getAttribute('name')

            $('.modal').attr('data-profile', profileName)

            console.log(profileName, $('.modal').data('targetPerson', profileName))
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



$('#contactBtn').on('click', () => {
    const person = $('.modal').data('profile')
    console.log($('.modal').data())

    if($('#firstName').val() === '' || $('#lastName').val() === '' || $('#phone').val() === '') {
        $('#confirmation').text('Please Fill Out the Form').css('color', 'red')
    } else {
        $('#confirmation').text(`Confirmed! Message sent to ${person}`).css('color', 'green')
    }
})