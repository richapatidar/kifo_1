var w = window.innerWidth;
var h = window.innerHeight;
let table;

function preload() {
  table = loadTable("Food DC.csv", "csv", "header");

}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(w, h);
   background(230);
  
  
  h1 = createP("Visualize the scale of impact of your diet and explore the different elements associated with it.");
  h1.position(w/3, 50);
   h1.style("text-align", "center");
  h1.style("justify-content", "center");
  h1.style("width", "500px");
 h1.style("font-family", "Helvetica");
  h1.style("font-size", "1.2rem");

  
  h2 = createP("THE IMPACT OF WHAT YOU EAT ON THE ENVIRONMENT");
  h2.position(250, 150);
  h2.style("justify-content", "center");
  h2.style("text-align", "center");
  h2.style("width", "1000px");
h2.style("font-family", "Helvetica");
  h2.style("font-size", "2rem");


 brief= createP("This project aims at providing explorative information to the people and encourage them to gain knowledge of their diet to help achieve environmental sustainability.");
  brief.position(w/4, 250);
  brief.style("justify-content", "center");
  brief.style("text-align", "center");
  brief.style("width", "750px");
brief.style("font-family", "Helvetica");
  brief.style("font-size", "1rem");
  
  start = createButton("START");
  start.position(700, 500);
  start.style("justify-content", "center");
  start.style("background-color", "black");
  start.style("width", "100px");
  start.style("height", "22px");
  start.style("color", "white");
  start.style("font-family", "Helvetica");
  start.style("font-size", "0.8rem");
}

function draw() {
  background(230);
}