function start() {
	
	$("#start").hide();

	$("#gameBackground").append("<div id='player' class='anima1'></div>");
	$("#gameBackground").append("<div id='enemy1' class='anima2'></div>");
	$("#gameBackground").append("<div id='enemy2' ></div>");
	$("#gameBackground").append("<div id='friend' class='anima3'></div>");

	var game = {};
	var speed = 5;
	var positionY = parseInt(Math.random() * 334);
	var KEY = {W: 87, S: 83, D: 68};
	var canShoot = true;

	game.timer = setInterval(loop, 30);

	game.pressed = [];

	$(document).keydown (function(e) {
		game.pressed[e.which] = true;
	});

	$(document).keyup (function(e) {
		game.pressed[e.which] = false;
	});

	function loop() {
		backgroundMove();
		playerMove();
		enemy1Move();
		enemy2Move();
		friendMove();
		
	}

	function backgroundMove() {
		left = parseInt($('#gameBackground').css('background-position'));
		$('#gameBackground').css('background-position', left -1);
	}

	function playerMove() {
		if(game.pressed[KEY.W]) {
			var top = parseInt($('#player').css('top'));
			$('#player').css('top', top -10);

			if(top <= 0) {
				$('#player').css('top', top +10);
			}

		}
		if(game.pressed[KEY.S]) {
			var top = parseInt($('#player').css('top'));
			$('#player').css('top', top +10);
			
			if(top >= 434) {
				$('#player').css('top', top -10);
			}

		}
		if(game.pressed[KEY.D]) {
			shoot();
		}
	}

	function enemy1Move() {
		positionX = parseInt($('#enemy1').css('left'));
		$('#enemy1').css('left', positionX - speed);
		$('#enemy1').css('top', positionY);

		if(positionX <= 0) {
			positionY = parseInt(Math.random() * 334);
			$('#enemy1').css('left', 694);
			$('#enemy1').css('top', positionY);
		}
	}

	function enemy2Move() {
		positionX = parseInt($('#enemy2').css('left'));
		$('#enemy2').css('left', positionX - 3);

		if(positionX <= 0) {
			$('#enemy2').css('left', 775);
		}
	}

	function friendMove() {
		positionX = parseInt($('#friend').css('left'));
		$('#friend').css('left', positionX + 1);

		if(positionX > 906) {
			$('#friend').css('left', 0);
		}
	}

	function shoot() {
	
		if(canShoot == true) {
			canShoot = false;
		
			top1 = parseInt($("#player").css("top"))
			positionX= parseInt($("#player").css("left"))
			shotX = positionX + 190;
			topShot= top1 + 37;
			$("#gameBackground").append("<div id='shot'></div");
			$("#shot").css("top",topShot);
			$("#shot").css("left", shotX);
		
		var shotTime = window.setInterval(startShot, 30);
		}

		function startShot() {
			positionX = parseInt($("#shot").css("left"));
			$("#shot").css("left", positionX + 15); 
	
				if(positionX > 900) {
					window.clearInterval(shotTime);
					shotTime = null;
					$("#shot").remove();
					canShoot = true;
				}
		}
	}

	
}