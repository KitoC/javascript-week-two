let ls_array = []

if (localStorage.list) {
    ls_array = JSON.parse(localStorage.list)
    for (item of ls_array) {

        $('ul').append(item)
        check_li()
        delete_item()

    }
    progress_bar()
}

$('.count').text($('ul li').length)

$('#todo_form').on('submit', function (event) {
    event.preventDefault()
    $('ul').append(`<li><p class='list_item'>${$('input').val()}</p><button class="delete">Delete me</button></li>`)
    ls_array.push(`<li><p class='list_item'>${$('input').val()}</p><button class="delete">Delete me</button></li>`)
    localStorage.setItem('list', JSON.stringify(ls_array))
    $('input').val(" ")
    $('.count').text($('ul li').length)
    check_li()
    delete_item()
    progress_bar()
})

function delete_item() {
    $('li .delete').off('click').on('click', function () {
        ls_array.splice($(this).parent().index(), 1)
        $(this).parent().remove()
        localStorage.setItem('list', JSON.stringify(ls_array))
        $('.count').text($('ul li').length)
        progress_bar()
    })
}


function check_li() {
    $('li').off('click').on('click', function (e) {
            console.log(e)

        if (e.ctrlKey) {
           ls_array.splice($(this).index(), 1)
           $(this).remove()
           localStorage.setItem('list', JSON.stringify(ls_array))
           $('.count').text($('ul li').length)
           progress_bar()
        }
        
        $(this).toggleClass('checked')
        let pos = $(this).index()
        console.log(pos)
        ls_array[pos] = $(this)[0].outerHTML
        localStorage.setItem('list', JSON.stringify(ls_array))
        progress_bar()
    })
}

function progress_bar() {

    let progress_indicator = 0
    progress_indicator = 100 / $('ul li').length
    if ($('ul li').length !== 0) {
        $('progress').val($('li.checked').length * progress_indicator)
    } else(
        $('progress').val(0)
    )
}