<template>
  <div class="fanclub-container">
    <!-- ヘッダー -->
    <header class="header">
      <div class="header-content">
        <h1 class="site-title" @click="scrollToTop" style="cursor: pointer">
          🌸 ゐななのうどん屋さん 🌸
        </h1>
        <nav class="nav-menu">
          <a href="#news" class="nav-link">ニュース</a>
          <a href="#events" class="nav-link">イベント</a>
          <a href="#business" class="nav-link">お仕事依頼</a>
          <a href="#gallery" class="nav-link">ギャラリー</a>
        </nav>
        <div class="header-actions">
          <div class="social-links">
            <a href="https://www.tiktok.com/@inana_aa" target="_blank" class="social-link tiktok">
              <i class="fab fa-tiktok"></i>
            </a>
            <a href="https://twitter.com/inana_aa" target="_blank" class="social-link twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/inana_aa" target="_blank" class="social-link instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@inana_aa" target="_blank" class="social-link youtube">
              <i class="fab fa-youtube"></i>
            </a>
            <a
              href="https://en.twitcasting.tv/inana_aa"
              target="_blank"
              class="social-link twitcast"
            >
              <i class="fas fa-broadcast-tower"></i>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- メインコンテンツ -->
    <main class="main-content">
      <!-- ヒーローセクション -->
      <section class="hero-section">
        <div class="hero-content">
          <h2 class="hero-title">ゐななのうどん屋さん</h2>
          <p class="hero-subtitle">ぬななじゃないよ ゐななだよ!!</p>

          <!-- SNSカルーセル -->
          <div class="carousel-container">
            <div
              class="carousel-track"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div class="carousel-slide" v-for="(slide, index) in carouselSlides" :key="index">
                <img
                  v-if="slide.img"
                  :src="slide.img"
                  :alt="slide.title"
                  class="carousel-slide-img"
                />
                <div class="slide-content">
                  <h3 class="slide-title">{{ slide.title }}</h3>
                  <p class="slide-description">{{ slide.description }}</p>
                  <a :href="slide.link" target="_blank" class="slide-button">
                    {{ slide.buttonText }}
                  </a>
                </div>
              </div>
            </div>

            <!-- カルーセルナビゲーション -->
            <div class="carousel-nav">
              <button
                v-for="(slide, index) in carouselSlides"
                :key="index"
                @click="goToSlide(index)"
                class="nav-dot"
                :class="{ active: currentSlide === index }"
              ></button>
            </div>

            <!-- 前後のボタン -->
            <button @click="prevSlide" class="carousel-btn prev-btn"><span>＜</span></button>
            <button @click="nextSlide" class="carousel-btn next-btn"><span>＞</span></button>
          </div>
        </div>
      </section>

      <!-- ニュースセクション -->
      <section id="news" class="section">
        <h3 class="section-title">📰 ゐななからの最新ニュース</h3>
        <div class="news-grid">
          <article class="news-card" v-for="news in newsItems" :key="news.id">
            <div class="news-image">
              <img :src="news.img" :alt="news.title" class="news-img" />
            </div>
            <div class="news-content">
              <span class="news-date">{{ news.date }}</span>
              <h4 class="news-title">{{ news.title }}</h4>
              <p class="news-excerpt">{{ news.excerpt }}</p>
              <div class="news-social">
                <span class="social-tag">{{ news.platform }}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- イベントセクション -->
      <section id="events" class="section">
        <h3 class="section-title">🎉 今後のイベント情報</h3>
        <div class="events-list">
          <div class="event-card" v-for="event in events" :key="event.id">
            <div class="event-date">
              <span class="event-day">{{ event.day }}</span>
              <span class="event-month">{{ event.month }}</span>
            </div>
            <div class="event-content">
              <h4 class="event-title">{{ event.title }}</h4>
              <p class="event-description">{{ event.description }}</p>
              <span class="event-location">📍 {{ event.location }}</span>
              <div class="event-social">
                <span class="event-platform">{{ event.platform }}</span>
              </div>
            </div>
            <button class="event-button">詳細はこちら</button>
          </div>
        </div>
      </section>

      <!-- お仕事依頼・グッズセクション -->
      <section id="business" class="section">
        <h3 class="section-title">💼 お仕事のご依頼 & 🛍️ ゐななのグッズ情報</h3>
        <div class="business-section">
          <div class="work-card">
            <div class="work-placeholder">
              <span class="work-icon">💼</span>
              <h4 class="work-title">お仕事のご依頼</h4>
              <p class="work-description">
                コラボレーション、イベント出演、<br />その他お仕事のご相談はこちらまで
              </p>
              <a href="mailto:inana.managementpgmail.com" class="work-button">メールで依頼 ✨</a>
            </div>
          </div>

          <div class="goods-card">
            <div class="goods-placeholder">
              <span class="goods-icon">🛍️</span>
              <h4 class="goods-title">ゐななオンラインショップ</h4>
              <p class="goods-description">
                チェキ、ブロマイド、アクリルキーホルダーなど<br />ゐななの限定グッズがたくさん！
              </p>
              <a href="https://inana.base.shop" target="_blank" class="goods-button"
                >ショップを見る ✨</a
              >
            </div>
          </div>
        </div>
      </section>

      <!-- ギャラリーセクション -->
      <section id="gallery" class="section">
        <h3 class="section-title">📸 ゐななのフォトギャラリー</h3>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="@/assets/inana_g1.jpg" alt="ギャラリー画像1" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/inana_g2.jpg" alt="ギャラリー画像2" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/inana_g3.jpg" alt="ギャラリー画像3" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/inana_g4.jpg" alt="ギャラリー画像4" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/inana_g5.jpg" alt="ギャラリー画像5" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/inana_g6.jpg" alt="ギャラリー画像6" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/inana_g7.jpg" alt="ギャラリー画像7" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <img src="@/assets/inana_g8.jpg" alt="ギャラリー画像8" class="gallery-img" />
          </div>
        </div>
      </section>
    </main>

    <!-- フッター -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-social">
          <a href="https://www.tiktok.com/@inana_aa" target="_blank" class="footer-social-link"
            ><i class="fab fa-tiktok"></i> TikTok</a
          >
          <a href="https://twitter.com/inana_aa" target="_blank" class="footer-social-link"
            ><i class="fab fa-twitter"></i> Twitter</a
          >
          <a href="https://instagram.com/inana_aa" target="_blank" class="footer-social-link"
            ><i class="fab fa-instagram"></i> Instagram</a
          >
          <a href="https://www.youtube.com/@inana_aa" target="_blank" class="footer-social-link"
            ><i class="fab fa-youtube"></i> YouTube</a
          >
          <a href="https://en.twitcasting.tv/inana_aa" target="_blank" class="footer-social-link"
            ><i class="fas fa-broadcast-tower"></i> ツイキャス</a
          >
        </div>
        <p class="footer-copyright">&copy; 2025 ゐななのうどん屋さん. All rights reserved. 💖</p>
      </div>
    </footer>
  </div>
