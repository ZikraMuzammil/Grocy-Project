const addProductBtn = document.getElementById('addProductBtn');
const addProductClose = document.getElementById('Close-add');
const addProductSection = document.querySelector('.container');

addProductBtn.addEventListener('click', () => {
  addProductSection.classList.add('show');
});
addProductClose.addEventListener('click', () => {
  addProductSection.classList.remove('show');
});





document.addEventListener("DOMContentLoaded", function () {
    const addProductBtn = document.getElementById("addProductBtn");
    const formSection = document.querySelector(".Add-product-inpt");
    const saveBtn = document.querySelector(".Save-btn");
    const closeBtn = document.getElementById("Close-add");
    const tableBody = document.querySelector(".data-table tbody");
  
    let productNumber = document.querySelectorAll(".prdt-num").length;
  
    // Show form
    addProductBtn.addEventListener("click", function () {
      formSection.style.display = "block";
    });
  
    // Close form
    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      formSection.style.display = "none";
    });
  
    // Save product
    saveBtn.addEventListener("click", function (e) {
      e.preventDefault();
  
      // Get form values
      const imageInput = document.querySelector('input[type="file"]');
      const name = document.querySelector('input[placeholder="Apple"]').value;
      const category = document.getElementById("Category").options[document.getElementById("Category").selectedIndex].text;
      const price = document.querySelector('input[placeholder="1"]').value;
      const quantity = document.querySelector('input[placeholder="4000 Pcs"]').value;
      const quantityType = document.querySelector('input[placeholder="Kg / g / Pcs / Pack"]').value;
      const availability = document.querySelector('input[placeholder="300 Apples"]').value;
      const imageFile = imageInput.files[0];
      const imageUrl = imageFile ? URL.createObjectURL(imageFile) : "img/default.png";
  
      // Increase product number
      productNumber++;
      const newNumber = String(productNumber).padStart(3, "0");
  
      // Create table row
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td class="prdt-num">${newNumber}</td>
        <td><img src="${imageUrl}" alt=""></td>
        <td>${name}</td>
        <td>${category}</td>
        <td>${availability}</td>
        <td>${quantityType}</td>
        <td><span>${price}Rs</span></td>
        <td>
          <button class="btn btn-outline btn-sm view-btn"><i class="fas fa-eye"></i> View</button>
          <button class="btn btn-outline btn-sm view-btn Remove-btn"><i class="fas fa-close"></i> Remove</button>
        </td>
      `;
      tableBody.appendChild(newRow);
  
      // Remove product button
      const removeBtn = newRow.querySelector(".Remove-btn");
      removeBtn.addEventListener("click", function () {
        newRow.remove();
        updateProductNumbers();
      });
  
      // Reset form and hide it
      imageInput.value = "";
      document.querySelector('input[placeholder="Apple"]').value = "";
      document.querySelector('input[placeholder="1"]').value = "";
      document.querySelector('input[placeholder="4000 Pcs"]').value = "";
      document.querySelector('input[placeholder="Kg / g / Pcs / Pack"]').value = "";
      document.querySelector('input[placeholder="300 Apples"]').value = "";
      document.getElementById("Category").selectedIndex = 0;
      formSection.style.display = "none";
    });
  
    // Update product numbers after removal
    function updateProductNumbers() {
      const allRows = document.querySelectorAll(".data-table tbody tr");
      allRows.forEach((row, index) => {
        row.querySelector(".prdt-num").textContent = String(index + 1).padStart(3, "0");
      });
      productNumber = allRows.length;
    }
  
    // Activate remove buttons for existing rows
    const allRemoveBtns = document.querySelectorAll(".Remove-btn");
    allRemoveBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const row = btn.closest("tr");
        row.remove();
        updateProductNumbers();
      });
    });
  });
  

