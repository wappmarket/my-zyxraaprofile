// Fungsi untuk menampilkan section dan menyembunyikan lainnya
function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    sec.style.display = 'none';
  });

  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
    target.classList.add('fade-in');
  }
}

// Tambahkan efek fade-in dengan animasi
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.innerHTML = `
    .fade-in {
      animation: fadeIn 0.6s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
});
