function displayName() {
    var name = document.getElementById('nameInput').value;
    var image = document.getElementById('imageInput').files[0];
    var last = document.getElementById('lastInput').value;
    var oneee = document.getElementById('lastInput').value;
  
    var displayNameElement = document.getElementById('displayName');
    displayNameElement.innerHTML = 'Writen by, ' + name + '!';
    var displayContElement = document.getElementById('onono');
    var displayImageElement = document.getElementById('displayImage');
    if (image) {
      var reader = new FileReader();
      reader.onload = function(e) {
        displayImageElement.src = e.target.result;
      };
      reader.readAsDataURL(image);
    } else {
      displayImageElement.src = '';
    }
    var displaylastElement = document.getElementById('displaylast');
    displaylastElement.innerHTML =  last;
    var displayconter = document.getElementById('displaylast');
    displayconter.innerHTML =  oneee;
    displayNameElement.classList.add('custom-style');
    displayImageElement.classList.add('oneone');
    displayContElement.classList.add('ersamo');
    displaylastElement.classList.add('dentamo');
    displayconter.classList.add('conttt');

  }
  