
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.port-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Copy this link:https://my-portfolio-seven-livid-76.vercel.app/');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.view-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Project details would be displayed here.');
    });
  });
});