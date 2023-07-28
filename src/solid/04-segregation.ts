interface Bird {
    eat():void;

}

interface FlyigBird{
    fly(): void;
}

interface RunningBird{
    rut(): void;
}

interface SwimmerBird{
    swim(): void;
}

class Toucan implements Bird, FlyigBird {
    public fly(){}
    public eat(){}
}

class Hummingbird implements Bird, FlyigBird {
    public fly(){}
    public eat(){}
}

class Ostrich implements Bird, RunningBird{
    public eat(){}
    public rut(){}
}

class Penguin implements Bird, SwimmerBird {
    public eat(){}
    public swim(){}
}