// Test 2
for (var i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
        document.write('OpenSource, ')
    } else if (i % 3 === 0) {
        document.write('Open, ')
    } else if (i % 7 === 0) {
        document.write('Source, ')
    } else {
        document.write(i, ", ");
    }
}


//Test 3
var container = document.querySelector("div.container");

var length = container.children.length;

for(var index = 0; index < length; index++){
    console.log(container.children[index].innerText);
}



//Test 4
var arr = [1, 1.2, 1.3, 4, 5, 1.6, 'hello'];
var result = arr.reduce(function (sum, elem) {
    if ((elem ^ 0) === elem) {
        return sum + elem;
    } else {
        return sum;
    }
});
console.log(result);


//Test 5
fetch('https://jsonplaceholder.typicode.com/posts') 
.then(function (response) { 
return response.json() 
}) 
.then(function (data) { 
console.log('data', data.filter(element=> element.id === 5)) 
})


//Test 6
var regExp = /^(?=.*\bSofteq\b)(?=.*#\brules\b).+/;
if (regExp.test("Soft4eq google rules purple #rules google purple 'Softeq' google" )) {
    alert("Right!")
} else {
    alert("Wrong!")
}

//Test 7
var startLetter = 65;
var endLetter = 91;
function newArr (){
    for(var index = startLetter; index < endLetter; index++){
        console.log(String.fromCharCode(index));
    }  
}
newArr();