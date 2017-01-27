var madLibs = function() {
    var greet = document.getElementById("greet").value;
    var animal = document.getElementById("animal").value;
    var animal2 = document.getElementById("animal2").value;
	var shout = document.getElementById("exclamation").value;
    var campItem = document.getElementById("camp-item").value;
    var storyDiv = document.getElementById("story");
    var name = document.getElementById("name").value;
    var adjective = document.getElementById("adjective").value;
    var place2 = document.getElementById("place2").value;
    var place = document.getElementById("place").value;
    storyDiv.innerHTML = name + " was walking through the woods when he/she came upon a " + adjective + "&nbsp;" + animal + " he/she yelled " + shout + "! and tried to use the " + campItem + " to send it back to " + place2 + ". Just when he/she thought it was safe to continue, there was a " + animal2 + ", " + name + " decided to turn back and head for " + place + ".";
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


