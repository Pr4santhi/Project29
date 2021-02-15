const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup()
{
    var canvas = createCanvas(1300,700);
    engine = Engine.create();
    world = engine.world;

    Ground1=new Ground(650,690,1300,50);
    Ground2=new Ground(500,500,300,25);
    Ground3=new Ground(1000,200,200,25);

    //level 1
    Block1=new Block(380,325,30,40);
    Block2=new Block(410,325,30,40);
    Block3=new Block(440,325,30,40);
    Block4=new Block(470,325,30,40);
    Block5=new Block(500,325,30,40);
    Block6=new Block(530,325,30,40);
    Block7=new Block(560,325,30,40);
    Block8=new Block(590,325,30,40);
    Block9=new Block(620,325,30,40);
    //level 2
    Block10=new Block(400,295,30,40);
    Block11=new Block(420,295,30,40);
    Block12=new Block(440,295,30,40);
    Block13=new Block(460,295,30,40);
    //level 3
    Block14=new Block(480,265,30,40);
    Block15=new Block(500,265,30,40);
    //level 1
    Block16=new Block(520,235,30,40);

    //Smaller Tower
    Block17=new Block();

}

function draw(){
    background(0);
    Engine.update(engine);
    Ground1.display();
    Ground2.display();
    Ground3.display();
    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    Block8.display();
    Block9.display();
    Block10.display();
    Block11.display();
    Block12.display();
    Block13.display();
    Block14.display();
    Block15.display();
    Block16.display();

}