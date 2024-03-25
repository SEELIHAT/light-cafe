function toggleRedClass(element) {
    let opaElement = document.querySelector('.twoaside');
     element.classList.toggle('red');
     opaElement.style.opacity = "1";
 }
 
 function changeOpacity() {
             var opaElement = document.querySelector(".twoaside");
             if (opaElement) {
                 opaElement.style.opacity = "0";
             }
         }
 
         function addToMessageAndSend(event) {
     event.preventDefault();
     var redButtons = document.querySelectorAll('.red');
     var textarea = document.getElementById('addressPhone');
     var email = 'hayatihan70@gmail.com';
     // Check if red buttons are selected
     if (redButtons.length > 0) {
         redButtons.forEach(function (redButton) {
             var buttonText = redButton.textContent.trim();
             textarea.value += '\n'  + buttonText ;
         });
 
         // Create a mailto link to open the user's default email client
         var emailLink = 'mailto:' + email + '?subject=Order&body=' + encodeURIComponent(textarea.value);
 
         // Open the email client
         window.location.href = emailLink;
 
         // Clear the textarea after sending
         textarea.value = '';
         textarea.value += '\nWe will call you.If want again order refresh page';
         textarea.style.color = 'red';
         
         textarea.style.textAlign = 'center';
         // Display a thank you message
         
     } else {
         // If no red buttons are selected, show an alert
         alert('Please select at least one item before sending the order.');
     }
 }


 let holliday = prompt('Sorry we are don,t work this and next mounth','ok');
 if ('Ok' == holliday){alert('Thank you BOSS');}








