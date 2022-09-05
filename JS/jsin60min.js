//stage 1
//let name = prompt ("Jak masz na imię?");
// console.log("Hello "+ name);


//stage 2 Number
//let a = 1;
//let b = -1;
//let c = 0;
//console.log(1/0);
//console.log(-1/0);
//console.log("czesc"/2);

//stage 3 String
//let name = "Dominik";
//let city = 'Reda';
//let greeting = `Hello ${name}`;
//let sentence = `Doba ma ${12 + 12} godziny`;
//console.log(greeting);
//console.log(sentence);
//let firstletter = "a";

//stage 4 Boolean
//let isProgrammingFun = true;
//let isProgrammingBoring = false;

//stage 5 null
//let name = "Dominik";
//let city = "Reda";
//let addres = null;

//stage 6 undefined
//let name;
//console.log(name);

//stage 7 Objecjt
//let person = new Object();
//person.name = "Dominik";
//person.age = 33;

//let person2 = {
//name: "Marta",
//age: 35
//};

//console.log(person);
//console.log(person2);
//console.log(person.name);
//console.log(person2.age);

//stage 8 Operatory

//operator modulo
//let a = 10;
//let b =5;
//console.log(a % b);
    //let c = 10;
    //let d =3;
    //console.log(c % d);
    //operator przypisania
    //operator inkrementancji i dekrementacji
    //let a = 10;
    //a++;
    //console.log(a);

    //let b = 10;
    //b--;
    //console.log(b);
    //opertaro kontatenacji łączy stringi ze sobą
    //let hello ="Dzień";
    //let hello2 = "dobry";
    //console.log(hello + " " + hello2);

    //stage 9 porównywanie zmiennych

    //let a = 1;
    //let b = 0;
    //let c = 1;

    //console.log(a > b);
    //console.log(a == b);
    //console.log(a != b);
    //console.log(a == c);
    //console.log(b > c);
    //console.log(b >= c);

    //console.log(1 == 1);
    //console.log( "czesc" == "cześć");

    // porównanie liczby ze stringiem
    //console.log(1 == "1");
    //  strict equality
    //console.log(1 === "1");
    //console.log(1 !== "1");

    //stage 10 instrukcje warunkowe - logika w programie

    //let age = prompt("Ile masz lat?");
    // if(age >= 18){
    // console.log("Pamiętaj, by alkohol spożywać z rozsądkiem");
    // }
    // else{
    //  console.log("Przykro nam, ale ta strona zawiera ofertę alkoholi, nie możemy jej wyświetlić");
    // }

    // if(age < 18){
    // console.log("Niestety nie możesz pić alkoholu ani w Polsce ani w USA.");
    //  }
    // else if(age < 21){
    //  console.log("Możesz Już legalnie pić alkohol w Polsce, ale w USA jeszcze nie");
    // }
    // else {
    //  console.log("Możesz pić alkohol i w Polsce i w USA!");
    // }

    //- skrócona wersja if-else

    // age >= 18 ? console.log("Pamiętaj, by alkohol spożywać z rozsądkiem") : console.log("Przykro nam,  <!-- ale ta strona zawiera ofertę alkoholi, nie możemy jej wyświetlić");

    // pętle for i while

    //let password = prompt("Podaj hasło");
    //if(password == '1234'){
    //console.log("Hasło prawidłowe");
    //} else {
    //xxxxx
    //}

    //let password;

    //while (password != '1234') {
    //password = prompt("Jakie jest hasło?");
    //}
    //console.log("Prawidłowe hasło!")

    //pętla do while sprawdzenie warunku raz, rzadko uzywana

    //let password;
    //do {
    //password = prompt("Jakie jest hasło?");
    //} while (password != '1234');
    //console.log("Prawidłowe hasło!");

    //pętla for

// for (let i = 1; i < 11; i++) {
 //console.log(i);
// }

// for (let i = 1; i < 11; i += 2) {
 //console.log(i);
// }
//tak nie praktykujemy:
//let counter;
//for (counter = 1; counter < 11; counter += 2) {
 //console.log(counter);
//}

//instrukcje break i contiunue

    //let i = 1;
//while (i < 11) {
 //console.log(i);
  
 // if (i == 5) break;
 //i++;
//}
//pętla nieskączona
    //let i = 1;
// while (i < 11) {
  // if (i % 2 == 0) continue;
  //console.log(i);
  //i++;
  // }

//let i = 0;
//while (i < 10) {
 //i++;
 // if (i % 2 == 0) continue;
  //console.log(i);
  //}

 //funkcje!!!
    //function hello() {
  //console.log("Hello!");
 //}
    //hello();
//hello();
//hello();
//hello();

//function sum(firstNumber, secondNumber) {
//console.log(firstNumber + secondNumber);
//}
    //sum(1, 3);

//function sum(firstNumber, secondNumber) {
//  return firstNumber + secondNumber;
//}
    //let result = sum(2, 3);
//console.log(result);

//let sum = (firstNumber, secondNumber) => {
//console.log("Dodajemy 2 liczby");
//console.log(firstNumber + secondNumber);
//}
//sum(1, 3);

//let square = a => console.log(a * a);
//square(4);

//let hello = () => console.log("Hello!");
//hello();



//stage 11 Kolekcje danych - tablice, mapy i sety