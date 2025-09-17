import { db } from './firebase.js';
import { collection, addDoc } from "firebase/firestore";

// Contact form submission
document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    timestamp: new Date()
  };
  
  try {
    await addDoc(collection(db, "contacts"), formData);
    sendEmail(formData, 'contact');
    alert('Your message has been sent! We will contact you soon.');
    document.getElementById('contact-form').reset();
  } catch (error) {
    alert('Error submitting form: ' + error.message);
  }
});

// Loan application form submission
document.getElementById('loan-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    mobile: document.getElementById('mobile').value,
    pan: document.getElementById('pan').value,
    dob: document.getElementById('dob').value,
    salary: document.getElementById('salary').value,
    company: document.getElementById('company').value,
    location: document.getElementById('location').value,
    loanAmount: document.getElementById('loanAmount').value,
    consent: document.getElementById('consent').checked,
    timestamp: new Date()
  };
  
  try {
    await addDoc(collection(db, "applications"), formData);
    sendEmail(formData, 'loan');
    alert('Your application has been submitted! Our representative will contact you soon.');
    document.getElementById('loan-form').reset();
  } catch (error) {
    alert('Error submitting application: ' + error.message);
  }
});

// Function to send email (using a service like EmailJS or Firebase Cloud Functions)
function sendEmail(data, type) {
  // This would integrate with an email service
  // For demonstration, we'll log to console
  console.log(`Sending ${type} data to sandeepyjaipur@gmail.com:`, data);
  
  // In a real implementation, you would use:
  // 1. Firebase Cloud Functions with SendGrid
  // 2. A service like EmailJS
  // 3. A backend API endpoint
}
