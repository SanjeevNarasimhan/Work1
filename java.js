 
let seconds = 0;
let minutes = 0;


let displaySeconds = 0;
let displayMinutes = 0;

let interval = null;

let status = "stopped";


function stopWatch(){

    seconds++;

   
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;}

    
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    document.getElementById("display").innerHTML = "Time:" + displayMinutes + ":" + displaySeconds;
if(displayMinutes==1)
{
    alert("Game over,Score:"+score1);
    window.location.href="Intro.html";
}
}



function startStop(){

    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "pause";
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}
let score1=0;
 const canvas=document.getElementById('canvas');
const score=document.querySelector('h1');
const button=document.getElementById('startStop');
button.onclick=function(){
    startStop();
 if(canvas.getContext)
{
const ctx=canvas.getContext('2d');
var c=0;
var mouse={
x:undefined,
y:undefined}
window.addEventListener('mousedown',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    });


function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}

function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

      
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
    }
}    

function randomIntFromRange(min,max){
    return (Math.floor(Math.random()*max-min+1)+min);
}

function Circle(x,y,r,)
{
this.x=x;
this.y=y;
this.r=r;
this.velocity={
    x:Math.random()+0.1,
    y:Math.random()+0.1
}
this.color=color[Math.floor(Math.random()*color.length)];
this.mass=1;
this.draw=function(){
ctx.beginPath();
ctx.fillStyle=this.color;
ctx.arc(this.x,this.y,this.r,0,10,false);
ctx.fill();
ctx.closePath();
};
this.update= function(){

if(this.r+this.x>=canvas.width||this.x-this.r<=0)
{
this.velocity.x=-this.velocity.x;
}
//if(this.x-this.r<0)
//{
//this.dx=+1;
//}
if(this.y+this.r>=canvas.height)
{
    this.velocity.y=0;this.velocity.x=0; 

}
if(this.y-this.r<=0)
{
    this.velocity.y=-this.velocity.y;
}

this.draw();
this.x+=this.velocity.x;
this.y+=this.velocity.y;
for(let z=0;z<circleArray.length;++z)
{
    if(this===circleArray[z])continue;
    if(getdistance(this.x,circleArray[z].x,this.y,circleArray[z].y)-this.r*2<0)
    {
        resolveCollision(this,circleArray[z]);
        //console.log("collison");
    }
}
if(mouse.x!=undefined && mouse.y!=undefined)
{
    for(let d=0;d<circleArray.length;++d)
    {
    if(mouse.x-circleArray[d].x<circleArray[d].r && mouse.x-circleArray[d].x>-circleArray[d].r &&mouse.y-circleArray[d].y<circleArray[d].r && mouse.y-circleArray[d].y>-this.r ) 
    {
    //console.log(d);
    let len=circleArray.length;
    len=len-1;
    for(let m=d;m<len;++m)
    {circleArray[m]=circleArray[m+1];   
    }
    score1+=1;
    console.log(score1);
    score.innerText="Score:"+ score1;
    }
} 
}
for(let w=0;w<circleArray.length;++w)
{

c=c+(circleArray[w].r)*(circleArray[w].r)*3.14;
}
let percent=(c/(canvas.width*canvas.height))*100;
console.log(percent);
};
}
function getdistance(x1,x2,y1,y2)
    {
        var xdistance=x2-x1;
        var ydistance=y2-y1;
        return Math.sqrt((Math.pow(xdistance,2))+(Math.pow(ydistance,2)));
    }

var color=['#ffaa33','#99ffaa','#00ff00','#4411aa','#ff1100'];
var circleArray=[];
function call()
{
for(var i=0;i<60;++i)
{
var r=(Math.random()*20)+10;
var x=randomIntFromRange(r,canvas.width-r);
var y=randomIntFromRange(r,canvas.height-r);
//var dy=1;
//var dx=1;
if(i!=0)
{
    for(let j=0;j<circleArray.length;++j)
    {
        if(getdistance(x,circleArray[j].x,y,circleArray[j].y)-r*2<0)
        {
            x=randomIntFromRange(r,canvas.width-r);
            y=randomIntFromRange(r,canvas.height-r);
            j=-1;
        }
        
    }
}

circleArray.push(new Circle(x,y,r));

}
}
setInterval(call(),10000);
function animation()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
requestAnimationFrame(animation);
for(let j=0;j<circleArray.length;++j)
{circleArray[j].update();
    
//circleArray.forEach(Circle => {
    //var x=Circle.update(circleArray);
}
//});

}
animation();
}
}