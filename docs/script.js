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
  
 
  // ハンバーガーメニューの開閉機能
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navList = document.getElementById('nav-list');
  
  hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    // メニューが開いているときはスクロールを無効にする
    if (navList.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // 画面サイズ変更時にメニューの状態をリセット (デスクトップに戻った場合など)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navList.classList.remove('active');
      document.body.style.overflow = '';
    }
  });