var madLibs = function() {
	var shout = document.getElementById("exclamation").value;
    var storyDiv = document.getElementById("story");
    var name = document.getElementById("name").value;
    var adjective = document.getElementById("adjective").value;
    var noun = document.getElementById("noun").value;
    storyDiv.innerHTML = shout + "! " + name + " showered with a " + adjective + " " + noun + "...Silly " + name;
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
