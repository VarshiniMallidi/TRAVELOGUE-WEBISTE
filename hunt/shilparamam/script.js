document.addEventListener("DOMContentLoaded", function () {
    let currentClueIndex = 0;
    const clues = document.querySelectorAll(".clue-box");  
    const feedback1 = document.getElementById("feedback1");
    const feedback2 = document.getElementById("feedback2");
    const feedback3 = document.getElementById("feedback3");
    const uploadPopup = document.getElementById("imageUploadPopup");
    const suggestionPopup = document.getElementById("suggestionPopup");
    const nextLocationPopup = document.getElementById("nextLocation");
  
    clues[currentClueIndex].classList.add("visible");
  
    document.getElementById("submit1").addEventListener("click", function () {
      const answer1 = document.getElementById("answer1").value.toLowerCase().trim();
      
      if (answer1 === "sulpture of tribal women") { 
        feedback1.textContent = "Correct! Upload a picture from the location.";
        clues[currentClueIndex].classList.add("fade-out");
        setTimeout(() => {
          clues[currentClueIndex].classList.remove("visible");
          uploadPopup.classList.remove("hidden"); 
        }, 1000);
      } else {
        feedback1.textContent = "Incorrect! Try again.";
      }
    });
  
    document.getElementById("uploadImage").addEventListener("click", function () {
      const fileInput = document.getElementById("imageUpload");
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
     
        document.getElementById("uploadFeedback").textContent = "Image uploaded successfully!";
        uploadPopup.classList.add("hidden"); 
        const suggestionList = document.getElementById("suggestionList");
      suggestionList.innerHTML = ""; 
    
      let suggestions = [];
  
      if (currentClueIndex === 0) {
      
        suggestions = [
          "Try visiting the nearby historical site.",
          "Check out the local handicraft shops and avail 10% discount.",
          "Explore the museum's hidden corners."
        ];
      } else if (currentClueIndex === 1) {
        
        suggestions = [
          "Don't miss the handloom and textile stalls nearby and avail 5% discount.",
          "Look for traditional art displays.",
          "Grab a souvenir from the local shops."
        ];
      } else if (currentClueIndex === 2) {
        
        suggestions = [
          "Take a free boat ride around the lake.",
          "Enjoy the peaceful surroundings near the water.",
          "Look out for hidden artifacts by the water."
        ];
      }
  
      suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement("li");
        suggestionItem.textContent = suggestion;
        suggestionList.appendChild(suggestionItem);
      });
  
      suggestionPopup.classList.remove("hidden"); 
    } else {
      document.getElementById("uploadFeedback").textContent = "Please upload an image.";
    }
  });
   
    document.getElementById("nextClue").addEventListener("click", function () {
      suggestionPopup.classList.add("hidden"); 
      currentClueIndex++; 
     
      if (currentClueIndex < clues.length) {
        clues[currentClueIndex].classList.add("visible");
      } else {
     
        nextLocationPopup.classList.remove("hidden");
      }
    });
  
    document.getElementById("submit2").addEventListener("click", function () {
      const answer2 = document.getElementById("answer2").value.toLowerCase().trim();
      
      if (answer2 === "handloom and textile section") { 
        feedback2.textContent = "Correct! Upload a picture from the location.";
        clues[currentClueIndex].classList.add("fade-out");
        setTimeout(() => {
          clues[currentClueIndex].classList.remove("visible");
          uploadPopup.classList.remove("hidden"); 
        }, 1000);
      } else {
        feedback2.textContent = "Incorrect! Try again.";
      }
    });
  
    document.getElementById("submit3").addEventListener("click", function () {
      const answer3 = document.getElementById("answer3").value.toLowerCase().trim();
      
      if (answer3 === "boating area") { 
        feedback3.textContent = "Correct! Upload a picture from the location.";
        clues[currentClueIndex].classList.add("fade-out");
        setTimeout(() => {
          clues[currentClueIndex].classList.remove("visible");
          uploadPopup.classList.remove("hidden");  
        }, 1000);
      } else {
        feedback3.textContent = "Incorrect! Try again.";
      }
    });
  
    document.getElementById("nextLocationBtn").addEventListener("click", function () {
      window.location.href = "/hunt/feedback/feedback.html"; 
    });
  
    const showHint = (hintId) => {
      document.getElementById(hintId).classList.toggle("visible");
    };
  
    document.getElementById("freeHint1").addEventListener("click", function () {
      showHint("hintText1");
    });
  
    document.getElementById("paidHint1").addEventListener("click", function () {
      if (document.getElementById("paymentCompleted").checked) {
        showHint("hintText1");
      } else {
        alert("Please complete payment to access this hint.");
      }
    });
  
    document.getElementById("freeHint2").addEventListener("click", function () {
      showHint("hintText2");
    });
  
    document.getElementById("paidHint2").addEventListener("click", function () {
      if (document.getElementById("paymentCompleted").checked) {
        showHint("hintText2");
      } else {
        alert("Please complete payment to access this hint.");
      }
    });
  
    document.getElementById("freeHint3").addEventListener("click", function () {
      showHint("hintText3");
    });
  
    document.getElementById("paidHint3").addEventListener("click", function () {
      if (document.getElementById("paymentCompleted").checked) {
        showHint("hintText3");
      } else {
        alert("Please complete payment to access this hint.");
      }
    });
  });