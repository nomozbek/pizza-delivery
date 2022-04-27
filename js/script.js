// Got all necessary elements from html
var elOrder = document.querySelector('.main-form');
var elSelect = elOrder.querySelector('.pizza-size');
var elRadio = elOrder.querySelector('.bread-size');
var elProductsBox = elOrder.querySelector('.pizza-product');
var elAdditions = elOrder.querySelector('.pizza-additions');


// Created an elements and equal 4 results to 'Form'
var selectResult = elOrder.querySelector('.pizza-size-result');
var radioResult = elOrder.querySelector('.bread-size-result');
var productsResult = elOrder.querySelector('.products-result');
var additionsResult = elOrder.querySelector('.additions-result');


// There are four necessary errays, 'Options'
var radiusOfPizza = ['Thin', 'Middle', 'Thick',];
var widthPizza = ['35 sm', '55 sm', '70 sm'];
var productOptions = ['Cucumber', 'Chicken', 'Olives', 'Pineapple', 'Mushroom', 'Sousage' , 'Chocolate'];
var additonOptions = ['Spicy', 'With cheese'];


// Here we use for loop, to create an options for Select 'Bread of pizza'
 for (var i = 0; i < radiusOfPizza.length; i++) {
  var newSelectOption = document.createElement('option');
  newSelectOption.setAttribute('value', radiusOfPizza[i]);
  newSelectOption.textContent = radiusOfPizza[i];
  newSelectOption.classList.add('text-light', 'bg-dark');
  elSelect.appendChild(newSelectOption);
  elSelect.classList.add('bg-transparent','text-light');
}; 


elSelect.addEventListener('change', function (evt) {
  evt.preventDefault();

  var choosenSize = [];

  var selectedSize = elSelect.value.trim();
  choosenSize.push(selectedSize);
  selectResult.textContent = selectedSize;
});


// SELECT SIZE OF PIZZA //

// Add options to "radioWidth"
for (var i = 0; i < widthPizza.length; i++) {

  // Create labels to input radios 
  var newWidthOptionLabel = document.createElement('label');
  newWidthOptionLabel.classList.add('d-flex', 'align-items-center', 'mr-4', 'px-2', 'py-3','rounded-circle', 'border' ,'mx-3','btn','text-light');
  newWidthOptionLabel.textContent = widthPizza[i];
  elRadio.appendChild(newWidthOptionLabel);

// Create inputs to labels
  var newWidthOptionInput = document.createElement('input');
  newWidthOptionInput.setAttribute('value', widthPizza[i]);
  newWidthOptionInput.setAttribute('name', 'pizza_width');
  newWidthOptionInput.setAttribute('type', 'radio');
  newWidthOptionInput.classList.add('ml-1','visually-hidden');
  newWidthOptionLabel.appendChild(newWidthOptionInput);

 
  // Add eventListener and check weather radio checked 
  newWidthOptionInput.addEventListener('change', function () {
    var widthChoosen = [];
    if (this.checked) {
      widthChoosen.push(this.value);
      radioResult.textContent = this.value;
    }
   
  });

};



//  SELECT PRODUCT PART OF PIZZA //
var choosenProduct = [];

for (var i = 0; i < productOptions.length; i++) {
  
  // Create labels to input checkbox
  var elNewProductsLabel = document.createElement('label');
  elNewProductsLabel.classList.add('align-items-center', 'p-1', 'd-flex' );
  elNewProductsLabel.textContent = productOptions[i];
  elProductsBox.appendChild(elNewProductsLabel);

  
  // Create input checkboxes to labels
  var newProductsInput = document.createElement('input');
  newProductsInput.setAttribute('value', productOptions[i]);
  newProductsInput.setAttribute('name', 'products');
  newProductsInput.setAttribute('type', 'checkbox');
  newProductsInput.classList.add('ml-1');
  elNewProductsLabel.appendChild(newProductsInput);



  // Add eventListener and check weather checkbox checked 
  newProductsInput.addEventListener('change', function () {

    if (choosenProduct.includes(this.value)) {
      var productIndex = choosenProduct.indexOf(this.value);
      choosenProduct.splice(productIndex, 1);
    } else {
      choosenProduct.push(this.value);
    }

    productsResult.textContent = choosenProduct.join(', ');
  });
};



//  ADDITIONS PART OF PIZZA //
var additionsChoosen = [];

for (var i = 0; i < additonOptions.length; i++) {


   // Create labels to input checkbox
  var additionsLabel = document.createElement('label');
  additionsLabel.classList.add('align-items-center', 'mr-3', 'p-1','d-flex');
  additionsLabel.textContent = additonOptions[i];
  elAdditions.appendChild(additionsLabel);


  // Create input checkboxes to labels
  var additionsInput = document.createElement('input');
  additionsInput.setAttribute('value', additonOptions[i]);
  additionsInput.setAttribute('name', 'products');
  additionsInput.setAttribute('type', 'checkbox');
  additionsInput.classList.add('ml-1');
  additionsLabel.appendChild(additionsInput);


// Add eventListener and check weather checkbox checked 
  additionsInput.addEventListener('change', function () {

    if (additionsChoosen.includes(this.value)) {
      var additionIndex = additionsChoosen.indexOf(this.value);
      additionsChoosen.splice(additionIndex, 1);
    } else {
      additionsChoosen.push(this.value);
    }

    additionsResult.textContent = additionsChoosen.join(', ');
  });
  
};