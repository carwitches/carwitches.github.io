var prompts_per_page = 14;
var current_page = 1;
var spicy_page = 3;

// This is an array of objects that stores prompts given to the user and their weights.
// If agreeing with a given prompt is indicative of a certain subteam, the prompt's weight for that subteam will be positive.
// If disagreeing with a given prompt is indicative of a certain subteam, the prompt's weight for that subteam will be negative.

var prompts = [
{
	prompt: 'I like working with my hands.',
    mkt_weight: -2,
    cad_weight: 1,
    mech_weight: 2,
    elec_weight: 2,
    prog_weight: -1,
	class: 'group0'
},
{
	prompt: 'I like solving puzzles.',
    mkt_weight: -1,
    cad_weight: 1,
    mech_weight: 1,
    elec_weight: 1,
    prog_weight: 2,
	class: 'group1'
},
{
	prompt: 'I am a good writer.',
    mkt_weight: 2,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group2'
},
{
	prompt: 'I am creative.',
    mkt_weight: 2,
    cad_weight: 2,
    mech_weight: 1,
    elec_weight: 0,
    prog_weight: 2,
	class: 'group3'
},
{
	prompt: 'I have trouble talking to others.',
    mkt_weight: -2,
    cad_weight: 0,
    mech_weight: -1,
    elec_weight: 1,
    prog_weight: 2,
	class: 'group4'
},
{
	prompt: 'I enjoy math.',
    mkt_weight: 0,
    cad_weight: 1,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 2,
	class: 'group5'
},
{
	prompt: 'I am interested in working directly with electronics.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 2,
    prog_weight: 1,
	class: 'group6'
},
{
	prompt: 'I like getting into the details of how things work.',
    mkt_weight: 0,
    cad_weight: 2,
    mech_weight: 1,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group7'
},
{
	prompt: 'I\'m good with fine motor tasks like sewing.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 1,
    elec_weight: 2,
    prog_weight: 0,
	class: 'group8'
},
{
	prompt: 'I liked building with LEGOs as a kid.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 1,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group9'
},
{
	prompt: 'I\'m a confident person.',
    mkt_weight: 1,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: -1,
    prog_weight: -1,
	class: 'group10'
},
{
	prompt: 'Spatial reasoning is one of my strengths.',
    mkt_weight: 0,
    cad_weight: 2,
    mech_weight: 1,
    elec_weight: 1,
    prog_weight: 0,
	class: 'group11'
},
{
	prompt: 'I\'m physically strong.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 1,
    elec_weight: 0,
    prog_weight: -1,
	class: 'group12'
},
{
	prompt: 'Soup',
    mkt_weight: 0,
    cad_weight: 1,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group13'
},
{
	prompt: 'Watching metal melt sounds satisfying.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 1,
    elec_weight: 1,
    prog_weight: 0,
	class: 'group14'
},
{
	prompt: 'When I encounter a problem, I like to think through it step by step.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 2,
	class: 'group15'
},
{
	prompt: 'I\'m good at managing money.',
    mkt_weight: 1,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group16'
},
{
	prompt: 'I like working with kids.',
    mkt_weight: 1,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group17'
},
{
	prompt: 'My pickup lines tend to be physics-related.',
    mkt_weight: -2,
    cad_weight: 2,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 1,
	class: 'group18'
},
{
	prompt: 'I would rather not work in potentially dangerous situations.',
    mkt_weight: 0,
    cad_weight: -1,
    mech_weight: -2,
    elec_weight: -1,
    prog_weight: 0,
	class: 'group19'
},
{
	prompt: 'I am a very careful person.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 2,
    prog_weight: 0,
	class: 'group20'
},
{
	prompt: 'I don\'t mind sitting at a computer all day.',
    mkt_weight: 1,
    cad_weight: 1,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 1,
	class: 'group21'
},
{
	prompt: 'I am a communist.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 2,
	class: 'group22'
},
{
	prompt: 'Working with big machines seems cool.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 2,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group23'
},
{
	prompt: 'I would enjoy being an event coordinator.',
    mkt_weight: 2,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 1,
    prog_weight: 0,
	class: 'group24'
},
{
	prompt: 'I am likely to go to a rave.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 1,
    elec_weight: 2,
    prog_weight: -1,
	class: 'group25'
},
{
	prompt: 'I am good at drawing.',
    mkt_weight: 1,
    cad_weight: 1,
    mech_weight: 0,
    elec_weight: 2,
    prog_weight: 0,
	class: 'group26'
},
{
	prompt: 'Writing technical documents seems boring to me.',
    mkt_weight: 0,
    cad_weight: -2,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: -1,
	class: 'group27'
},
{
	prompt: 'I am a fan of rubber ducks.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 2,
	class: 'group28'
},
{
	prompt: 'I would cuddle with the bros.',
    mkt_weight: 0,
    cad_weight: 1,
    mech_weight: 1,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group29'
},
{
	prompt: 'I have climbed onto the top of a door before.',
    mkt_weight: 0,
    cad_weight: 2,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 1,
	class: 'group30'
},
{
	prompt: 'I write love letters on Chipotle napkins.',
    mkt_weight: 0,
    cad_weight: 1,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group31'
},
{
	prompt: 'I decorate the tools I work with.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 2,
    prog_weight: 1,
	class: 'group32'
},
{
	prompt: 'I am capable of communicating telepathically.',
    mkt_weight: 0,
    cad_weight: 1,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group33'
},
{
	prompt: 'I eat onions like they\'re apples.',
    mkt_weight: -1,
    cad_weight: 2,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 1,
	class: 'group34'
},
{
	prompt: 'I went through an anarchist phase.',
    mkt_weight: 2,
    cad_weight: -1,
    mech_weight: 0,
    elec_weight: 0,
    prog_weight: 1,
	class: 'group35'
},
{
	prompt: 'I use Snapchat daily.',
    mkt_weight: 2,
    cad_weight: 0,
    mech_weight: 2,
    elec_weight: 0,
    prog_weight: -1,
	class: 'group36'
},
{
	prompt: 'I have a guniea pig.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 2,
    prog_weight: 0,
	class: 'group37'
},
{
	prompt: 'Robotics is a sport.',
    mkt_weight: 1,
    cad_weight: 0,
    mech_weight: -2,
    elec_weight: 0,
    prog_weight: 1,
	class: 'group38'
},
{
	prompt: 'I\'m a weeb.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 1,
    prog_weight: 2,
	class: 'group39'
},
{
	prompt: 'My favorite pizza topping is metal shavings.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 2,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group40'
},
{
	prompt: 'I use TikTok.',
    mkt_weight: 2,
    cad_weight: 0,
    mech_weight: 1,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group41'
},
{
	prompt: 'I am a sportsball enjoyer.',
    mkt_weight: 1,
    cad_weight: 1,
    mech_weight: 2,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group42'
},
{
	prompt: 'I love Marvel.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 2,
    prog_weight: 0,
	class: 'group43'
},
{
	prompt: 'I have a secret Tumblr blog with like three followers.',
    mkt_weight: 0,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 2,
    prog_weight: 0,
	class: 'group44'
},
{
	prompt: 'I love eating donuts in random parking lots at 2 AM with my best bro.',
    mkt_weight: 0,
    cad_weight: 1,
    mech_weight: 1,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group45'
},
{
	prompt: '😏',
    mkt_weight: 1,
    cad_weight: 2,
    mech_weight: 1,
    elec_weight: 0,
    prog_weight: 0,
	class: 'group46'
},
{
	prompt: 'I\'m a theater kid.',
    mkt_weight: 1,
    cad_weight: 0,
    mech_weight: 0,
    elec_weight: 2,
    prog_weight: 0,
	class: 'group47'
}
];

