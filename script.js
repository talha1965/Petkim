document.addEventListener("DOMContentLoaded", () => {
    // Animasyonlu yazılar varsa yeniden oynat
    const animatedTexts = document.querySelectorAll(".animate-text");
    animatedTexts.forEach((el) => {
      el.classList.remove("animate-text");
      void el.offsetWidth; // Reflow ile animasyon tetikle
      el.classList.add("animate-text");
    });
  
    // Sidebar toggle işlemi
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("sidebarToggle");
    const content = document.querySelector(".flex-grow-1");
  
    if (toggleBtn && sidebar && content) {
      toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        content.classList.toggle("expanded");
      });
    }
  });
  