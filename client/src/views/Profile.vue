<template>
  <div>
    <Header />
    <main class="profile-container">
      <section class="profile">
        <header class="profile__header">
          <div class="profile__avatar-container">
            <img src="../assets/images/android.png" class="profile__avatar" />
          </div>
          <div class="profile__info">
            <div class="profile__name">
              <h1 class="profile__title">serranoarevalo</h1>
              <a href="edit-profile.html" class="profile__button u-fat-text">Edit profile</a>
              <i class="fa fa-cog fa-2x" id="cog"></i>
            </div>
            <ul class="profile__numbers">
              <li class="profile__posts">
                <span class="profile__number u-fat-text">10</span> posts
              </li>
              <li class="profile__followers">
                <span class="profile__number u-fat-text">40</span> followers
              </li>
              <li class="profile__following">
                <span class="profile__number u-fat-text">134</span> following
              </li>
            </ul>
            <div class="profile__bio">
              <span class="profile__full-name u-fat-text">Nicolás Serrano Arévalo</span>
              <p
                class="profile__full-bio"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit rerum consequuntur aperiam, dicta delectus nihil voluptas explicabo sapiente quisquam. Eius ipsam asperiores excepturi maiores, atque voluptatum sed fuga esse molestiae.</p>
              <a
                href="http://serranoarevalo.com"
                class="profile__link u-fat-text"
              >serranoarevalo.com</a>
            </div>
          </div>
        </header>
        <div class="profile__pictures">
          <a v-for="picture in pictures" v-bind:key="picture.id" href="image-detail.html" class="profile-picture">
            <img v-bind:src="picture.src.tiny" />
            <div class="profile-picture__overlay">
              <span class="profile-picture__number">
                <i class="fa fa-heart"></i> 450
              </span>
              <span class="profile-picture__number">
                <i class="fa fa-comment"></i> 39
              </span>
            </div>
          </a>
          
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: 'Profile',
  components: {
    Header,
    Footer
  },
  
  data(){

    return{
      pictures: [{
  id: 2014422,
  width: 3024,
  height: 3024,
  url: "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
  src: {
    original: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
    large2x: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    large: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    medium: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
    small: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
    portrait: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    landscape: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tiny: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
  }
}
        
      ]
    };
  },
  async created() {
      await fetch("https://api.pexels.com/v1")
        .then((response) => {
          response.img().then(pictures => {
            this.pictures = pictures;
          });
        });
    }
};
</script>
<style>
.profile {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
}

.profile__header {
  display: flex;
  margin-bottom: 45px;
}

.profile__avatar-container {
  width: 30%;
  display: flex;
  justify-content: center;
}

.profile__name {
  display: flex;
  align-items: center;
}

.profile__title {
  margin-right: 20px;
  font-size: 32px;
  font-weight: 300;
}

.profile__button {
  margin-right: 20px;
  border: 1px solid rgba(0, 0, 0, 0.0975);
  color: black;
  padding: 5px 20px;
  border-radius: 3px;
  transition: all 0.5s ease-in-out;
}

.profile__button:hover {
  color: white;
  background-color: #3897f0;
}

.profile__info {
  width: 70%;
}

.profile__avatar {
  width: 152px;
  height: 152px;
  border-radius: 50%;
}

.profile__name,
.profile__numbers {
  display: flex;
  margin-bottom: 20px;
}

.profile__full-bio {
  display: inline;
}

.profile__numbers li {
  margin-right: 20px;
  font-size: 16px;
}

.profile__link {
  color: #003569;
}

.profile-picture {
  width: 32%;
  display: block;
  position: relative;
  margin-bottom: 17px;
}

.profile-picture__picture {
  width: 100%;
}

.profile-picture__overlay {
  background-color: rgba(0, 0, 0, 0.3);
  width: 293px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.profile-picture:hover .profile-picture__overlay {
  opacity: 1;
}

.profile-picture__number:first-child {
  margin-right: 20px;
}

.profile__pictures {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#cog {
  transition: all 0.5s ease-in-out;
}

#cog:hover {
  transform: rotate(1turn);
}

.fa-heart {
  animation: bump 0.6s infinite linear;
}

@keyframes bump {
  to {
    transform: scale(0.8);
  }
  from {
    transform: none;
  }
}

.popUp {
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 999;
  display: none;
}

.popUp__container {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
}

.popUp i {
  color: white;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}

.popUp__button {
  display: block;
  background-color: white;
  width: 450px;
  text-align: center;
  padding: 20px 0;
  color: black;
}

.popUp__button:first-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
}

.popUp__button:hover {
  background-color: #efefef;
}
</style>
