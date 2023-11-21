// Data handling
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const userTableBody = document.getElementById('userTableBody');
    const viewUsersButton = document.getElementById('viewUsersButton');
    const userModal = new bootstrap.Modal(document.getElementById('userModal'));
    
    // This block of code fetches and displays the data from the database.
    const fetchAndDisplayUsers = () => {
        fetch('/users')
            .then(response => response.json())
            .then(users => {
                userTableBody.innerHTML = '';
                users.forEach(user => {
                    const row = document.createElement('tr');
                    row.innerHTML = `<td>${user.username}</td><td>${user.email}</td><td>${user.fullName}</td><td>${user.phoneNumber}</td>`;
                    userTableBody.appendChild(row);
                });
                userModal.show();
            })
            .catch(error => console.error('Error fetching users:', error));
    };
    

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(registrationForm);
        fetch('/register', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data.message);

            // Function that indicates that the user successfully registered
            fetchAndDisplayUsers();

            // This line of code resets the fields after registration
            registrationForm.reset();
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
    });

    // This event allows the modal to appear or open
    viewUsersButton.addEventListener('click', fetchAndDisplayUsers);

    // Closes the modal
    userModal._element.addEventListener('hidden.bs.modal', function () {
        console.log('Modal closed');
    });
});
