document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript loaded");

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleFormSubmit = function(event) {
  event.preventDefault();

  const newName = document.createElement('p');
  newName.textContent = `Name: ${event.target.name.value}`;

  const newBigName = document.createElement('p');
  newBigName.textContent = `Binomial nomenclature: ${event.target.binomialNomenclature.value}`;


  const newStatus = document.createElement('p');
  newStatus.textContent = `Conservation Status: ${event.target.conservationStatus.value}`;

  const newPhoto = new Image(150, 100);
  newPhoto.src = `${event.target.photo.value}`;

  const allBirds = document.querySelector("#all-birds");
  allBirds.appendChild(newName);
  allBirds.appendChild(newBigName);
  allBirds.appendChild(newStatus);
  allBirds.appendChild(newPhoto);

  event.target.reset();
};

const handleDeleteAllClick = function (event) {
  const allBirds = document.querySelector('#all-birds')
  allBirds.innerHTML = '';
};
