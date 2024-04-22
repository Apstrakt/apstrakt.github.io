// One row Comment
/*
    Multiline Comment
*/

/*
    CamelCase
        divTest1
        divTest2
        paraColor

    -
        div_test_1
            div test 1
        div_test_2
        para_color

    "test" is not the same as "Test"
*/


// Variables ehk muutujad

var x ="1";  // vanem versioon
let y = "2"; // uuem versioon var'st, aga muidu sama
const pi = "3.14";  // Constant 


/*
int - integer (täisarv) 32bit - MAX 2,147,483,647 MIN -2,147,483,647
long - integer (täisarv) 64bit - MAX 9,223,372,036,854,775,807
string - tekst(tähed)
boolean - jah/ei(true/false)
float - number with decimal ehk arv komaga/punktiga 32bit MAX 
double - number with decimal ehk arv komaga/punktiga 64bit
*/

//let xxxx = yyyy; x == custom text ehk muutuja nimetus. y == value ehk väärtus
let number1 = 1; //type INT
let word = "1"; //type STRING
let bool = true; //type BOOLEAN - TRUE / FALSE  ehk 1bit
let number =  1.11; //type double

console.log("TEST"); //Print text into Console

let customerName = "juku";
customerAge = 19
console.log(customerName);
console.log(customerName);
console.log(customerName);

customerName = "Jim";
console.log(customerName);
console.log(customerName);
console.log(customerName);


/*
    1 + 1 = 2
*/

console.log(1 + 1);
console.log("1" + "1");
console.log("1 + 1 = " + 1 + 1); //sulgudeta 1 + 1 teiendatakse tekstiks
// () * / + -
console.log("1 + 1 = " + (1 + 1)); //kõige pealt arvutatakse sulgudes number ära siis teisendatakse see alles tekstiks
console.log("We have customer " + customerName + " and his age is " + customerAge);

let studentName = "Mari";
let studentMathGrade = 5;
let studentLangGrade = 4;
let studentPEGrade = 3;

console.log("Student " + studentName + " GPA is " + ((studentLangGrade + studentMathGrade + studentPEGrade) / 3));

 console.log("PI value: " + pi);
//pi = 3.15; - error
studentName2 ="juku1"
studentName3 ="juku2"
console.log(studentName2);
console.log(studentName3);

// Array / List - massiiv
/* 
    Array = fixed length
    List  = dynamix length
*/
 //Arrat starts with 0
    let students = ["Peep", "Taavi", "Tiina", "Vilma"];
    console.log(students);
    students.push("Triin");
    console.log(students);
    console.log(students[2]); //Index
    students.splice(2, 1);
    console.log(students);
    let taaviPos = students.indexOf("Taavi");
    console.log(taaviPos);

//JSON - JavaScript Object Notation

    

    let student1Obj = {
        "Name": "Peep",
        "Age" : 17,
        "City": "Tallinn",
        "IsStudent": true
    };

     let student2Obj = {
        "Name": "Mari",
        "Age" : 16,
        "City": "Viljandi",
        "IsStudent": false
    };

    console.log(student1Obj);
    console.log(student1Obj.Name + ", " + student1Obj.Age);
    console.log(student1Obj.Age);

    console.log("Your students are: " + students.join(", "));

    let juku ="Juku";

    console.log(juku.toLowerCase());
    console.log(juku.toUpperCase());
  
  
    // IF sentence ehk if laused
   /*
        boolean - true / false ehk 1 / 0

        Kas juku on sama mis Juku
            0 ehk false

        Kas EI ole !
            võrdne !=
        Kas on võrdne ==
         või suurem =>
         või väiksem =<

        Kas on suurem >
        Kas on väiksem <

        Kas õpilane1 on Juku JA kas õpilane1 elab Tartus?
        Kas õpilane1 on Juku VÕI õpilane1 elab Tartus?

        OR
        00 - 0
        01 - 1
        10 - 1
        11 - 1

        AND
        00 - 0
        01 - 1
        10 - 1
        11 - 1

        || = OR
        && = AND

        OR  00001110111010111 - 1
        AND 00001110111010111 - 0
        (0 || 1) && (1 || 1) || (0 && 0) - 
        1 && 1 || 0
        1 || 0 - 1

        (0 || 0) && (1 || 1) || (0 && 0) - 
        0 && 1 || 0
        1 || 0 - 0
   */




    if(juku.toLowerCase == "Juku") { // TRUE
        console.log("Jah jukud on võrdsed.");
    }   else { //FALSE
            console.log("Ei leidnud sellist Juku");
    }



    if(juku.toLowerCase != "Juku") { // TRUE
            console.log("Ei leidnud sellist Jukut");
    }   else { //FALSE
            console.log("Jah jukud on võrdsed.");
            
    }


    let student3Obj = {
        "Name": "Juku",
        "Age" : 17,
        "City": "Tallinn",
        "IsStudent": true
    };


    if(student3Obj.Name == "Juku" || studentObj.City =="Tartu") {
            console.log("Jah");
    }
        else {
            console.log("Ei");
    }


    let cars = ["BMW", "Audi", "Toyota"];
    console.log(cars);
    
    
    x = 0;
    console.log("X: " + x);
    x = x + 1;
    console.log("X: " + x);
    x += 1;
    console.log("X: " + x);
    x++;
    console.log("X: " + x);
    console.log("X: " + x++);
    console.log("X: " + x);
    console.log("X: " + ++x);
    console.log("X: " + x);
    console.log("-------------");
    
    // FOR / WHILE tsükkel
    // i => iteration
    // i < 10, kui kaua see iteratsioon kestab, nii kaua kuni vastus on TRUE
    // i++ suurendame iteratsiooni 1 võrra
    for(let i = 0; i < 10; i++) {
        if(i ==5) {
            continue;
        }
        console.log("I " + i);
    }

     for(let i = 0; i < cars.length; i++) {
        console.log("Car name " + cars[i]);
    }

    console.log("---------------------");
    
    let a = 0;
    while(a < 10) {
        console.log("A: " + a);
        a++;
    }
    
    console.log("---------------------");
    
    let b = 0;
    while(true) {
        console.log("B: " + b);
        b++;
        if(b > 10) {
                break;
        }
    }

    //Kodune
    /*
        Teha JSON kus on auto andmed. Mark, aasta, hind, värv, kas ostetud. 
        Min 5 erinevat autot.
        Teha FOR ning tuua välja kõik ühel real kasutades console.log()
        **Lisa kui on aega**
            Kuvada ainult need, mis ei ole ostetud. (8 autot)
        
    */


    
        