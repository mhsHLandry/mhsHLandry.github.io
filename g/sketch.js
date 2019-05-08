let coords = [40, 40, 80, 60, 100, 100, 60, 120, 50, 150];

      function setup() {
        createCanvas(150, 200);
      }

      function draw() {
        background(255);
        noFill();
        stroke(0);
        beginShape();
        curveVertex(,40);
        curveVertex(40,40);
        curveVertex(80,60);
        curveVertex(100,100);
        curveVertex(60,120);
        curveVertex(50,150);
        curveVertex(50,150);
        endShape();

         for (let i = 0; i < coords.length; i+= 2){
          ellipse(coords[i], coords[i+1], 10, 10);
         }
      }
