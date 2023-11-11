let editingRow = null;
let currentPage = 1;
let entriesPerPage = 5;

// Function to create a new row in the table
function createTableRow(data) {
    const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    const cellValues = [data.name, data.age, data.email, data.phone, data.city];
  
    cellValues.forEach((value) => {
      const cell = newRow.insertCell();
      cell.textContent = value;
    });
  
    const actionCell = newRow.insertCell();
    actionCell.innerHTML = `<button class="btn btn-info" onclick="editRow(this)">Edit</button> <button class="btn btn-danger" onclick="confirmDelete(this)">Delete</button>`;
  }

  document.getElementById("dataForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const form = document.getElementById("dataForm");
    const formData = new FormData(form);
  
    if (editingRow) {
      // Save the changes to the existing row
      saveEdit();
    } else {
      // Create a JSON object from the form data
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
  
      // Clear form inputs
      form.reset();
  
      // Create a JSON object and add it to the table
      createTableRow(data);
  
      // Post data to a server (you can replace this with your server URL)
      fetch('/your-server-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server if needed
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  });
  

// Function to edit a row
function editRow(button) {
  editingRow = button.parentNode.parentNode;
  const name = editingRow.cells[0].textContent;
  const age = editingRow.cells[1].textContent;
  const email = editingRow.cells[2].textContent;
  const phone = editingRow.cells[3].textContent;
  const city = editingRow.cells[4].textContent;

  document.getElementById("editName").value = name;
  document.getElementById("editAge").value = age;
  document.getElementById("editEmail").value = email;
  document.getElementById("editPhone").value = phone;
  document.getElementById("editCity").value = city;
  document.getElementById("editRowIndex").value = editingRow.rowIndex;

  openEditModal();
}

// Function to open the edit modal
function openEditModal() {
  const modal = document.getElementById("editModal");
  modal.style.display = "block";
}

// Function to save the changes from the edit modal
function saveEditModal() {
  const rowIndex = document.getElementById("editRowIndex").value;
  editingRow.cells[0].textContent = document.getElementById("editName").value;
  editingRow.cells[1].textContent = document.getElementById("editAge").value;
  editingRow.cells[2].textContent = document.getElementById("editEmail").value;
  editingRow.cells[3].textContent = document.getElementById("editPhone").value;
  editingRow.cells[4].textContent = document.getElementById("editCity").value;

  closeEditModal();
}

// Function to close the edit modal
function closeEditModal() {
  const modal = document.getElementById("editModal");
  modal.style.display = "none";
  editingRow = null;
}

// Function to ask for confirmation before deleting a row
function confirmDelete(button) {
  const row = button.parentNode.parentNode;
  const name = row.cells[0].textContent;

  if (confirm(`Are you sure you want to delete the entry for ${name}?`)) {
    row.parentNode.removeChild(row);
  }
}

// Function to clear the form
function clearForm() {
    const inputIds = ["name", "age", "email", "phone", "city"];
    
    inputIds.forEach((id) => {
      document.getElementById(id).value = "";
    });
  }

// Function to update the number of entries displayed
document.getElementById("entriesRange").addEventListener("change", function () {
  entriesPerPage = parseInt(this.value);
  currentPage = 1;
  paginateTable();
});

// Function to paginate the table data
function paginateTable() {
  const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
  const rows = table.rows;
  const totalPages = Math.ceil(rows.length / entriesPerPage);

  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.classList.add("pagination-button", "btn", "btn-primary");
    button.textContent = i;
    button.addEventListener("click", function () {
      currentPage = i;
      showPage(currentPage);
    });
    pagination.appendChild(button);
  }

  showPage(currentPage);
}

// Function to show a specific page of table data
function showPage(page) {
  const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    rows[i].style.display = (i >= (page - 1) * entriesPerPage && i < page * entriesPerPage) ? "table-row" : "none";
  }
}

// Initialize pagination
paginateTable();