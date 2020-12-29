
var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var box3 = document.getElementById('box3')



function dragAlert(i){

    if(i=='1'){
        box2.style.left = event.screenX+'px'
        box1.style.right = window.innerWidth - event.screenX+'px'
    }

    if(i=='2'){
        box2.style.right = window.innerWidth - event.screenX+'px'
        box3.style.left = event.screenX+'px'
    }
}


