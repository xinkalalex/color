let div = document.getElementById('myDiv');
let i = 0;
div.onclick = function(){
    i++
    if(i%2==1){
        div.style.backgroundColor = 'black'
    }else if(i==2){
        div.style.backgroundColor = 'yellow'
    }else{
        div.style.opacity = '0'
    }
}