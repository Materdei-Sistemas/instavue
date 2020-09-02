<template>
  <div>
    <Header />
    <main class="feed">
      <section class="photo">
        <header class="photo__header">
          <div class="photo__header-column">
            <img class="photo__avatar" src="../assets/images/avatar.jpg" />
          </div>
          <div class="photo__header-column">
            <span class="photo__username">serranoarevalo</span>
            <span class="photo__location">European Art of Living Center - Bad Antogast</span>
          </div>
        </header>
        <div class="photo__file-container">
          <img class="photo__file" src="../assets/images/feedPhoto.jpg" />
        </div>
        <div class="photo__info">
          <div class="photo__icons">
            <span class="photo__icon">
              <i class="fa fa-heart-o heart fa-lg"></i>
            </span>
            <span class="photo__icon">
              <i class="fa fa-comment-o fa-lg"></i>
            </span>
          </div>
          <span class="photo__likes">35 likes</span>
          <ul class="photo__comments">
            <li class="photo__comment">
              <span class="photo__comment-author">serranoarevalo</span>wow this is great!
            </li>
            <li class="photo__comment">
              <span class="photo__comment-author">lynn</span>no is not!
            </li>
          </ul>
          <span class="photo__time-ago">11 hours ago</span>
          <div class="photo__add-comment-container">
            <textarea placeholder="Add a comment..." class="photo__add-comment"></textarea>
            <i class="fa fa-ellipsis-h"></i>
          </div>
        </div>
      </section>
      <section class="photo">
        <header class="photo__header">
          <div class="photo__header-column">
            <img class="photo__avatar" src="../assets/images/avatar.jpg" />
          </div>
          <div class="photo__header-column">
            <span class="photo__username">serranoarevalo</span>
            <span class="photo__location">European Art of Living Center - Bad Antogast</span>
          </div>
        </header>
        <div class="photo__file-container">
          <img class="photo__file" src="../assets/images/feedPhoto.jpg" />
        </div>
        <div class="photo__info">
          <div class="photo__icons">
            <span class="photo__icon">
              <i class="fa fa-heart-o heart fa-lg"></i>
            </span>
            <span class="photo__icon">
              <i class="fa fa-comment-o fa-lg"></i>
            </span>
          </div>
          <span class="photo__likes">35 likes</span>
          <ul class="photo__comments">
            <li class="photo__comment">
              <span class="photo__comment-author">serranoarevalo</span>wow this is great!
            </li>
            <li class="photo__comment">
              <span class="photo__comment-author">lynn</span>no is not!
            </li>
          </ul>
          <span class="photo__time-ago">11 hours ago</span>
          <div class="photo__add-comment-container">
            <textarea placeholder="Add a comment..." class="photo__add-comment"></textarea>
            <i class="fa fa-ellipsis-h"></i>
          </div>
        </div>
      </section>
    </main>
    
    <Footer />

  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  name: 'Feed',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.feed{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.photo{
    width:60%;
    background-color: white;
    border-radius: 5px;
    border:1px solid rgba(0,0,0,.0975);
    max-width: 800px;
    margin-bottom: 40px;
}

.photo__header{
    padding:15px 20px;
    display: flex;
    align-items: center;
    border-bottom:1px solid rgba(0,0,0,.0975);
}

.photo__avatar{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right:15px;
}

.photo__username{
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
}

.photo__file{
    max-width: 100%;
}

.photo__info{
    padding:20px 20px 0 20px;
}

.photo__icons{
    margin-bottom: 10px;
    font-size: 18px;
}

.photo__icon:first-child{
    margin-right:10px;
}

.photo__likes{
    font-weight: 600;
    margin-bottom: 10px;
    display: block;
}

.photo__comment{
    margin-bottom: 10px;
}

.photo__comment-author{
    font-weight: 600;
    margin-right: 5px;
}

.photo__time-ago{
    color:#999;
    text-transform: uppercase;
    font-size: 10px;
    padding-bottom: 10px;
    display: block;
    border-bottom:1px solid rgba(0,0,0,.0975);
}

.photo__add-comment-container{
    position: relative;
}

.photo__add-comment-container i{
    position: absolute;
    top:17px;
    right:0;
}

.photo__add-comment{
    width: 97%;
    border:0;
    resize: none;
    font-size: 14px;
    padding-top:15px;
}

.photo__add-comment:focus{
    outline: none;
}

.heart-red{
    color:red;
}
</style>