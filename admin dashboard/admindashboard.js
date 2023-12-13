// Simulating dynamic data (replace with real-time data fetching)
const userList = ['User A - Admin', 'User B - Moderator', 'User C - Viewer'];
const totalDataCount = 150;
const verifiedDataCount = 120;
const pendingDataCount = 30;

// Update user list
const userListElement = document.getElementById('userList');
userList.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = user;
    userListElement.appendChild(listItem);
});

// Update data verification overview
document.getElementById('totalDataCount').textContent = totalDataCount;
document.getElementById('verifiedDataCount').textContent = verifiedDataCount;
document.getElementById('pendingDataCount').textContent = pendingDataCount;
