document.addEventListener('DOMContentLoaded', function() {
    // AOS（Animate On Scroll）の初期化
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // ヒーローセクションの装飾的な要素を追加
    createDecorativeElements();

    // Notionデータベースの埋め込み
    initNotionEmbed();
});

function createDecorativeElements() {
    const heroImage = document.querySelector('.hero-image');
    const shapes = ['circle', 'square', 'triangle'];
    const colors = ['#4A90E2', '#F5A623', '#7ED321'];

    for (let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.className = `decorative-shape ${shapes[i % shapes.length]} floating`;
        shape.style.backgroundColor = colors[i % colors.length];
        shape.style.animationDelay = `${i * 0.2}s`;
        heroImage.appendChild(shape);
    }
}

function initNotionEmbed() {
    // NotionのAPIキーと設定を使用してデータを取得
    // ここにNotionの埋め込みコードを追加
}

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// インタラクティブな要素のアニメーション
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.campaign-card').forEach(card => {
    observer.observe(card);
});
