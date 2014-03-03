var LENGTH = 20;
var list = $('ul')

$('form').submit(function () {
    var text = $('#textInput').val();
    var item = $('<li/>');
    try {
        var markov = new Markov(text);
        $(item).text(markov.constructText(LENGTH)).prependTo(list);
    } catch (error) {
        alert(error.message);
    }

    return false;
});
