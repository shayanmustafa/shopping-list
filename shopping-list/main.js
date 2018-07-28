var oList = document.querySelector('ol');
var inputRef = document.querySelector('input');
var button = document.querySelector('button');
        
button.onclick = function() {
var myItem = inputRef.value;
inputRef.value = '';

var listElement = document.createElement('li');
var spanElement = document.createElement('span');
var buttonElement = document.createElement('button');

listElement.appendChild(spanElement);
spanElement.textContent = myItem;
listElement.appendChild(buttonElement);
buttonElement.textContent = 'Delete';
oList.appendChild(listElement);

buttonElement.onclick = function(e) {
    oList.removeChild(listElement);
}
		
    inputRef.focus();            
}
