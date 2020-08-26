<template>
  <div>
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
export default {};
</script>

<style>
.footer {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
}

.footer__list {
  display: flex;
  flex-wrap: wrap;
}

.footer__list-item {
  margin-right: 15px;
}

.footer__link {
  color: #003569;
}

.footer__copyright {
  color: #999;
}
</style>