particlesJS('particles-js', {
    "particles": {
       "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
       "color": { "value": "#514455" },
       "shape": { "type": "circle" },
       "opacity": { "value": 0.9, "random": true },
       "size": { "value": 3, "random": true },
       "line_linked": { "enable": true, "distance": 150, "color": "#514455", "opacity": 0.9, "width": 1 },
       "move": { "enable": true, "speed": 10 }
    },
    "interactivity": {
       "detect_on": "canvas",
       "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
       "modes": {
          "repulse": { "distance": 100 },
          "push": { "particles_nb": 4 }
       }
    }
 });


 function subscribe() {
   // Get the name and email values
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   
   // Check if both fields are filled
   if (name && email) {
      // Display the subscription message
      document.getElementById("subscription-message").innerText = "Subscribed!";
      
      // Optional: Clear the input fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
   } else {
      // Prompt the user to fill in both fields
      document.getElementById("subscription-message").innerText = "Please enter both your name and email.";
      document.getElementById("subscription-message").style.color = "#514455";
   }
}

 