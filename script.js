var peopleEle = document.body.querySelector(".people");
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
var number = 0
for(var i=0;i<list.length; i++){
     var personEle =document.createElement("div");
  personEle.innerHTML = list[i].name +  ", "  + list[i].age;
  peopleEle.appendChild(personEle);
  if(list[i].age>40){
personEle.style.color = "red";
 }
  }
function add(){
  number = number + 1
  document.body.querySelector(".counter").innerHTML = number
}
document.body.querySelector(".button").addEventListener("click", function(){
  add();
})
document.body.querySelector(".counter").innerHTML = number