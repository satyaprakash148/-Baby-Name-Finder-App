function area(r){
    return (22/7)*r*r;
}
console.log(area(3))
function cirm(r){
    return (22/7)*2*r;
}
console.log(cirm(3))

let Dia = (a)=>{
    return 2*a;
}
console.log(Dia(4));

let diaa= w=> 2*w;
console.log(diaa(4));
 // when we pass entire as an argument inside another function is know as hof


 //when an outer is return a complete inner function is known as 


function a(){
    console.log("ddik");
}

function b(d){
    console.log("ddk");
    d();//callback function
}
b(a)


function outer()//hof 
{
    let count =0;
    function inner(){
        count++;
        console.log(count);
        
    }
    return inner;
}
let r = outer();
r()
r()
r()
r()
r()
let f = outer();
f()
f()
f()
f()
f()

 


// let radii=[1,2,3,4,5,6];
//     area=[3.14,,,,,];
//     vol = [, , , , ,]
//     cirm =[6.28 , , , , ,];

//     function area(r){
//         return (22/7)*r*r;
//     }
     
//     function cirm(r){
//         return (22/7)*2*r;
//     }
     
//     let Dia = (a)=>{
//         return 2*a;
//     }
// function cal(logic){
//     let r1 =[];
//     for(let i =0; i<radii.length;i++){
//         r1.push()
//     }
// }

