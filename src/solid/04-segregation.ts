interface Bird {
    fly(): void;
    eat():void;
    rut(): void;
    swim(): void;

}

class Toucan implements Bird {
    
    public fly(){}
    public eat(){}
    public rut(){}
    public swim(){}

}

class Hummingbird implements Bird {
    public fly(){}
    public eat(){}
    public rut(){}
    public swim(){}

}

class Ostrich implements Bird {
    public fly(){
        throw new Error("Ostrich no vuela")
    } // avestruz no vuela
    public eat(){}
    public rut(){}
    public swim(){}

}

class Penguin implements Bird {
    public fly(){
        throw new Error("Ostrich no vuela")
    } // avestruz no vuela
    public eat(){}
    public rut(){}
    public swim(){}
}