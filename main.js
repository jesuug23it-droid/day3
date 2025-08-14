// main.js
import { createProfileCard } from './cardModule.js';

const openFormBtn = document.getElementById('openFormBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const profileForm = document.getElementById('profileForm');
const cardContainer = document.getElementById('cardContainer');

// Open modal
openFormBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Add new profile card
profileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('nameInput').value.trim();
  const role = document.getElementById('roleInput').value.trim();

  if (name && role) {
    const card = createProfileCard(name, role);
    cardContainer.appendChild(card);
    profileForm.reset();
    modal.style.display = 'none';
  }
});
