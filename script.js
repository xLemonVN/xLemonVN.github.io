// 1. Hàm khởi tạo hệ thống (Xử lý lỗi hiển thị và tự động chạy hoa)
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // Nếu không có màn hình chào (trang con), hiện nội dung ngay
    if (!splash) {
        if (mainContent) {
            mainContent.style.display = 'block';
            mainContent.style.opacity = '1';
            mainContent.classList.add('show-content');
        }
        document.body.style.overflowY = 'auto';
    } else {
        // Nếu có màn hình chào (trang chủ), khóa cuộn để bắt người dùng chạm
        document.body.style.overflow = 'hidden';
    }

    // Luôn khởi động hiệu ứng hoa đào ngay khi tải trang
    setInterval(createPetal, 500); 
});

// 2. Hàm xử lý khi chạm vào Màn hình chào
function startWeb() {
    const audio = document.getElementById('myAudio');
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // Phát nhạc (Fix Safari/iPhone)
    if (audio) {
        audio.play().catch(() => console.log("Cần chạm màn hình để phát nhạc"));
    }

    // Hiệu ứng ẩn màn hình chào
    if (splash) {
        splash.style.opacity = '0';
        splash.style.transition = 'opacity 0.8s ease';
        setTimeout(() => {
            splash.style.display = 'none';
            document.body.style.overflowY = 'auto'; // Mở khóa cuộn sau khi vào trang chính
        }, 800);
    }

    // Hiển thị nội dung chính
    if (mainContent) {
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.classList.add('show-content');
            mainContent.style.opacity = '1';
        }, 10);
    }
}

// 3. Hiệu ứng cánh hoa đào rơi (Sửa lỗi vị trí và hiệu suất)
function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'cherry-blossom'; 
    
    // Gán vị trí ngang ngẫu nhiên (Thêm 'vw' để nhận diện đơn vị)
    const randomLeft = Math.random() * 100;
    petal.style.left = randomLeft + 'vw';
    
    // Kích thước ngẫu nhiên
    const size = (Math.random() * 8 + 8) + 'px';
    petal.style.width = size;
    petal.style.height = size;
    
    // Màu sắc ngẫu nhiên
    const colors = ['#ffb7c5', '#ffc0cb', '#ffd1dc', '#ff91a4'];
    petal.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    // Xoay ngẫu nhiên
    const randomRotation = Math.random() * 360;
    petal.style.transform = `rotate(${randomRotation}deg)`;
    petal.style.opacity = Math.random() * 0.5 + 0.5;
    
    // Thời gian rơi ngẫu nhiên
    const fallDuration = (Math.random() * 5 + 8) + 's';
    const shakeDuration = (Math.random() * 2 + 2) + 's';
    
    petal.style.animationDuration = `${fallDuration}, ${shakeDuration}`;

    document.body.appendChild(petal);

    // Xóa cánh hoa sau khi rơi xong để tránh nặng máy
    setTimeout(() => {
        petal.remove();
    }, 12000);
}
