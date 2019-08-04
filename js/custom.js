$(document).ready(() => {
    $('.output').hide();
})

function submitForm() {
    let input = $("#inputRandomize").val();
    let array = input.split(" ");
    
    if (array.length == 1) return alert("You only have one Input to randomize!");
    $('#outputInner').html(`Winner: ${shuffle(array)}`);
    $('.output').show();
}

function shuffle(array) {
    return array[Math.floor(Math.random() * array.length)];
}