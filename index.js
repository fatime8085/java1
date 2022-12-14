
function changestyle(){
    var height = document.getElementById('height').value
    var width = document.getElementById('width').value
    var color = document.getElementById('color').value
    var position = document.getElementById('position').value
    var top = document.getElementById('top').value
    var left = document.getElementById('left').value
    var transition = document.getElementById('transition').value
    var border = document.getElementById('border').value
    var borderColor = document.getElementById('bordercolor').value
    document.getElementById('esas').style.borderWidth = border
    document.getElementById('esas').style.borderColor = borderColor
    document.getElementById('esas').style.transition = transition
    document.getElementById('esas').style.left = left
    document.getElementById('esas').style.top= top 
    document.getElementById('esas').style.width = width
    document.getElementById('esas').style.position = position
    document.getElementById('esas').style.height = height
    document.getElementById('esas').style.background = color
}