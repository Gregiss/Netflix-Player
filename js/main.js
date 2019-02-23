window.onload = function(){
	$('body').bind('copy paste cut drag drop', function (e) {
	e.preventDefault();
	});
	console.log("Created in 23/02/2019");
	disableselect();
	mount();
}

function player(){
	let video = {
		'name' : 'The Seven Deadly Sins - Prisioneiros do céu',
		'background' : 'back.webp',
		'mp4': ''
	};
	let player = "<div class='player' id='player'></div>";
	$("#root").append(player);
	let bottom = "<div class='top'><div class='back icon'></div></div><div class='bottom'><div class='progress'><div class='subprogress'><div class='toggle'></div></div></div><span class='time'>1:20</span><div class='play icon'></div><div class='back1 icon'></div><div class='back2 icon'></div><div class='volume icon'></div><div class='help icon'></div><div class='legenda icon'></div><div class='screen icon'></div><div id='info'><h1>" + video.name + "</h1></div></div>";
	$("#player").append(bottom);
	$("#player .progress .subprogress .toggle").mouseover(function(){
		$(this).css("transform", "scale(1.3)");
	});
	$("#player .progress .subprogress .toggle").mouseout(function(){
		$(this).css("transform", "scale(1)");
	});
}

function mount(){
	$('body').bind('copy paste',function(e) {
    e.preventDefault(); return false; 
	});
	let video = {
		'name' : 'The Seven Deadly Sins - Prisioneiros do céu',
		'background' : 'back.webp',
		'mp4': ''
	};
	let background = "<div class='bg' style='background-image:url("+ video.background + ");'></div>";
	let loading = "<div style='transform:scale(1)' id='loading'><img class='spinner' src='site-spinner.png'/><div class='opa'></div></div>";
	$("#root").append(loading)
	$("#loading").append(background)
	let header = "<div id='header'><h1>" + video.name + "</h1> <div class='close'><svg><circle cx='12' cy='12' r='11' stroke='black' stroke-width='2' fill='white' /><path stroke='black' stroke-width='4' fill='none' d='M6.25,6.25,17.75,17.75' /><path stroke='black' stroke-width='4' fill='none' d='M6.25,17.75,17.75,6.25' /></svg></div></div>"
	$("#loading").append(header);
	setTimeout(function(){
		$("#loading").css("transform", "scale(0)");
		player();
	}, 4000);
}

function disableselect(e){
	return false
	}
	function reEnable(){
	return true
	}
	document.onselectstart=new Function ("return false")
	if (window.sidebar){
	document.onmousedown=disableselect
	document.onclick=reEnable
	}