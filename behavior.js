var LENGTH = 20;
var list = $('ul')

$('form').submit(function () {
    var text = $('#textInput').val();
    var markov = new Markov(text);
    var item = $('<li/>');
    $(item).text(markov.constructText(LENGTH)).prependTo(list);
    return false;
});
