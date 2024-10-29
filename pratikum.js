function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const card = dropdown.closest('.card');
    card.classList.toggle('open');

    if (card.classList.contains('open')) {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px"; // Set max-height ke tinggi konten
        setTimeout(() => {
            dropdown.style.opacity = "1"; // Mengatur opacity setelah max-height diatur
        }, 0); // Delay kecil untuk memastikan transisi berlaku
    } else {
        dropdown.style.opacity = "0"; // Mengatur opacity ke 0
        dropdown.style.maxHeight = "0"; // Kembalikan ke 0 saat tertutup
    }
}

function showNotification() {
    document.getElementById('notification').style.display = 'block';
    }
    
    function closeNotification() {
    document.getElementById('notification').style.display = 'none';
    }

