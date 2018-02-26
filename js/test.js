
(function() {

// sets variable input to email
var input = document.getElementById('Email');
// sets variable form 
var form  = document.getElementById('form');
/*Here we created a new div element. 
We gave it an id of notify, 
and hid it by setting the display property to "none".
 Lastly, we appended the new div within the form.*/

var elem = document.createElement('div');
    elem.id = 'notify';
	elem.style.display= 'none';
	form.appendChild(elem);
/* the invalid event which calls when the value of the input does not match the pattern.
We’ll run the following within the invalid event:*/
input.addEventListener('invalid', function(event){
      event.preventDefault();
	  if( ! event.target.validity.valid){
	     elem.textContent = 'We only support gmail, yahoo, hotmail only....';
		 elem.className = 'error';
		 elem.style.display = 'block';
		 
		 input.className = 'invalid animated shake';
		 }
		});
/*Herein, with event.preventDefault();, we prevent the default behavior so that the default browser popup message does not appear. Instead, we are going to show our own through the new div element. We add the text message within the content, add a new class, error and show the message by setting the display to block.
We also add a class, invalid, to the input element, giving it a red border color.
We also need to set the style rule in the CSS stylesheet.*/
input.addEventListener('input', function(event){
    if ( 'block' === elem.style.display ) {
        input.className = '';
        elem.style.display = 'none';
    }
});

})();