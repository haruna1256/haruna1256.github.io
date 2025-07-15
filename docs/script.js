// スムーススクロール
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // ナビゲーションが開いている場合、クリック後に閉じる
        const navList = document.getElementById('nav-list');
        if (navList.classList.contains('active')) {
          navList.classList.remove('active');
          document.body.style.overflow = ''; // スクロール制限を解除
        }
      }
    });
  });
  
  // スクロール時のアニメーション
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // 要素を監視対象に追加
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
  
const hamburgerMenu = document.getElementById('hamburger-menu');
const navList = document.getElementById('nav-list');
const navOverlay = document.getElementById('nav-overlay');
const backToTopButton = document.getElementById('back-to-top'); // 追加

// メニューを開く関数
function openMenu() {
    navList.classList.add('active');
    navOverlay.classList.add('active'); // オーバーレイを表示
    document.body.style.overflow = 'hidden'; // スクロールを無効にする
}

// メニューを閉じる関数
function closeMenu() {
    navList.classList.remove('active');
    navOverlay.classList.remove('active'); // オーバーレイを非表示
    document.body.style.overflow = ''; // スクロールを有効にする
}

// ハンバーガーメニューのクリックイベント
hamburgerMenu.addEventListener('click', () => {
    if (navList.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

// オーバーレイ（メニュー外）をクリックしたときにメニューを閉じる
navOverlay.addEventListener('click', () => {
    closeMenu();
});

// ナビゲーションリンクをクリックしたときにメニューを閉じる
navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// 画面サイズ変更イベント
window.addEventListener('resize', () => {
    // 画面幅が768pxより大きくなったら（PC表示になったら）
    // メニューが開いていたら強制的に閉じる
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// ページスクロールイベントでトップへ戻るボタンの表示/非表示を切り替え
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // 200pxスクロールしたらボタンを表示
        backToTopButton.style.display = 'flex'; // flexを使って中央揃えを維持
    } else {
        backToTopButton.style.display = 'none';
    }
});

// トップへ戻るボタンのクリックイベント
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // スムーズスクロール
    });
});