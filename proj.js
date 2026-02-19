
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.view-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Project details would be displayed here.');
    });
  });
});