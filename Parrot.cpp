#include <Servo.h> 

class Parrot
{
   public:
       Servo* servo1;
       Servo* servo2;
       Servo* servo3;
       int servoPin1;
       int servoPin2;
       int servoPin3;
  
  public:
  void raiseLeg(){
      // scan from 0 to 180 degrees
      for(int angle = 90; angle < 90 + 30; angle++)  
      {                                  
          this->servo1->write(angle); 
          delay(20);                   
       }
  }
  
  void lowerLeg(){
   // now scan back from 180 to 0 degrees
  for(int angle = 90 + 30; angle > 90; angle--)    
  {                                
    this->servo1->write(angle); 
    delay(20);       
  } 
  }
  
  void lowerHead(){
   // now scan back from 180 to 0 degrees
  for(int angle = 90; angle > 60; angle--)    
  {                                
    this->servo3->write(angle); 
    delay(20);       
  } 
  }
  
  void raiseHead(){
   // now scan back from 180 to 0 degrees
  for(int angle = 60; angle < 90; angle++)    
  {                                
    this->servo3->write(angle); 
    delay(20);       
  } 
  }
  
  
  int doStepForward(){ 
  this->raiseLeg();
  //lean head
  this->lowerHead();
  delay(300);
  this->lowerLeg();
  this->raiseHead();
    
  }
       
  public:
  Parrot(int pin1, int pin2, int pin3){
    this->servoPin1 = pin1;
    this->servoPin2 = pin2;
    //head
    this->servoPin3 = pin3;
    this->servo1 = new Servo();
    this->servo2 = new Servo();
    this->servo3 = new Servo();
    this->servo1->attach(servoPin1); 
    //this->servo2->attach(servoPin2);
   this->servo3->attach(servoPin3);

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
}
