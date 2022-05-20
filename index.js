// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius *2;
    }
    get circumference(){
        return Math.PI * this.diameter;
    }
    get area(){
        return Math.PI * Math.pow(this.radius, 2);

    }
    set diameter(newD){
        this.radius =  newD/2;
    }
    set circumference(newCir){
    
            this.radius = newCir / (2*(Math.PI))

    }
    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI)

    }
}

