const images = ['staics/f1.jpg', 'staics/f2.jpg','staics/f3.jpg',
'staics/f4.jpg','staics/f5.jpg' ,'staics/f6.jpg']; // Add your image URLs here
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('slider').src = images[currentIndex];
}

// function changeBorder() {
//   const borders = ['2px dashed red', '3px dotted blue', '4px double green']; // Different border styles
//   const currentBorder = borders[currentIndex % borders.length];
//   document.getElementById('slider').style.border = currentBorder;
// }

setInterval(() => {
  changeImage();
  changeBorder();
}, 10000);

  // Open the modal
    function openModal(imageUrl) {
      var modal = document.getElementById("myModal");
      var modalImg = document.getElementById("modalImage");
      modal.style.display = "block";
      modalImg.src = imageUrl;
    }

    // Close the modal
    function closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }

// Constants for success and error URLs (replace with actual URLs)
const SUCCESS_URL = 'http://127.0.0.1:5500/pay/success'; // Update with your frontend success URL
const ERROR_URL = 'http://127.0.0.1:5500/pay/error'; // Update with your frontend error URL
const SERVER_HOME_URL = 'http://localhost:9090'; // Update with your server home page URL
     

 // Function to handle "Book Online" button click
 document.getElementById('bookOnlineBtn').addEventListener('click', function() {
    // Send a POST request to the backend to initiate payment
    fetch('http://localhost:9090/pay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            price: 1000, // Example price (adjust as needed)
            currency: 'USD', // Example currency (adjust as needed)
            method: 'paypal', // Example payment method
            intent: 'sale', // Example payment intent
            description: 'Wedding Event' // Example payment description
        })
    })
    .then(response => {
        if (response.ok) {
            // Redirect to success page or display success message
            window.location.href = SERVER_HOME_URL;
        } else {
            // Handle payment error (e.g., display error message)
            alert('Payment Failed');
        }
    })
    .catch(error => {
        console.error('Error initiating payment:', error);
        // Redirect to error URL or display error message
        window.location.href = ERROR_URL;
    });
});
   


ocument.getElementById("signInBtn").addEventListener("click", function() {
  window.location.href = "http://localhost:8080/login";
  // Replace "http://localhost:8080/login" with the actual URL of your backend login page
});