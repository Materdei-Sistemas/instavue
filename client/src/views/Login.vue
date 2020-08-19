<template>
  <div>
    <main class="login">
      <div class="login__column">
          <img 
              src="../assets/images/phone.png"
              alt="Phone Image"
              title="Phone Image"
              class="login__phone-image"
          />                
      </div>
      <section class="login__column">
          <div class="login__section login__sign-in">
              <img 
                  src="../assets/images/logo.png"
                  alt="Logo"
                  title="Logo"
                  class="login__logo"
              />
              <form method="GET" action="feed.html" class="login__form">
                  <div class="login__input-container">
                      <input 
                          type="text"
                          name="username"
                          placeholder="Username"
                          required
                          class="login__input"
                      />
                  </div>
                  <div class="login__input-container">
                      <input 
                          type="password"
                          name="password"
                          placeholder="Password"
                          required
                          class="login__input" 
                      />
                      <a href="#" class="login__form-link">Forgot?</a>
                  </div>
                  <div class="login__input-container">
                      <input
                          type="submit"
                          value="Log in"
                          class="login__input login__input--btn"
                      />
                  </div>
              </form>
              <span class="login__divider">or</span>
              <a class="login__fb-link" href="#">
                  <i class="fa fa-facebook-square fa-lg" aria-hidden="true"></i> Log in with Facebook
              </a>
          </div>
          <div class="login__section login__sign-up">
              <span class="login__text">
                  Don't have an account? 
                  <a href="#" class="login__link">
                      Sign up
                  </a>
              </span>
          </div>
          <div class="login__section login__section--transparent login__app">
              <span class="login__text">
                  Get the app.
              </span>
              <div class="login__appstores">
                  <img 
                      src="../assets/images/ios.png"
                      alt="iOS"
                      title="Get the app!"
                      class="login__appstore" 
                  />
                  <img 
                      src="../assets/images/android.png"
                      alt="Android"
                      title="Get the app!"
                      class="login__appstore" 
                  />
              </div>
          </div>
      </section>
    </main>

    <Footer />

  </div>
</template>

<script>
import Footer from '../components/Footer';

export default {
  name: 'Login',
  components: {
    Footer
  }
}
</script>

<style>
.no-padding{
    padding:0;
}

.login{
    width: 73%;
    margin:0 auto;
    margin-top: 50px;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.login__column{
    width:50%;
}

.login__column:last-child{
    margin-left: 30px;
}

.login__section{
    background-color: white;
    border: 1px solid rgba(0,0,0,.0975);
    margin-bottom: 10px;
}

.login__sign-in{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:0 40px;
}

.login__logo{
    margin-top: 30px;
}

.login__form{
    margin-top: 10px;
    width: 100%;
}

.login__input{
    height: 35px;
    width: 100%;
    border:1px solid rgba(0,0,0,.0975);
    border-radius: 5px;
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 14px;
}

.login__input:first-child{
    margin-bottom: 10px;
}

.login__input--btn{
    border:0;
    color:white;
    font-weight: 600;
    background-color: #3897F0;
}

.login__input-container{
    position: relative;
}

.login__form-link{
    position: absolute;
    top:10px;
    right:10px;
    color:#003569;
}

.login__divider{
    margin-bottom: 20px;
    margin-top: 10px;
    text-transform: uppercase; 
    font-weight: 600;
    color:#999;
    position: relative;
    width: 100%;
    text-align: center;
}

.login__divider:after{
    content:'';
    width: 40%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top:5px;
    right:0;
}

.login__divider:before{
    content:'';
    width: 40%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top:5px;
    left:0;
}

.login__fb-link{
    margin-bottom: 45px;
    color:#385185;
}

.login__sign-up{
    padding:30px 0;
    text-align: center;
}

.login__sign-up a{
    color:#3897f0;
}

.login__section--transparent{
    background-color: transparent;
    border:none;
}

.login__app{
    padding-top: 20px;
    text-align: center;
}

.login__appstores{
    display: flex;
    justify-content: space-between;
    margin-top:20px;
    padding:0 32px;
}

.login__appstore{
    height:40px;
}
</style>