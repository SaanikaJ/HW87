var canvas = new fabric.Canvas("myCanvas"); 

var block_image_height = 30; 
var block_image_width = 30;

var player_x = 10;
var player_y = 10; 

var player_object = ""; 
var block_image_object = ""; 

function player_update(){
    fabric.Image.fromURL("Ironman.png", function(Img){
        console.log("player update");
        player_object = Img; 
        console.log("player update_ image");
        player_object.scaleToWidth(150); 
        console.log("player update_scale to width");
        player_object.scaleToHeight(140); 
        console.log("player update_scale to height");
        player_object.set({
            top: player_y, 
            left: player_x,
        });
        console.log(player_y, player_x);
        console.log("player update_object, set");
        canvas.add(player_object);
        console.log("player update_finished");
    });
} 

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img; 
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height); 
        block_image_object.set({
            Top: player_y,
            Left: player_x
        }); 
        canvas.add(block_image_object); 
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode; 
    console.log("Key pressed is " + keyPressed); 

    if (keyPressed == "37"){
        left();
        console.log("Left"); 
        canvas.remove(player_object);
        player_update(); 
    } 

    if (keyPressed == "38"){
        up();
        console.log("Up"); 
        canvas.remove(player_object);
        player_update(); 
    }

    if (keyPressed == "39"){
        right();
        console.log("Right"); 
        canvas.remove(player_object);
        player_update(); 
    }

    if (keyPressed == "40"){
        down();
        console.log("Down"); 
        canvas.remove(player_object);
        player_update(); 
    }
    
    if (keyPressed == "66"){
        new_image("Batman.png");
        console.log("B - Batman"); 
        canvas.remove(player_object);
        player_update(); 
    }
    
    if (keyPressed == "73"){
        new_image("Ironman.png");
        console.log("I - Ironman"); 
        canvas.remove(player_object);
        player_update(); 
    }
    
    if (keyPressed == "83"){
        new_image("Spiderman.png");
        console.log("S - Spiderman"); 
        canvas.remove(player_object);
        player_update(); 
    }

    if (keyPressed == "84"){
        new_image("Thor.png");
        console.log("T - Thor"); 
        canvas.remove(player_object);
        player_update(); 
    }

    if (keyPressed == "87"){
        new_image("WonderWoman.png");
        console.log("W - Wonder Woman"); 
        canvas.remove(player_object);
        player_update(); 
    }

    if (e.shiftKey == true && keyPressed == "80"){
        console.log("Shift and P are pressed together");
        block_image_height = block_image_height + 10; 
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
        canvas.remove(player_object);
        player_update(); 
    }

    if (e.shiftKey == true && keyPressed == "77"){
        console.log("Shift and M are pressed together");
        block_image_height = block_image_height - 10; 
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
        canvas.remove(player_object);
        player_update(); 

    }
}

function up(){
    if (player_y >= 0){
        player_y = player_y - block_image_height; 
        console.log("Up arrow is pressed, X value = " + player_x + " Y value = " + player_y); 
        console.log("Block image height = " + block_image_height); 
        canvas.remove(player_object);
    }
}

function down(){
    if (player_y <= 500){
        player_y = player_y + block_image_height; 
        console.log("Down arrow is pressed, X value = " + player_x + " Y value = " + player_y); 
        console.log("Block image height = " + block_image_height); 
        canvas.remove(player_object);
        console.log("Player object removed");
    }
}

function left(){
    if (player_x >= 0){
        player_x = player_x - block_image_width; 
        console.log("Left arrow is pressed, X value = " + player_x + " Y value = " + player_y); 
        console.log("Block image width = " + block_image_width); 
        canvas.remove(player_object);
    }
}

function right(){
    if (player_x < 850){
        player_x = player_x + block_image_width; 
        console.log("Right arrow is pressed, X value = " + player_x + " Y value = " + player_y); 
        console.log("Block image width = " + block_image_width); 
        canvas.remove(player_object);
    }
}