// This array stores all of the possible values and the weight associated with the value. 
// The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.
var prompt_values = [
{
	value: 'Strongly Agree', 
    spicyValue: 'Spicy Ahree',
	class: 'btn-default btn-strongly-agree',
	weight: 2
},
{
	value: 'Agree',
    spicyValue: 'Ahree',
	class: 'btn-default btn-agree',
	weight: 1,
},
{
	value: 'Neutral', 
    spicyValue: 'Mehree',
	class: 'btn-default',
	weight: 0
},
{
	value: 'Disagree',
    spicyValue: 'Disahree',
	class: 'btn-default btn-disagree',
	weight: -1
},
{ 
	value: 'Strongly Disagree',
    spicyValue: 'Spicy Disahree',
	class: 'btn-default btn-strongly-disagree',
	weight: -2
}
];

var num_of_pages = Math.floor((prompts.length - 1) / prompts_per_page) + 1;

// For each prompt, create a list item to be inserted in the list group
function createPromptItems(page) {

	for (var i = prompts_per_page * (page - 1); (i < prompts_per_page * page) && (i < prompts.length); i++) {
		var prompt_li = document.createElement('li');
		var prompt_p = document.createElement('p');
		var prompt_text = document.createTextNode(prompts[i].prompt);

		prompt_li.setAttribute('class', 'list-group-item prompt');
		prompt_p.appendChild(prompt_text);
		prompt_li.appendChild(prompt_p);

		document.getElementById('page' + page).appendChild(prompt_li);
	}
}

// For each possible value, create a button for each to be inserted into each li of the quiz
function createValueButtons(page) {
	for (var li_index = prompts_per_page * (page - 1); (li_index < prompts_per_page * page) && (li_index < prompts.length); li_index++) {
		var group = document.createElement('div');
		group.className = 'btn-group btn-group-justified';

		for (var i = 0; i < prompt_values.length; i++) {
			var btn_group = document.createElement('div');
			btn_group.className = 'btn-group';

			var button = document.createElement('button');
			var button_text = document.createTextNode((page >= spicy_page) ? prompt_values[i].spicyValue : prompt_values[i].value);
			button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
			button.appendChild(button_text);

			btn_group.appendChild(button);
			group.appendChild(btn_group);

			document.getElementsByClassName('prompt')[li_index].appendChild(group);
		}
	}
}

