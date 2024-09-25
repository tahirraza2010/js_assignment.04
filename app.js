// Chapter 15 (Array I)
// Q1
// var arr =[]

// Q2
// var array =["Tahir"]

// Q3
// var alphabet = ["h","i","j","k"]
// alert(alphabet[2])

// Q4
// var alphabet=["h","i","j","k", "l","m", "n", "o"]
// console.log(alphabet)

// Q5
// var value = ["Mohammad"]
// value.push("Tahir")
// alert(value[1])


// Chapter 16 (Array II)
// Q1
// var value = ["Mohammad"]
// value.push("Tahir")
// alert(value[1])

// Q2
// var Alphabet=["h","i","j","k"]
// Alphabet.pop()
// alert(Alphabet)

// Q3
// var Alphabet=["h","i","j","k"]
// Alphabet.push("l",1,2,3)
// alert(Alphabet)

// Chapter 16 (Array III)
// Q1
// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// sizes.shift()
// alert(sizes)

// Q2
// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// sizes.unshift(1,2,3,4,5)
// alert(sizes)

// Q3
// var value = ["Mohammad"]
// value.push("Tahir")
// alert(value[1])

// Q4
// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// sizes.splice(2,0,"L")
// alert(sizes)

// Q5
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3);
// console.log(regSizes);

// Q6
// var pets = ["dog", "cat", "ox", "duck", "frog"]
// pets.splice(1,3,"cow","loin")
// alert(pets)

// Q7
// var pets = ["dog", "cat", "ox", "duck", "frog"]
// pets.splice(1,2)
// alert(pets)

// Q8
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var reducedPets = pets.slice(3, 5);
// console.log(reducedPets);

    // chapter (ARRAYS)
// Q1
// var emptyArr=[]
// emptyArr.push("Tahir","Yameen","Umer","Sami")
// console.log(emptyArr)

// Q2
// var emptyArr=[]
// emptyArr.push("Tahir","Yameen","Umer","Sami")
// console.log(emptyArr)


// Q3
// var stringArr =["Tahir","Yameen","Umer","Sami"]
// console.log(stringArr);

// Q4
// var numArr =[1,2,3,4]
// console.log(numArr);

// Q5
// var booleanArr =[true,false]
// console.log(booleanArr);

// Q6
// var mixedArr =["Tahir",1,true,2.5]
// console.log(mixedArr);

// Q7
// var qualification=["e.g", "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"]
// document.write(qualification)

// Q8
// var student=["Michael","John","Tony"];
// var Name = prompt("Enter your name");
// var input1 = prompt("Enter your obtaine");
// var input2 = 500;
// var persentage = input1/input2 *100;
// if(Name===student[0]){
//     document.write("Score of"+" "+student[0]+"is"+input1+"percentages"+" "+persentage+"%");
// }
// else if(Name===student[1]){
//     document.write("Score of"+" "+student[1]+"is"+input1+"percentages"+" "+persentage+"%");
// }
// else if(Name===student[2]){
//     document.write("Score of"+" "+student[2]+"is"+input1+"percentages"+" "+persentage+"%");
// }
// else{
//     document.write("No record found");
// }

// Q9

// var color = ["green","yellow","red","orange","white"];
// document.write(color);
// a
// var color = ["green","yellow","red","orange","white"];
// color.unshift("blue")
// document.write(color[0]);
// b
// var color = ["green","yellow","red","orange","white"];
// color.push("Skyblue");
// document.write(color[5]);
// c
// var color = ["green","yellow","red","orange","white"];
// color.unshift("blue","skyblue","pink");
// document.write(color[0]);
// d
// var color = ["green","yellow","red","orange","white"];
// color.shift();
// document.write(color);
// e
// var color = ["green","yellow","red","orange","white"];
// color.pop();
// document.write(color);
// f
// var color=prompt("Enter your color name you want")
// var colorArray=["green","yellow","red","orange","white",color]
// console.log(colorArray);
// g
// var updateed2tarr =[ "red","blue","green","orange","white"]
// var tagetvalue = prompt("Enter the Target value" )
// var Deletevalue = prompt("Enter the Delete value" )
// updateed2tarr.splice(tagetvalue,Deletevalue)
// console.log(updateed2tarr)

// Q11
var cities =["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write(`Cities List <br> ${cities} <br>`)
var SelectedCities =  cities.slice(2,4)
document.write(`Selected Cites List <br> ${SelectedCities}`)


// Q12
// var arr = ["This" ,  "is" ,  "my" ,  "cat"];
// console.log(arr.join(" "))

// Q13
// var arr =["keyboard","mouse","printer","moniter"]
// document.write(`${arr[0]}<br> ${arr[1]}<br> ${arr[2]}<br> ${arr[3]} `)

// Q14
// var arr =["keyboard","mouse","printer","moniter"]
// document.write(`${arr[3]}<br> ${arr[2]}<br> ${arr[1]}<br> ${arr[0]} `)


// Q15
// var Question15 = ["Apple","Samsung","Motorola","One plus","Oppo"]
// document.write(
   
//     "<select>"
//  + "<option>"+Question15[0]+"</option>"
//  + "<option>"+Question15[1]+"</option>"
//  + "<option>"+Question15[2]+"</option>"
//  + "<option>"+Question15[3]+"</option>"
//  + "<option>"+Question15[4]+"</option>"
//  + 
   
 
//  "</slecte>")