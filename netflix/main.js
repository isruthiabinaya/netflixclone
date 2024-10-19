// script.js
const slider = document.querySelector('.movie-slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
    slider.scrollLeft -= 220; // Adjust the scroll value based on your item width
});

nextButton.addEventListener('click', () => {
    slider.scrollLeft += 220;
});
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});