document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Perform form validation
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
      return;
    }
  
    // Send form data to server (AJAX request)
    // Replace the URL with your own server-side script that handles form submission
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit-form.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert('Thank you for contacting us!');
        document.getElementById('contact-form').reset(); // Reset form fields
      }
    };
    xhr.send('name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message));
  });
  // Array of image URLs
var imageUrls = [
    'developer.jpg',
    'developer2.jpg',
    'developer3.jpg'
  ];
  
  // Get a random index from the array
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  
  // Create a new image element and set the source
  var imageElement = document.createElement('img');
  imageElement.src = imageUrls[randomIndex];
  
  // Append the image to the image container
  var imageContainer = document.getElementById('image-container');
  imageContainer.appendChild(imageElement);
  