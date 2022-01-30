// A personality quiz

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt. 
// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.

var prompts = [
{
	prompt: 'I am on the mechanical subteam',
    mkt_weight: 0,
    cad_weight: 1,
    mech_weight: 2,
    elec_weight: 1,
    prog_weight: 0,
	class: 'group0'
},
{
	prompt: 'I am on the marketing subteam',
    mkt_weight: 2,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group1'
},
{
	prompt: 'I am on the CAD subteam',
    mkt_weight: 0,
    cad_weight: 2,
    mech_weight: 1,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group2'
},
{
	prompt: 'I am on the programming subteam',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 1,
    prog_weight: 2,
	class: 'group3'
},
{
	prompt: 'I am on the electrical subteam',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 1,
    elec_weight: 2,
    prog_weight: 1,
	class: 'group4'
},
{
	prompt: 'Dummy prompt',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group5'
},
{
	prompt: 'Dummy prompt',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group6'
},
{
	prompt: 'Dummy prompt',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group7'
},
{
	prompt: 'Dummy prompt',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group8'
},
{
	prompt: 'Dummy prompt',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group9'
},
{
	prompt: 'Dummy prompt',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group10'
},
{
	prompt: 'Dummy prompt',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group11'
}

]

// This array stores all of the possible values and the weight associated with the value. 
// The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.
var prompt_values = [
{
	value: 'Spicy Ahree', 
	class: 'btn-default btn-strongly-agree',
	weight: 2
},
{
	value: 'Ahree',
	class: 'btn-default btn-agree',
	weight: 1,
},
{
	value: 'Mehree', 
	class: 'btn-default',
	weight: 0
},
{
	value: 'Disahree',
	class: 'btn-default btn-disagree',
	weight: -1
},
{ 
	value: 'Spicy Disahree',
	class: 'btn-default btn-strongly-disagree',
	weight: -2
}
]

// For each prompt, create a list item to be inserted in the list group
function createPromptItems() {

	for (var i = 0; i < prompts.length; i++) {
		var prompt_li = document.createElement('li');
		var prompt_p = document.createElement('p');
		var prompt_text = document.createTextNode(prompts[i].prompt);

		prompt_li.setAttribute('class', 'list-group-item prompt');
		prompt_p.appendChild(prompt_text);
		prompt_li.appendChild(prompt_p);

		document.getElementById('quiz').appendChild(prompt_li);
	}
}

// For each possible value, create a button for each to be inserted into each li of the quiz
// function createValueButtons() {
	
// 	for (var li_index = 0; li_index < prompts.length; li_index++) {
// 		for (var i = 0; i < prompt_values.length; i++) {
// 			var val_button = document.createElement('button');
// 			var val_text = document.createTextNode(prompt_values[i].value);

// 			val_button.setAttribute('class', 'value-btn btn ' + prompt_values[i].class);
// 			val_button.appendChild(val_text);

// 			document.getElementsByClassName('prompt')[li_index].appendChild(val_button);
// 		}
// 	}
// }
function createValueButtons() {
	for (var li_index = 0; li_index < prompts.length; li_index++) {
		var group = document.createElement('div');
		group.className = 'btn-group btn-group-justified';

		for (var i = 0; i < prompt_values.length; i++) {
			var btn_group = document.createElement('div');
			btn_group.className = 'btn-group';

			var button = document.createElement('button');
			var button_text = document.createTextNode(prompt_values[i].value);
			button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
			button.appendChild(button_text);

			btn_group.appendChild(button);
			group.appendChild(btn_group);

			document.getElementsByClassName('prompt')[li_index].appendChild(group);
		}
	}
}

createPromptItems();
createValueButtons();

// Keep a running score for each subteam. A higher value means the user is more likely to fit into that subteam.
// Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
var mkt_score = 0;
var cad_score = 0;
var mech_score = 0;
var elec_score = 0;
var prog_score = 0;

// Get the weight for the given subteam associated with the group number
function findPromptWeight(prompts, group, subteam) {
	var weight = 0;

	for (var i = 0; i < prompts.length; i++) {
		if (prompts[i].class === group) {
            switch (subteam) {
                case 'mkt':
                    weight = prompts[i].mkt_weight;
                    break;
                case 'cad':
                    weight = prompts[i].cad_weight;
                    break;
                case 'mech':
                    weight = prompts[i].mech_weight;
                    break;
                case 'elec':
                    weight = prompts[i].elec_weight;
                    break;
                case 'prog':
                    weight = prompts[i].prog_weight;
                    break;
                default:
                    weight = 0;
            }
		}
	}

	return weight;
}

// Get the weight associated to the value
function findValueWeight(values, value) {
	var weight = 0;

	for (var i = 0; i < values.length; i++) {
		if (values[i].value === value) {
			weight = values[i].weight;
		}
	}

	return weight;
}

