<template>
  <div>
    <Header />
    <main class="explore">
      <section class="people">
        <ul class="people__list">
          <li class="people__person">
            <div class="people__column">
              <div class="people__avatar-container">
                <img src="../assets/images/avatar.png" class="people__avatar" />
              </div>
              <div class="people__info">
                <span class="people__username">davidbeckham</span>
                <span class="people__full-name">David Beckham</span>
              </div>
            </div>
            <div class="people__column">
              <a href="#">Follow</a>
            </div>
          </li>
          <li class="people__person">
            <div class="people__column">
              <div class="people__avatar-container">
                <img src="../assets/images/avatar.png" class="people__avatar" />
              </div>
              <div class="people__info">
                <span class="people__username">
                  davidbeckham
                  <img src="../assets/images/verified.png" />
                </span>
                <span class="people__full-name">David Beckham</span>
              </div>
            </div>
            <div class="people__column">
              <a href="#">Follow</a>
            </div>
          </li>
          <li class="people__person">
            <div class="people__column">
              <div class="people__avatar-container">
                <img src="../assets/images/avatar.png" class="people__avatar" />
              </div>
              <div class="people__info">
                <span class="people__username">davidbeckham</span>
                <span class="people__full-name">David Beckham</span>
              </div>
            </div>
            <div class="people__column">
              <a href="#">Follow</a>
            </div>
          </li>
          <li class="people__person">
            <div class="people__column">
              <div class="people__avatar-container">
                <img src="../assets/images/avatar.png" class="people__avatar" />
              </div>
              <div class="people__info">
                <span class="people__username">davidbeckham</span>
                <span class="people__full-name">David Beckham</span>
              </div>
            </div>
            <div class="people__column">
              <a href="#">Follow</a>
            </div>
          </li>
        </ul>
      </section>
    </main>

    <footer class="footer">
      <nav class="footer__nav">
        <ul class="footer__list">
          <li class="footer__list-item">
            <a href="#" class="footer__link">about us</a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__link">support</a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__link">blog</a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__link">press</a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__link">api</a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__link">jobs</a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__link">privacy</a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__link">terms</a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__link">directory</a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__link">language</a>
          </li>
        </ul>
      </nav>
      <span class="footer__copyright">© 2017 instagram</span>
    </footer>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '../components/Header';

export default {
  name: "Curtidas",
  components: {
    Header
  }
};
</script>


<style>
.people {
  width: 60%;
  border-radius: 3px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.0975);
  margin: 0 auto;
  max-width: 1000px;
}

.people__person {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
}

.people__person:last-child {
  border: none;
}

.people__avatar {
  height: 56px;
  width: 56px;
  border-radius: 50%;
}

.people__column {
  display: flex;
  align-items: center;
}

.people__info {
  margin-left: 15px;
}

.people__username {
  display: flex;
  font-weight: 600;
  align-items: center;
  margin-bottom: 5px;
}

.people__username img {
  margin-left: 5px;
}

.people__full-name {
  color: #999;
}

.people__column a {
  background-color: #3897f0;
  padding: 7px 13px;
  color: white;
  border-radius: 3px;
  font-weight: 600;
  transition: all 0.1s linear;
}

.people__column a:active {
  transform: scale(0.95);
}

.people__username img {
  transition: all 0.3s linear;
}

.people__person:hover .people__username img {
  transform: rotate(1turn);
}
</style>