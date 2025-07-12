// script.js

// Function to calculate the greatest common divisor (GCD) using the Euclidean Algorithm
function calculateGCD(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  // Function to calculate and display the aspect ratio
  function calculateAspectRatio() {
    // Get the width and height values from the input fields
    const width = parseInt(document.getElementById("width").value, 10);
    const height = parseInt(document.getElementById("height").value, 10);
  
    // Check if inputs are valid numbers
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
      document.getElementById("aspect-ratio").textContent =
        "Aspect Ratio: Invalid input. Please enter positive numbers.";
      return;
    }
  
    // Calculate GCD of width and height
    const gcd = calculateGCD(width, height);
  
    // Simplify width and height using GCD
    const aspectWidth = width / gcd;
    const aspectHeight = height / gcd;
  
    // Display the result
    document.getElementById("aspect-ratio").textContent =
      `Aspect Ratio: ${aspectWidth}:${aspectHeight}`;
  }
  
  // Add an event listener to the button to trigger the calculation
  document.getElementById("calculate").addEventListener("click", calculateAspectRatio);
  