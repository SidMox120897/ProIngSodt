//Inicializamos valores
double pitch=66.00;
double modulo=0.0;
double nota=0.0;
double delayVar=0;

//Se crea el teclado
//Cada While representa una nota
//delay crea un alargamiento de la nota
void teclado(float notaPrincipal){
  while(digitalRead(9)){
    tone(A1,notaPrincipal*pow(2.0,0.0/12.0),44000);
    delay(delayVar*500);
  }
  while(digitalRead(8)){
    tone(A1,notaPrincipal*pow(2.0,2.0/12.0),44000);
    delay(delayVar*500);
  }
  while(digitalRead(7)){
    tone(A1,notaPrincipal*pow(2.0,4.0/12.0),44000);
    delay(delayVar*500);
  }
  while(digitalRead(6)){
    tone(A1,notaPrincipal*pow(2.0,5.0/12.0),44000);
    delay(delayVar*500);
  }
  while(digitalRead(5)){
    tone(A1,notaPrincipal*pow(2.0,7.0/12.0),44000);
    delay(delayVar*500);
  }
  while(digitalRead(4)){
    tone(A1,notaPrincipal*pow(2.0,9.0/12.0),44000);
    delay(delayVar*500);
  }
  while(digitalRead(3)){
    tone(A1,notaPrincipal*pow(2.0,11.0/12.0),44000);
    delay(delayVar*500);
  }
  while(digitalRead(2)){
    tone(A1,notaPrincipal*pow(2.0,12.0/12.0),44000);
    delay(delayVar*500);
  }
  noTone(A1);
}

//Se inician los pin a utilizar
void setup()
{
  Serial.begin(9600);
  pinMode(A1,OUTPUT);
  pinMode(9,INPUT);
  pinMode(8,INPUT);
  pinMode(7,INPUT);
  pinMode(6,INPUT);
  pinMode(5,INPUT);
  pinMode(4,INPUT);
  pinMode(3,INPUT);
  pinMode(2,INPUT);
}

//Se crea el loop
void loop()
{
  //Que tonalidad se encuentra
  modulo=(analogRead(A0)+128)*1/256;
  //Serial.println(modulo);
  //Se inicia nota base
  nota=pitch*modulo;
  //Se inicia el delay
  //cuanto va seguir sonando la noda
  //despues de haber sido pulsada
  delayVar=(analogRead(A2)+128)*1/256;
  //Serial.println(delayVar);
  //Se carga el teclado
  teclado(nota);  
}