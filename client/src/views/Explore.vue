<template>
  <div>
    <Header />
    <main class="explore">
      <section class="people">
        <ul class="people__list">
          <li v-for="user in users" v-bind:key="user.email" class="people__person">
            <div class="people__column">
              <div class="people__avatar-container">
                <img src="images/avatar.jpg" class="people__avatar" />
              </div>
              <div class="people__info">
                <span class="people__username">{{user.first.toLowerCase()}}{{user.last.toLowerCase()}}</span>
                <span class="people__full-name">{{user.first}} {{user.last}}</span>
              </div>
            </div>
            <div class="people__column">
              <a href="#">Follow</a>
            </div>
          </li>
        </ul>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
  import Header from '../components/Header';
  import Footer from '../components/Footer';

  export default {
    components: {
      Footer,
      Header
    },
    data() {
      return {
        users: []
      };
    },
    async created() {
      await fetch("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
        .then((response) => {
          response.json().then(users => {
            this.users = users;
          });
        });
    }
  }
</script>

<style>
  .people {
    width: 60%;
    border-radius: 3px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, .0975);
    margin: 0 auto;
    max-width: 1000px;
  }

  .people__person {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, .0975);
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
    transition: all .1s linear;
  }

  .people__column a:active {
    transform: scale(.95);
  }

  .people__username img {
    transition: all .3s linear;
  }

  .people__person:hover .people__username img {
    transform: rotate(1turn);
  }
</style>