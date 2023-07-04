document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const name = document.getElementById('name').value;
    const cvFile = document.getElementById('cv').files[0];
    const imageFile = document.getElementById('image').files[0];
  
    updateEmployeeData(name, cvFile, imageFile);
  });
  
  // Define the function to update employee data
  async function updateEmployeeData(name, cvFile, imageFile) {
    const url = '/employees';
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('cv', cvFile);
    formData.append('image', imageFile);
  
    try {
      const response = await fetch(url, {
        method: 'PUT',
        body: formData
      });
  
      if (response.ok) {
        const result = await response.json();
        alert(result.message); // Employee CV and image updated successfully
      } else {
        const error = await response.json();
        alert(error.message); // Display the error message returned by the server
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  