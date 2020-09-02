<template>
  <nav class="navigation">
    <a href="/">
      <img 
          src="../assets/images/navLogo.png"
          alt="logo"
          title="logo"
          class="navigation__logo"
      />
    </a>
    <div class="navigation__search-container">
      <i class="fa fa-search"></i>
      <input type="text" placeholder="Search">
    </div>
    <div class="navigation__icons">
      <router-link to="/explore" class="navigation__link">
          <i class="fa fa-compass"></i>
      </router-link>
      <router-link to="/curtidas" class="navigation__link">
          <i class="fa fa-heart-o"></i>
      </router-link>
      <router-link to="/profile" class="navigation__link">
        <i class="fa fa-user-o"></i>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.navigation{
    background-color:white;
    height: 80px;
    position: fixed;
    width: 100%;
    top:0;
    border-bottom:1px solid rgba(0,0,0,.0975);
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0px 50px;
    box-sizing: border-box;
    z-index:2;
}

.navigation__search-container{
    position: relative;
}

.navigation__search-container input{
    background-color: #FAFAFA;
    padding:3px 20px;
    padding-left: 25px;
    height: 30px;
    box-sizing: border-box;
    border:1px solid rgba(0,0,0,.0975);
    border-radius: 3px;
    font-size: 14px;
}

.navigation__search-container i{
    position: absolute;
    top:10px;
    left:10px;
    font-size: 11px;
    color:rgba(0,0,0,0.5);
}

.navigation__search-container input:focus{
    outline: none;
}

.navigation__search-container input::placeholder{
    text-align: center;
}

.navigation__link{
    margin-left: 30px;
    color:rgba(0,0,0,.5);
    text-decoration: none;
    font-size:22px;
}
</style>