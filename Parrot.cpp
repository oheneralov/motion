#include <Servo.h>

class Parrot {
public:
    Servo* servo1;
    Servo* servo2;
    Servo* servo3;
    int servoPin1;
    int servoPin2;
    int servoPin3;

public:
    Parrot(int pin1, int pin2, int pin3)
    {
        this->servoPin1 = pin1;
        this->servoPin2 = pin2;
        //head
        this->servoPin3 = pin3;
        this->servo1 = new Servo();
        this->servo2 = new Servo();
        this->servo3 = new Servo();
        this->servo1->attach(servoPin1);
        this->servo2->attach(servoPin2);
        this->servo3->attach(servoPin3);
    }

public:
    void raiseLeftLeg()
    {
        // scan from 0 to 180 degrees
        for (int angle = 90; angle < 90 + 30; angle++) {
            this->servo1->write(angle);
            delay(20);
        }
    }

    void lowerLeftLeg()
    {
        // now scan back from 180 to 0 degrees
        for (int angle = 90 + 30; angle > 90; angle--) {
            this->servo1->write(angle);
            delay(20);
        }
    }

    void raiseRightLeg()
    {
        // scan from 0 to 180 degrees
        for (int angle = 90; angle < 90 + 30; angle++) {
            this->servo2->write(angle);
            delay(20);
        }
    }

    void lowerRightLeg()
    {
        // now scan back from 180 to 0 degrees
        for (int angle = 90 + 30; angle > 90; angle--) {
            this->servo2->write(angle);
            delay(20);
        }
    }

    void lowerHead()
    {
        // now scan back from 180 to 0 degrees
        for (int angle = 90; angle > 60; angle--) {
            this->servo3->write(angle);
            delay(20);
        }
    }

    void raiseHead()
    {
        // now scan back from 180 to 0 degrees
        for (int angle = 60; angle < 90; angle++) {
            this->servo3->write(angle);
            delay(20);
        }
    }

    int doStepForward()
    {
        this->raiseLeftLeg();
        //lean head
        this->lowerHead();
        delay(300);
        this->lowerLeftLeg();
        this->raiseHead();
    }

public:
    unsigned long getDistancetoObject()
    {
        unsigned long echo = 0;
        int ultraSoundSignal = 9; // Ultrasound signal pin
        unsigned long ultrasoundValue = 0;
        pinMode(ultraSoundSignal, OUTPUT); // Switch signalpin to output
        digitalWrite(ultraSoundSignal, LOW); // Send low pulse
        delayMicroseconds(2); // Wait for 2 microseconds
        digitalWrite(ultraSoundSignal, HIGH); // Send high pulse
        delayMicroseconds(5); // Wait for 5 microseconds
        digitalWrite(ultraSoundSignal, LOW); // Holdoff
        pinMode(ultraSoundSignal, INPUT); // Switch signalpin to input
        digitalWrite(ultraSoundSignal, HIGH); // Turn on pullup resistor
        // please note that pulseIn has a 1sec timeout, which may
        // not be desirable. Depending on your sensor specs, you
        // can likely bound the time like this -- marcmerlin
        // echo = pulseIn(ultraSoundSignal, HIGH, 38000)
        echo = pulseIn(ultraSoundSignal, HIGH); //Listen for echo
        ultrasoundValue = (echo / 58.138); //convert to CM then to inches
        return ultrasoundValue;
    }
};

Parrot* parrot1;

void setup()
{
    parrot1 = new Parrot(10, 11, 12);
}

void loop()
{

    parrot1->doStepForward();
    int x = 0;
    x = parrot1->getDistancetoObject();
    Serial.println(x);
    delay(250); //delay 1/4 seconds.
}
