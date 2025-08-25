const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.classList.contains('html') ? '95%' :
                                 entry.target.classList.contains('css') ? '90%' :
                                 entry.target.classList.contains('js') ? '40%' :
                                 entry.target.classList.contains('python') ? '20%' :
                                 entry.target.classList.contains('php') ? '20%' : '0';
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.progress').forEach(bar => {
  observer.observe(bar);
});
