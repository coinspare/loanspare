import { auth, sendEmailVerification } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// Register new user
document.getElementById('register-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
    alert('Registration successful! Please check your email for verification.');
    window.location.href = 'login.html';
  } catch (error) {
    alert(error.message);
  }
});

// Login user
document.getElementById('login-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    if (!auth.currentUser.emailVerified) {
      alert('Please verify your email before logging in.');
      return;
    }
    window.location.href = 'dashboard.html';
  } catch (error) {
    alert(error.message);
  }
});

// Check authentication state
onAuthStateChanged(auth, (user) => {
  if (user && user.emailVerified) {
    // User is signed in and verified
    if (window.location.pathname.includes('login') || 
        window.location.pathname.includes('register')) {
      window.location.href = 'dashboard.html';
    }
  } else {
    // User is signed out or not verified
    if (window.location.pathname.includes('dashboard') || 
        window.location.pathname.includes('apply-now')) {
      window.location.href = 'login.html';
    }
  }
});
