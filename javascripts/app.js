// Rover Object Goes Here
// ======================
var rover = {
	direction:"N",
	x:0,
	y:0,
	travelLog:[[0,0]]
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
  	case "N":
  		rover.direction = "W";
  		console.log("The rover is now facing " + rover.direction);
  		break;

  	case "W":
  		rover.direction = "S";
  		console.log("The rover is now facing " + rover.direction);
  		break;

  	case "S":
  		rover.direction = "E";
  		console.log("The rover is now facing " + rover.direction);
  		break;

  	case "E":
  		rover.direction = "N";
  		console.log("The rover is now facing " + rover.direction);
  		break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
    switch (rover.direction) {
  	case "N":
  		rover.direction = "E";
  		console.log("The rover is now facing " + rover.direction);
  		break;

  	case "E":
  		rover.direction = "S";
  		console.log("The rover is now facing " + rover.direction);
  		break;

  	case "S":
  		rover.direction = "W";
  		console.log("The rover is now facing " + rover.direction);
  		break;

  	case "W":
  		rover.direction = "N";
  		console.log("The rover is now facing " + rover.direction);
  		break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.direction) {
  	case "N":
  		if (rover.y === 0) {
  			console.log("Can't do that, your rover is on the top edge!");
  		} else {
  			rover.y --;
  			console.log("The rover moved to x = " + rover.x + " y = " + rover.y);
  		}
  		break;

  	case "E":
  		if (rover.x === 9){
  			console.log("Can't do that, your rover is on the right edge!");
  		} else {
  			rover.x ++;
  			console.log("The rover moved to x = " + rover.x + " y = " + rover.y);
  		}
  		break;

  	case "S":
  		if (rover.y === 9){
  			console.log("Can't do that, your rover is on the bottom edge!");
  		} else {
  		rover.y ++;
  		console.log("The rover moved to x = " + rover.x + " y = " + rover.y);
  		}
  		break;

  	case "W":
  	  	if (rover.x === 0){
  			console.log("Can't do that, your rover is on the left edge!");
  		} else {
  		rover.x --;
  		console.log("The rover moved to x = " + rover.x + " y = " + rover.y);
  		}
  		break;
  }
}

function moveBackward(rover){
  console.log("moveBackward was called")
  switch (rover.direction) {
  	case "N":
  		if (rover.y === 9) {
  			console.log("Can't do that, your rover is on the bottom edge!");
  		} else {
  			rover.y ++;
  			console.log("The rover moved to x = " + rover.x + " y = " + rover.y);
  		}
  		break;

  	case "E":
  		if (rover.x === 0){
  			console.log("Can't do that, your rover is on the left edge!");
  		} else {
  			rover.x --;
  			console.log("The rover moved to x = " + rover.x + " y = " + rover.y);
  		}
  		break;

  	case "S":
  		if (rover.y === 0){
  			console.log("Can't do that, your rover is on the top edge!");
  		} else {
  		rover.y --;
  		console.log("The rover moved to x = " + rover.x + " y = " + rover.y);
  		}
  		break;

  	case "W":
  	  	if (rover.x === 9){
  			console.log("Can't do that, your rover is on the right edge!");
  		} else {
  		rover.x ++;
  		console.log("The rover moved to x = " + rover.x + " y = " + rover.y);
  		}
  		break;
  }
}

function orderRover(movement){
	for (var letter of movement) {
		switch (letter) {
			case "f":
				moveForward(rover);
				letter ++;
				rover.travelLog.push([rover.x,rover.y]);
				break;

			case "r":
				turnRight(rover);
				letter ++;
				rover.travelLog.push([rover.x,rover.y]);
				break;

			case "l":
				turnRight(rover);
				letter ++;
				rover.travelLog.push([rover.x,rover.y]);
				break;

			case "b":
				moveBackward(rover);
				letter ++;
				rover.travelLog.push([rover.x,rover.y]);
				break;

			default:
				console.log("You've entered an incorrect character. Choose between move (f)orward, move (b)ackward, turn (r)ight or turn (l)eft")
					}
	}
	console.log(rover.travelLog);
}