// Add to each subteam's score based on the button selected.
function addValues(prompts, group, values, value) {
    mkt_score += (findPromptWeight(prompts, group, 'mkt') * findValueWeight(values, value));
    cad_score += (findPromptWeight(prompts, group, 'cad') * findValueWeight(values, value));
    mech_score += (findPromptWeight(prompts, group, 'mech') * findValueWeight(values, value));
    elec_score += (findPromptWeight(prompts, group, 'elec') * findValueWeight(values, value));
    prog_score += (findPromptWeight(prompts, group, 'prog') * findValueWeight(values, value));
}

// Subtract the values added by a particular button.
function subtractValues(prompts, group, values, value) {
    mkt_score -= (findPromptWeight(prompts, group, 'mkt') * findValueWeight(values, value));
    cad_score -= (findPromptWeight(prompts, group, 'cad') * findValueWeight(values, value));
    mech_score -= (findPromptWeight(prompts, group, 'mech') * findValueWeight(values, value));
    elec_score -= (findPromptWeight(prompts, group, 'elec') * findValueWeight(values, value));
    prog_score -= (findPromptWeight(prompts, group, 'prog') * findValueWeight(values, value));
}

// When user clicks a value to agree/disagree with the prompt, display to the user what they selected
$('.value-btn').mousedown(function () {
	var classList = $(this).attr('class');
	// console.log(classList);
	var classArr = classList.split(" ");
	// console.log(classArr);
	var this_group = classArr[0];
	// console.log(this_group);

	// If button is already selected, de-select it when clicked and subtract any previously added values to the total
	// Otherwise, de-select any selected buttons in group and select the one just clicked
	// And subtract deselected weighted value and add the newly selected weighted value to the total
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
        subtractValues(prompts, this_group, prompt_values, $(this).text());
	} else {
		// $('[class='thisgroup).prop('checked', false);
        subtractValues(prompts, this_group, prompt_values, $('.'+this_group+'.active').text());
		// console.log($('.'+this_group+'.active').text());
		$('.'+this_group).removeClass('active');

		// console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
		// $(this).prop('checked', true);
		$(this).addClass('active');
        addValues(prompts, this_group, prompt_values, $(this).text());
	}

	//console.log(total);
})

function calculateResult() {
    var result = 'mkt';
    var largest_score = mkt_score;
    
    if (largest_score < cad_score) {
        result = 'cad';
        largest_score = cad_score;
    }
    if (largest_score < mech_score) {
        result = 'mech';
        largest_score = mech_score;
    }
    if (largest_score < elec_score) {
        result = 'elec';
        largest_score = elec_score;
    }
    if (largest_score < prog_score) {
        result = 'prog';
        largest_score = prog_score;
    }
    
    return result;
}

$('#submit-btn').click(function () {
	// After clicking submit, add up the totals from answers
	// For each group, find the value that is active
	$('.results').removeClass('hide');
	$('.results').addClass('show');
    
    var result = calculateResult();
    
    switch (result) {
        case 'mkt':
            document.getElementById('results').innerHTML = "<b>You are marketing!</b><br><br>\
		Marketing is 45 \% vsco girl. Don\'t @ me.\
<br><br>\
Blah blah blah\
<br><br>\
Blah blah blah";
            break;
        case 'cad':
            document.getElementById('results').innerHTML = "<b>You are CAD!</b><br><br>\
		CAD is such a silly goose! 🤪\
<br><br>\
Blah blah blah\
<br><br>\
Blah blah blah";
            break;
        case 'mech':
            document.getElementById('results').innerHTML = "<b>You are mechanical!</b><br><br>\
		What I mean is you're a normie.\
<br><br>\
Blah blah blah\
<br><br>\
Blah blah blah";
            break;
        case 'elec':
            document.getElementById('results').innerHTML = "<b>You are electrical!</b><br><br>\
		Electrical is nerdy but normal enough that people forget.\
<br><br>\
Blah blah blah\
<br><br>\
Blah blah blah";
            break;
        case 'prog':
            document.getElementById('results').innerHTML = "<b>You are programming!</b><br><br>\
		You're a loser, is what I'm saying.\
<br><br>\
Blah blah blah\
<br><br>\
Blah blah blah";
            break;
        default:
            document.getElementById('results').innerHTML = "<b>Something went wrong</b><br><br>\
		Try again?";
    }
	
	// Hide the quiz after they submit their results
	$('#quiz').addClass('hide');
	$('#submit-btn').addClass('hide');
	$('#retake-btn').removeClass('hide');
})

// Refresh the screen to show a new quiz if they click the retake quiz button
$('#retake-btn').click(function () {
	$('#quiz').removeClass('hide');
	$('#submit-btn').removeClass('hide');
	$('#retake-btn').addClass('hide');

	$('.results').addClass('hide');
	$('.results').removeClass('show');
})