var madLibs = function() {
	  var shout = document.getElementById("exclamation").value;
    var storyDiv = document.getElementById("story");
    var name = document.getElementById("name").value;
    var adjective = document.getElementById("adjective").value;
    var adjective2 = document.getElementById("adjective2").value;
    var noun = document.getElementById("noun").value;
    // var noun2 = document.getElementById("noun2").value;
    var food = document.getElementById("food").value;
    var food2 = document.getElementById("food2").value;
    var sad = document.getElementById("sad").value;
    storyDiv.innerHTML = shout + "! " + name + " went to the " + adjective +  " ball game and ordered a " + adjective2 + "&nbsp;" +  food + " from the " + food2 + " guy." + "... LOL, only " + name + " would be " + sad + " enough to do that! #" + noun;
    }

$(document).ready(function(){
    // animate on page load
    $('#sports-story').hide();
    $('#story').hide();
    $('love-story').hide();
    $('table').hide();

    $('.form-group').hide().fadeIn(1000);
    $('h1').hide().slideToggle('slow').fadeIn(1000);
    $('#lib-button').slideToggle('fast').show(1000);
    $('#clear').slideToggle('fast').show(1100);
    $('table').show(1000);

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


// End Document
});
