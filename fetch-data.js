async function fetchUserData() {
    // Determine the API URL based on the environment
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    
// select container element
        const dataContainer = document.getElementById('api-data');
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('HTTP error! Status: ' + response.status);
            }
            const users = await response.json();
            // Clear loading message
            dataContainer.innerHTML = ''; // Clear any previous content
            // Create a list to display user data
            const userList = document.createElement('ul');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });
            // Append the user list to the container
            dataContainer.appendChild(userList);
        } catch (error) {
            console.error('Error fetching user data:', error);
            dataContainer.textContent = 'Failed to load user data.';
        }
}
// Call the function to fetch user data when the page loads
document.addEventListener('DOMContentLoaded', fetchUserData);