for (var i = 1; i <= num_of_pages; i++) {
    createPromptItems(i);
    createValueButtons(i);
}


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
		if (values[i].value === value || values[i].spicyValue == value) {
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
    console.log("????");
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
});

$('#next-btn').click(function () {
    $('#page' + current_page).addClass('hide');
    $('#page' + current_page).removeClass('show');
    current_page++;
    
    $('#page' + current_page).removeClass('hide');
    $('#page' + current_page).addClass('show');
	
	window.scrollTo(0, 0);

    // If this is the last page of the quiz, show the submit button
    if (current_page == num_of_pages) {
        $('#next-btn').addClass('hide');
        $('#submit-btn').removeClass('hide');
    }
});

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
            document.getElementById('results').innerHTML = "<p style=\"text-align:center\"><img src=\"../assets/marketing.jpg\" height=\"200\"></p><h5>Art by Caitlyn!</h5>\
                                                            <br><b>You are marketing!</b><br><br>\
                                                            Marketing is a labubu girl.\
                                                            <br><br>\
                                                            People on marketing are generally creative, detail-oriented, and good at public speaking.\
                                                            <br><br>\
                                                            Marketing (the personification) is the MOM of the friend group and holds everything together. She's popular and has a strong social \
                                                            media presence, but is lacking in close, genuine connections.";
            break;
        case 'cad':
            document.getElementById('results').innerHTML = "<p style=\"text-align:center\"><img src=\"../assets/cad.jpg\" height=\"200\"></p><h5>Art by Caitlyn!</h5>\
                                                            <br><b>You are CAD!</b><br><br>\
                                                            CAD is such a silly goose! 🤪\
                                                            <br><br>\
                                                            People on CAD are generally laid back, creative, and great with math and physics.\
                                                            <br><br>\
                                                            CAD (the personification) is a know-it-all who always answers questions in class, but he's not uptight by any means; he's probably \
                                                            the goofiest person you'll ever meet, and he always seems to have an injury from his latest stunt.";
            break;
        case 'mech':
            document.getElementById('results').innerHTML = "<p style=\"text-align:center\"><img src=\"../assets/mechanical.jpg\" height=\"200\"></p><h5>Art by Caitlyn!</h5>\
                                                            <br><b>You are mechanical!</b><br><br>\
                                                            Basically you're a normie.\
                                                            <br><br>\
                                                            People on mechanical are generally hands-on, innovative, and willing to get their hands dirty.\
                                                            <br><br>\
                                                            Mechanical (the personification) is super friendly and easy to talk to. He'll often show up late and leave his workspace a mess, \
                                                            but he's also one of the people who stays the latest at the shop.";
            break;
        case 'elec':
            document.getElementById('results').innerHTML = "<p style=\"text-align:center\"><img src=\"../assets/electrical.jpg\" height=\"200\"></p><h5>Art by Caitlyn!</h5>\
                                                            <br><b>You are electrical!</b><br><br>\
                                                            Electrical is nerdy but normal enough that people forget.\
                                                            <br><br>\
                                                            People on electrical are generally focused, flexible, and good at working with their hands.\
                                                            <br><br>\
                                                            Electrical (the personification) is mature and put-together, but on the inside she is, at times, rather disorganized. She can be shy and \
                                                            insecure, but her natural leadership qualities make up for this.";
            break;
        case 'prog':
            document.getElementById('results').innerHTML = "<p style=\"text-align:center\"><img src=\"../assets/programming.jpg\" height=\"200\"></p><h5>Art by Caitlyn!</h5>\
                                                            <br><b>You are programming!</b><br><br>\
                                                            We like programming. Programming is fun. We like programming. Programming is fun. We like\
                                                            <br><br>\
                                                            People on programming are generally meticulous, open-minded, and great at problem solving.\
                                                            <br><br>\
                                                            Programming (the personification) is extremely reserved and socially awkward, but once you get to know him, he's loud and wacky. \
                                                            He's also incredibly smart, having been a techie from a young age.";
            break;
        default:
            document.getElementById('results').innerHTML = "<b>Something went wrong</b><br><br>\
                                                            Try again?";
    }
	
	// Hide the quiz after they submit their results
	$('#page' + current_page).addClass('hide');
    $('#page' + current_page).removeClass('show');
	$('#submit-btn').addClass('hide');
	$('#retake-btn').removeClass('hide');
	
	window.scrollTo(0, 0);
});

// Refresh the screen to show a new quiz if they click the retake quiz button
$('#retake-btn').click(function () {
    current_page = 1;
	$('#page1').removeClass('hide');
	$('#next-btn').removeClass('hide');
	$('#retake-btn').addClass('hide');

	$('.results').addClass('hide');
	$('.results').removeClass('show');
	
	window.scrollTo(0, 0);
});