</template>

<script>
import newsImg1 from '@/assets/inana_n1.jpg'
import newsImg2 from '@/assets/inana_n2.jpg'
import newsImg3 from '@/assets/inana_n3.jpg'
import newsImg4 from '@/assets/inana_n4.jpg'
import newsImg5 from '@/assets/inana_n5.jpg'

export default {
  name: 'FanclubView',
  data() {
    return {
      newsItems: [
        {
          id: 1,
          date: '2025.05.25',
          title: 'TikTok動画投稿しました！',
          excerpt: 'いいねで拡散してね！',
          platform: '🎵 TikTok',
          img: newsImg1,
        },
        {
          id: 2,
          date: '2025.07.12',
          title: 'Instagramで新しい写真を投稿',
          excerpt: '夏は浴衣が着れるから好き！。みんなの感想も聞かせてね ✨',
          platform: '📸 Instagram',
          img: newsImg2,
        },
        {
          id: 3,
          date: '2025.05.16',
          title: 'YouTubeで新しい動画を公開',
          excerpt: '久しぶりのYouTube動画を公開しました！ 🎥',
          platform: '📺 YouTube',
          img: newsImg3,
        },
        {
          id: 4,
          date: '2025.07.13',
          title: 'Twitterでみんなと交流中',
          excerpt: 'イベント等の告知はここが多いです！ 🐦',
          platform: '🐦 Twitter',
          img: newsImg4,
        },
        {
          id: 5,
          date: '2025.06.25',
          title: 'ツイキャスでライブ配信',
          excerpt: 'ツイキャスで楽しくお話！',
          platform: '📡 ツイキャス',
          img: newsImg5,
        },
      ],
      members: [
        {
          id: 1,
          name: 'ゐなな',
          role: 'インフルエンサー',
          bio: 'みんなを笑顔にするのが大好き！毎日楽しい動画を投稿しています 💕',
          emoji: '✨',
          followers: '50K+',
        },
        {
          id: 2,
          name: 'ファンクラブスタッフ',
          role: 'コミュニティ管理',
          bio: 'ゐななとファンのみんなをつなぐお手伝いをしています 🌸',
          emoji: '🌸',
          followers: '1K+',
        },
        {
          id: 3,
          name: 'ファンクラブメンバー',
          role: 'ファン',
          bio: 'ゐななの動画が大好き！毎日チェックしています 💖',
          emoji: '💖',
          followers: '500+',
        },
      ],
      events: [
        {
          id: 1,
          day: '8',
          month: '6月',
          title: 'ゲスト出勤のお知らせ（18:00～2:00）',
          description: '大阪のcafe&barGuestさんにてゲスト出勤させていただきます🎵',
          location: '大阪',
          platform: 'ゲスト出勤',
        },
      ],
      carouselSlides: [
        {
          icon: '🎵',
          title: 'TikTok新着動画',
          description: 'ゐななの最新の投稿をチェック！',
          link: 'https://www.tiktok.com/@inana_aa',
          buttonText: 'TikTokを見る',
          img: new URL('@/assets/inana_top_tiktok.jpg', import.meta.url).href,
        },
        {
          icon: '🐦',
          title: 'Twitter',
          description: 'ゐななのつぶやき！告知もしてるよ！',
          link: 'https://twitter.com/inana_aa',
          buttonText: 'Twitterを見る',
          img: new URL('@/assets/inana_top_twitter.jpg', import.meta.url).href,
        },
        {
          icon: '📸',
          title: 'Instagramで写真',
          description: 'ゐななの日常を写真で見つけよう！',
          link: 'https://instagram.com/inana_aa',
          buttonText: 'Instagramを見る',
          img: new URL('@/assets/inana_top_instagram.jpg', import.meta.url).href,
        },
        {
          icon: '📺',
          title: 'YouTube',
          description: 'メイク動画、Vlogなどなど！',
          link: 'https://www.youtube.com/@inana_aa',
          buttonText: 'YouTubeを見る',
          img: new URL('@/assets/inana_top_youtube.jpg', import.meta.url).href,
        },
      ],
      currentSlide: 0,
      autoSlideTimer: null,
      isSliding: false,
    }
  },
  mounted() {
    this.startAutoSlide()
  },
  beforeUnmount() {
    this.stopAutoSlide()
  },
  methods: {
    startAutoSlide() {
      this.stopAutoSlide()
      this.autoSlideTimer = setInterval(() => {
        this.nextSlide()
      }, 5000)
    },
    stopAutoSlide() {
      if (this.autoSlideTimer) clearInterval(this.autoSlideTimer)
      this.autoSlideTimer = null
    },
    nextSlide() {
      if (this.isSliding) return
      this.isSliding = true
      if (this.currentSlide < this.carouselSlides.length - 1) {
        this.currentSlide++
      } else {
        // ループ時も右方向にスムーズに
        this.currentSlide = 0
      }
      setTimeout(() => {
        this.isSliding = false
      }, 600)
    },
    prevSlide() {
      if (this.isSliding) return
      this.isSliding = true
      if (this.currentSlide > 0) {
        this.currentSlide--
      } else {
        // 逆方向もスムーズに
        this.currentSlide = this.carouselSlides.length - 1
      }
      setTimeout(() => {
        this.isSliding = false
      }, 600)
    },
    goToSlide(index) {
      if (this.isSliding) return
      this.currentSlide = index
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.fanclub-container {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #f8fafc 0%,
    #f1f5f9 25%,
    #e2e8f0 50%,
    #cbd5e1 75%,
    #94a3b8 100%
  );
  position: relative;
}

.fanclub-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/back_ground.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  pointer-events: none;
  z-index: 0;
  opacity: 0.7;
  filter: blur(0.5px);
}

@media (max-width: 768px) {
  .fanclub-container::before {
    background-attachment: scroll;
    position: absolute;
  }
}

/* ヘッダー */
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(236, 72, 153, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 3px solid #fce7f3;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-title {
  font-family:
    'Yomogi', 'M PLUS Rounded 1c', 'Rounded Mplus 1c', 'Hiragino Maru Gothic Pro', 'Meiryo',
    sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #ec4899;
  letter-spacing: 0.05em;
  text-shadow:
    0 2px 8px #fce7f3,
    0 1px 0 #fff;
  margin: 0;
  padding: 0.5em 0;
  line-height: 1.2;
  white-space: nowrap;
}

.nav-menu {
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
}

.nav-link {
  color: #6b7280;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  padding: 6px 12px;
  border-radius: 20px;
  white-space: nowrap;
  font-size: 14px;
}

.nav-link:hover {
  color: #ec4899;
  background: rgba(236, 72, 153, 0.1);
  transform: translateY(-2px);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.social-links {
  display: flex;
  gap: 8px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: white;
}

.social-link i {
  font-size: 18px;
}

.social-link.tiktok {
  background: linear-gradient(135deg, #ff0050, #00f2ea);
  color: white;
}

.social-link.twitter {
  background: linear-gradient(135deg, #1da1f2, #0d8bd9);
  color: white;
}

.social-link.instagram {
  background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  color: white;
}

.social-link.youtube {
  background: linear-gradient(135deg, #ff0000, #cc0000);
  color: white;
}

.social-link.twitcast {
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
}

.social-link:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.logout-button {
  background: linear-gradient(135deg, #f3e8ff, #e9d5ff);
  color: #7c3aed;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.2);
}

.logout-button:hover {
  background: linear-gradient(135deg, #e9d5ff, #ddd6fe);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.3);
}

/* メインコンテンツ */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  z-index: 1;
}

/* ヒーローセクション */
.hero-section {
  text-align: center;
  margin-bottom: 80px;
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-title {
  font-family:
    'Yomogi', 'M PLUS Rounded 1c', 'Rounded Mplus 1c', 'Hiragino Maru Gothic Pro', 'Meiryo',
    sans-serif;
  color: #ec4899;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
  letter-spacing: 0.05em;
  text-shadow:
    0 2px 8px #fce7f3,
    0 1px 0 #fff;
}

.hero-subtitle {
  color: #6b7280;
  font-size: 18px;
  margin-bottom: 40px;
}

/* カルーセル */
.carousel-container {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 32px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
  background: #fff;
  padding-bottom: 48px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 1, 0.4, 1);
}

.carousel-slide {
  min-width: 100%;
  height: 480px;
  position: relative;
  background: #ffe4ef;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.carousel-slide-img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 32px;
  display: block;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.slide-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 32px 40px 24px 40px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.55) 80%, rgba(0, 0, 0, 0) 100%);
  border-radius: 0 0 32px 32px;
  color: #fff;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.slide-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.3em;
  opacity: 0.92;
}

.slide-description {
  font-size: 0.95rem;
  margin-bottom: 0.7em;
  opacity: 0.85;
}

.slide-button {
  background: linear-gradient(135deg, #ec4899, #db2777);
  color: #fff;
  text-decoration: none;
  padding: 7px 18px;
  border-radius: 16px;
  font-size: 0.95rem;
  font-weight: 600;
  opacity: 0.92;
  transition: background 0.2s;
}
.slide-button:hover {
  background: linear-gradient(135deg, #db2777, #ec4899);
}

.slide-icon {
  display: none;
}

/* カルーセルナビゲーション */
.carousel-nav {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 18px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 16px;
  z-index: 3;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #d1d5db;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-dot.active {
  background: #ec4899;
  transform: scale(1.2);
}

/* カルーセルボタン */
.carousel-btn {
  position: absolute;
  top: 40%;
  left: unset;
  right: unset;
  transform: translateY(-50%);
  background: #fff0f6;
  border: none;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  font-size: 2.1rem;
  color: #ec4899;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 1, 0.4, 1);
  box-shadow:
    0 4px 18px rgba(236, 72, 153, 0.18),
    0 1.5px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  opacity: 0.92;
  border: 2px solid #fbcfe8;
}
.carousel-btn span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.carousel-btn:hover {
  background: #fbcfe8;
  color: #db2777;
  opacity: 1;
  transform: translateY(-50%) scale(1.08);
  box-shadow:
    0 8px 24px rgba(236, 72, 153, 0.25),
    0 2px 8px rgba(0, 0, 0, 0.1);
}
.prev-btn {
  left: 18px;
  right: auto;
}
.next-btn {
  right: 18px;
  left: auto;
}
@media (max-width: 900px) {
  .carousel-btn {
    width: 38px;
    height: 38px;
    font-size: 1.3rem;
    left: unset;
    right: unset;
    border-radius: 50%;
  }
  .prev-btn {
    left: 6px;
    right: auto;
  }
  .next-btn {
    right: 6px;
    left: auto;
  }
}

/* セクション共通 */
.section {
  margin-bottom: 80px;
}

.section-title {
  font-family:
    'Yomogi', 'M PLUS Rounded 1c', 'Rounded Mplus 1c', 'Hiragino Maru Gothic Pro', 'Meiryo',
    sans-serif;
  color: #ec4899;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  letter-spacing: 0.05em;
  text-shadow:
    0 2px 8px #fce7f3,
    0 1px 0 #fff;
}

/* ニュースセクション */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
}

.news-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(236, 72, 153, 0.15);
  transition: all 0.3s ease;
  border: 2px solid #fce7f3;
}

.news-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(236, 72, 153, 0.25);
}

.news-image {
  height: 180px;
  background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.news-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;
  border: 3px solid #fce7f3;
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.2);
}

.news-card:hover .news-img {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(236, 72, 153, 0.3);
}

.news-placeholder {
  font-size: 50px;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.news-content {
  padding: 25px;
}

.news-date {
  color: #9ca3af;
  font-size: 12px;
  font-weight: 600;
  background: rgba(236, 72, 153, 0.1);
  padding: 4px 12px;
  border-radius: 15px;
  display: inline-block;
  margin-bottom: 10px;
}

.news-title {
  color: #374151;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.4;
}

.news-excerpt {
  color: #6b7280;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.news-social {
  display: flex;
  justify-content: flex-end;
}

.social-tag {
  background: linear-gradient(135deg, #ec4899, #db2777);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
}

/* ギャラリーセクション */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.gallery-item {
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(236, 72, 153, 0.15);
  transition: all 0.3s ease;
  border: 2px solid #fce7f3;
  position: relative;
  overflow: hidden;
}

.gallery-item:hover {
  transform: scale(1.08) rotate(2deg);
  box-shadow: 0 20px 40px rgba(236, 72, 153, 0.25);
}

.gallery-placeholder {
  background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.gallery-icon {
  font-size: 40px;
  margin-bottom: 10px;
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(180deg);
  }
}

.gallery-label {
  color: #ec4899;
  font-weight: 600;
  font-size: 14px;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

/* イベントセクション */
.events-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.event-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 25px;
  box-shadow: 0 10px 30px rgba(236, 72, 153, 0.15);
  transition: all 0.3s ease;
  border: 2px solid #fce7f3;
}

.event-card:hover {
  transform: translateX(10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(236, 72, 153, 0.25);
}

.event-date {
  text-align: center;
  min-width: 80px;
  padding: 15px;
  background: linear-gradient(135deg, #fce7f3, #f3e8ff);
  border-radius: 15px;
  border: 2px solid #ec4899;
}

.event-day {
  display: block;
  color: #ec4899;
  font-size: 28px;
  font-weight: 700;
}

.event-month {
  color: #9ca3af;
  font-size: 14px;
  font-weight: 600;
}

.event-content {
  flex: 1;
}

.event-title {
  color: #374151;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
}

.event-description {
  color: #6b7280;
  font-size: 15px;
  margin-bottom: 8px;
  line-height: 1.5;
}

.event-location {
  color: #9ca3af;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  display: block;
}

.event-social {
  display: flex;
  justify-content: flex-start;
}

.event-platform {
  background: linear-gradient(135deg, #ec4899, #db2777);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
}

.event-button {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(236, 72, 153, 0.3);
  font-size: 14px;
}

.event-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 30px rgba(236, 72, 153, 0.4);
}

/* グッズ・お仕事依頼セクション */
.business-section {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.goods-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(236, 72, 153, 0.2);
  border: 3px solid #fce7f3;
  max-width: 500px;
  width: 100%;
}

.goods-placeholder {
  background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%);
  border-radius: 15px;
  padding: 40px 20px;
  margin-bottom: 20px;
}

.goods-icon {
  font-size: 60px;
  display: block;
  margin-bottom: 20px;
  animation: pulse 2s ease-in-out infinite;
}

.goods-title {
  color: #ec4899;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.goods-description {
  color: #6b7280;
  font-size: 16px;
  margin-bottom: 25px;
  line-height: 1.6;
}

.goods-button {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(236, 72, 153, 0.3);
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
}

.goods-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 35px rgba(236, 72, 153, 0.4);
}

/* お仕事依頼カード */
.work-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(236, 72, 153, 0.2);
  border: 3px solid #fce7f3;
  max-width: 500px;
  width: 100%;
}

.work-placeholder {
  background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%);
  border-radius: 15px;
  padding: 40px 20px;
  margin-bottom: 20px;
}

.work-icon {
  font-size: 60px;
  display: block;
  margin-bottom: 20px;
  animation: pulse 2s ease-in-out infinite;
}

.work-title {
  color: #ec4899;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.work-description {
  color: #6b7280;
  font-size: 16px;
  margin-bottom: 25px;
  line-height: 1.6;
}

.work-button {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(236, 72, 153, 0.3);
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
}

.work-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 35px rgba(236, 72, 153, 0.4);
}

/* フッター */
.footer {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 30px 20px;
  text-align: center;
  margin-top: 80px;
  border-top: 3px solid #fce7f3;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-social {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.footer-social-link {
  color: #ec4899;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  background: rgba(236, 72, 153, 0.1);
}

.footer-social-link:hover {
  background: rgba(236, 72, 153, 0.2);
  transform: translateY(-2px);
}

.footer-copyright {
  color: #9ca3af;
  font-size: 14px;
  font-weight: 500;
}

/* レスポンシブ */
@media (max-width: 768px) {
  /* ヘッダー */
  .header-content {
    flex-direction: column;
    gap: 15px;
    padding: 10px 15px;
  }

  .site-title {
    font-size: 1.4rem;
    text-align: center;
  }

  .nav-menu {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-link {
    font-size: 13px;
    padding: 5px 10px;
  }

  .social-links {
    gap: 6px;
  }

  .social-link {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }

  .social-link i {
    font-size: 16px;
  }

  /* メインコンテンツ */
  .main-content {
    padding: 20px 15px;
  }

  /* ヒーローセクション */
  .hero-section {
    padding: 40px 15px;
    margin-bottom: 40px;
  }

  .hero-title {
    font-size: 24px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  /* セクションタイトル */
  .section-title {
    font-size: 20px;
    margin-bottom: 25px;
  }

  /* ニュースセクション */
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .news-card {
    border-radius: 15px;
    flex-direction: column;
  }

  .news-image {
    height: 120px;
    border-radius: 15px 15px 0 0;
  }

  .news-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #fce7f3;
    box-shadow: 0 3px 8px rgba(236, 72, 153, 0.2);
  }

  .news-content {
    padding: 15px;
  }

  .news-title {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .news-excerpt {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .news-date {
    font-size: 10px;
    padding: 3px 8px;
  }

  .social-tag {
    font-size: 10px;
    padding: 3px 8px;
  }

  /* ギャラリーセクション */
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .gallery-item {
    aspect-ratio: 1;
    border-radius: 15px;
  }

  .gallery-img {
    border-radius: 15px;
  }

  /* イベントセクション */
  .event-card {
    flex-direction: column;
    text-align: center;
    padding: 20px;
    gap: 15px;
  }

  .event-date {
    min-width: auto;
  }

  /* グッズ・お仕事依頼セクション */
  .business-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .goods-card,
  .work-card {
    padding: 15px;
    border-radius: 15px;
  }

  .goods-placeholder,
  .work-placeholder {
    padding: 20px 10px;
    border-radius: 12px;
  }

  .goods-icon,
  .work-icon {
    font-size: 40px;
    margin-bottom: 15px;
  }

  .goods-title,
  .work-title {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .goods-description,
  .work-description {
    font-size: 12px;
    margin-bottom: 15px;
    line-height: 1.4;
  }

  .goods-button,
  .work-button {
    padding: 8px 16px;
    font-size: 12px;
    border-radius: 20px;
  }

  /* フッター */
  .footer {
    padding: 20px 15px;
    margin-top: 40px;
  }

  .footer-social {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .footer-social-link {
    padding: 6px 12px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  /* さらに小さい画面用 */
  .site-title {
    font-size: 1.2rem;
  }

  .nav-menu {
    gap: 8px;
  }

  .nav-link {
    font-size: 12px;
    padding: 4px 8px;
  }

  .hero-title {
    font-size: 20px;
  }

  .section-title {
    font-size: 18px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .gallery-item {
    aspect-ratio: 1;
    border-radius: 12px;
  }

  .gallery-img {
    border-radius: 12px;
  }

  .news-content {
    padding: 15px;
  }

  .event-card {
    padding: 15px;
  }

  .goods-card,
  .work-card {
    padding: 12px;
  }

  .goods-placeholder,
  .work-placeholder {
    padding: 15px 8px;
  }

  .goods-icon,
  .work-icon {
    font-size: 35px;
  }

  .goods-title,
  .work-title {
    font-size: 14px;
  }

  .goods-description,
  .work-description {
    font-size: 11px;
  }

  .goods-button,
  .work-button {
    padding: 6px 12px;
    font-size: 11px;
  }

  .news-img {
    width: 50px;
    height: 50px;
    border: 2px solid #fce7f3;
  }
}

@media (max-width: 900px) {
  .carousel-container {
    max-width: 98vw;
    border-radius: 18px;
    padding-bottom: 32px;
  }
  .carousel-slide {
    height: 260px;
    border-radius: 18px;
  }
  .carousel-slide-img {
    border-radius: 18px;
  }
  .slide-content {
    padding: 18px 14px 12px 14px;
    border-radius: 0 0 18px 18px;
  }
  .carousel-nav {
    bottom: 8px;
  }

  .carousel-btn {
    width: 38px;
    height: 38px;
    font-size: 1.3rem;
  }

  .prev-btn {
    left: 6px;
  }

  .next-btn {
    right: 6px;
  }
}
</style>
