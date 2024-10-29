let currentImageIndex = 0;
const images = document.querySelectorAll('.banner-image');
const totalImages = images.length;

function changeImage() {
  // Hilangkan kelas 'active' dari gambar saat ini
  images[currentImageIndex].classList.remove('active');
  
  // Pindah ke gambar berikutnya
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  
  // Tambahkan kelas 'active' ke gambar baru
  images[currentImageIndex].classList.add('active');
}

// Setel interval untuk mengganti gambar setiap beberapa detik
setInterval(changeImage, 3000); // 3000 ms = 3 detik

// Set gambar pertama sebagai aktif saat pertama kali dimuat
images[currentImageIndex].classList.add('active');

