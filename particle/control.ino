int bubbleHandler(String control){
    if(control == "on"){
        digitalWrite(D0, LOW);
    }

    if(control == "off"){
        digitalWrite(D0, HIGH);
    }
}

void setup(){
    pinMode(D0, OUTPUT);
    digitalWrite(D0, HIGH);

    Particle.function("bubble", bubbleHandler);
}
