var madLibs = function() {
    var food = document.getElementById("food").value;
    var animal = document.getElementById("animal").value;
    var animal2 = document.getElementById("animal2").value;
    var noun = document.getElementById("noun").value;
    var storyDiv = document.getElementById("story");
    var name = document.getElementById("name").value;
    var slang = document.getElementById("slang").value;
    var verbIng = document.getElementById("verb-ing").value;
    var name2 = document.getElementById("name2").value;
    var name3 = document.getElementById("name3").value;
    var drink = document.getElementById("drink").value;
    var clothing = document.getElementById("clothing").value;
    var foodPlural = document.getElementById("food-plural").value;
    var explicit = document.getElementById("explicit").value;
    storyDiv.innerHTML = name + " loves the " + food + " at the rodeo, but the " + animal + "&nbsp;" + verbIng + " is pretty " + slang + " too! " + name + " was watching the " + noun + " racing when " + name2 + " spilled " + drink + " on their " + clothing + " because " + name2 + " was looking at " + name3 + " from across the " + animal2 + " pen. Needless to say, " + name + " won't be visiting the " + explicit + "ing rodeo anytime soon, unless there's " + foodPlural + " involved. Thanks " + name2 + "!"; 
}

$(document).ready(function(){
    // animate on page load
    $('#story').hide();

    $('.form-group').hide().fadeIn(1000);
    $('h1').hide().slideToggle('slow').fadeIn(1000);
    $('#lib-button').slideToggle('fast').show(1000);
    $('#clear').slideToggle('fast').show(1100);

    // generate mad lib
    $('#lib-button').click(function(){
        madLibs();
        $('.form-group').fadeOut(400);
        $('#story').show();
    });

    // clear form and story
    $('#clear').click(function(){
    	$('div[id=story]').html('');
    	$('input[class=clear]').val('');

        $('.form-group').slideToggle().fadeIn(2000);
        $('#story').hide(1000);

    });

    // Load story based on Category



});