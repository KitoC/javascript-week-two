
if ($('ul li').length === 0){
    $('.count').text($('ul li').length)
}

let progress_indicator = 0

$('#todo_form').on('submit', function(event){
    event.preventDefault()
    $('ul').append(`<li>${$('input').val()}</li>`)
    $('input').val(" ")
    $('.count').text($('ul li').length)
    
    progress_indicator = 100 / $('ul li').length

    $('progress').val($('li.checked').length * progress_indicator)


    
    
    $('li').off('click').on('click', function(){
        $(this).toggleClass('checked')
        $('progress').val($('li.checked').length * progress_indicator)
    })
})


 

