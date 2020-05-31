var drawing  = [];
var currentpath = [];




function setup() {
  database = firebase.database()
  canvas = createCanvas(500,500);
  canvas.mousePressed(startPath);
  //canvas.mouseReleased(endPath);
}
 

                             
function draw() {
  background("blue"); 
  
  if(mouseIsPressed){

    var point = {
      x:mouseX,
      y:mouseY
    }
    currentpath.push(point);
  }
  stroke(255);
  strokeWeight(4);
  noFill();


//    endPath();
  
for (var i = 0 ; i < drawing.length ; i++){
  var path = drawing[i];


    
    beginShape();

    for (var j = 0 ; j < path.length ; j++){
      vertex(path[j].x,path[j].y)
      }
    
  endShape();
    }

}
function startPath(){

  currentpath = [];
  drawing.push(currentpath);

}

function endPath(){

  
}










