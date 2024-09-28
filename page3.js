// page3.js

document.addEventListener('DOMContentLoaded', function () {
    // Kembali ke Halaman Kedua
    document.getElementById('backButton').addEventListener('click', function () {
        window.location.href = 'hbd.html'; // Ganti dengan nama file utama Anda jika berbeda
    });

    // Toggle musik play/pause (Opsional)
    const toggleMusicBtn = document.getElementById('toggleMusic');
    if (toggleMusicBtn) {
        toggleMusicBtn.addEventListener('click', function () {
            const backgroundMusic = document.getElementById('backgroundMusic');
            const toggleButton = document.getElementById('toggleMusic');

            if (backgroundMusic.paused) {
                backgroundMusic.play().then(() => {
                    toggleButton.textContent = 'Pause Musik';
                }).catch((error) => {
                    console.error('Tidak dapat memutar musik:', error);
                });
            } else {
                backgroundMusic.pause();
                toggleButton.textContent = 'Play Musik';
            }
        });
    }

    // Mulai memutar musik saat halaman dimuat (Opsional)
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic) {
        backgroundMusic.play().catch(function (error) {
            console.error('Tidak dapat memutar musik:', error);
        });
    }
});
