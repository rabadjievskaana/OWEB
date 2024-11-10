document.addEventListener('DOMContentLoaded', (event) => {
    const likeButtons = document.querySelectorAll('.like-btn');
  
    likeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const likeCount = this.querySelector('.like-count');
        let count = parseInt(likeCount.textContent);
        likeCount.textContent = ++count;
      });
    });
  });
  
    