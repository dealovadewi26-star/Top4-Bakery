<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

$(document).ready(function(){

  // 1. Click/Submit Event
  $("#contactForm").on("submit", function(e){
    e.preventDefault(); // stop actual submission for now


    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let topic = $("#topic").val().trim();
    let message = $("#message").val().trim();


    if(name === "" || email === "" || message === ""){
      alert("All fields are required!");
      return false;
    }


    let atIndex = email.indexOf("@");
    let dotIndex = email.lastIndexOf(".");    
    if(atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >=email.length){
      alert("Invalid email format!");
      return false;
    }


    alert("Thank you, " + name + "! Your message has been sent.");
  });


  // 2. Change Event (for dropdown)
  $("#topic").on("change", function(){
    let selectedTopic = $(this).val();
    if(selectedTopic !== ""){
      alert("You selected: " + selectedTopic);
    }
  });


  // 3. Mousemove Event → subtle effect on form
  $("#contactForm").on("mousemove", function(){
    $(this).css("border", "2px solid #ffcc00");
  })


  // 4. Keypress Event → typing indicator in message box
  $("#message").on("keypress", function(){
    $("#typingStatus").text("You are typing...");
  });


  // 5. Focus Event → highlight email field
    $("#email").on("focus", function(){
      $(this).css("background-color", "lightyellow");
    });


 


});
