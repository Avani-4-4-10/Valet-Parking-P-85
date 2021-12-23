var canvas= document.getElementById("myCanvas")//Create a reference for canvas 

ctx=canvas.getContext("2d")

var car_x=10
var car_y=10
var car_width=70
var car_height=120//Give specific height and width to the car image

background_image = "parkingLot.jpg";
car_image = "car2.png";

//Set initial position for a car image.

function add(){
    bg_tag=new Image()
    bg_tag.onload=upload_background
    bg_tag.src=background_image
    car_tag=new Image()
    car_tag.onload=upload_car
    car_tag.src=car_image
}
	//upload car, and background images on the canvas.

	function upload_background(){
		ctx.drawImage(bg_tag,0,0,canvas.width,canvas.height)
	
	}
	function upload_car(){
		ctx.drawImage(car_tag,car_x,car_y,car_width,car_height)
	
	}


	



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y > 0){
        car_y=car_y - 10;
        upload_background();
        upload_car();
    }//Define function to move the car upward
}

function down()
{
	if(car_y < 400){
        car_y=car_y + 10;
        upload_background();
        upload_car();
    }//Define function to move the car downward
}

function left()
{
	if(car_x > 0){
        car_x=car_x - 10;
        upload_background();
        upload_car();
    }//Define function to move the car left side
}

function right()
{
	if(car_x < 500){
        car_x=car_x + 10;
        upload_background();
        upload_car();
    }//Define function to move the car right side
}
