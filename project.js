const body = document.body
const container = document.getElementById("container")
const input = document.querySelector("input")
const btn = document.querySelector("button")
const filmName = document.querySelector("h1")
const cards = container.getElementsByClassName("cards")



btn.addEventListener("click", function(e){
    console.log(input.value)
    console.log(document.getElementById(input.value.toLowerCase()))


    if (input.value===''){
        alert("You must input something")
    }else{
        for(var i = 0; i < cards.length; i++){
            var a = cards[i];
            a.style.display = 'none';
            document.getElementById(input.value.toLowerCase()).style.display = 'block';
    }
    
}
input.value = '';
}
)
function stringRegex(param){
    const pattern = /^[a-zA-Z]+$/; /*Testing whether is is a string, because type text, it will always be a string*/
    return param.test(pattern)
}









/* Guidelines

2. name is correct, hide all the other cards
3. register the 
4. check if name is a string

*/


