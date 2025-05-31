document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.main-nav').classList.toggle('active');
        this.classList.toggle('active');
      });