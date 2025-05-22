$('#showMore').on('click', () => $('#hiddenText').toggle())

$('#contact').on('click', () => console.log('contact clicked'))

$('#contactBtn').on('click', () => {
    if($('#firstName').val() === '' || $('#lastName').val() === '' || $('#phone').val() === '') {
        $('#confirmation').text('Please Fill Out the Form').css('color', 'red')
    } else {
        $('#confirmation').text('Confirmed!').css('color', 'green')
    }
})