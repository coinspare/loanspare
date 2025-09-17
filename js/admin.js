import { db } from './firebase.js';
import { collection, getDocs } from "firebase/firestore";

// Admin password (change this to a secure value)
const ADMIN_PASSWORD = "Finvare@2023";

// Check admin password
document.getElementById('admin-login')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const password = document.getElementById('admin-password').value;
  
  if (password === ADMIN_PASSWORD) {
    document.getElementById('admin-login-section').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'block';
    loadAdminData();
  } else {
    alert('Incorrect password!');
  }
});

// Load data for admin panel
async function loadAdminData() {
  // Load users
  const usersSnapshot = await getDocs(collection(db, "users"));
  const usersTable = document.getElementById('users-table');
  usersTable.innerHTML = '';
  
  usersSnapshot.forEach(doc => {
    const user = doc.data();
    const row = `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.verified ? 'Yes' : 'No'}</td>
        <td>${new Date(user.createdAt).toLocaleString()}</td>
      </tr>
    `;
    usersTable.innerHTML += row;
  });
  
  // Load applications
  const appsSnapshot = await getDocs(collection(db, "applications"));
  const appsTable = document.getElementById('applications-table');
  appsTable.innerHTML = '';
  
  appsSnapshot.forEach(doc => {
    const app = doc.data();
    const row = `
      <tr>
        <td>${app.name}</td>
        <td>${app.mobile}</td>
        <td>${app.pan}</td>
        <td>${app.loanAmount}</td>
        <td>${new Date(app.timestamp).toLocaleString()}</td>
      </tr>
    `;
    appsTable.innerHTML += row;
  });
}
