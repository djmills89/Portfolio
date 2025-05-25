// Porfile Card Web Component
class ProfileCard extends HTMLElement {
    constructor() {
        super()
        const template = document.getElementById('profileCardTemplate').content.cloneNode(true)

        this.appendChild(template)

        this.querySelector('.card-text').textContent = this.getAttribute('bio')
        this.querySelector('.card-title').textContent = this.getAttribute('name')
        this.querySelector('.card-img-top').src = this.getAttribute('img')
        this.querySelector('#hiddenText').textContent = this.getAttribute('hidden-text')
        this.querySelector('#showMore').textContent = this.getAttribute('show-more')
        this.querySelector('#contact').textContent = this.getAttribute('contact')
    }
}

customElements.define('profile-card', ProfileCard)

$('#showMore').on('click', () => $('#hiddenText').toggle())

$('#contact').on('click', () => console.log('contact clicked'))

$('#contactBtn').on('click', () => {
    if($('#firstName').val() === '' || $('#lastName').val() === '' || $('#phone').val() === '') {
        $('#confirmation').text('Please Fill Out the Form').css('color', 'red')
    } else {
        $('#confirmation').text('Confirmed!').css('color', 'green')
    }
})