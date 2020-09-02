<template>
  <div>
    <main class="edit-profile">
      <section class="profile-form">
        <header class="profile-form__header">
          <div class="profile-form__avatar-container">
            <img src="../assets/images/avatar.jpg" class="profile-form__avatar" />
          </div>
          <h4 class="profile-form__title">serranoarevalo</h4>
        </header>
        <form action="#" class="edit-profile__form">
          <div class="edit-profile__form-row">
            <label for="name" class="edit-profile__label">Name</label>
            <input
              id="name"
              type="text"
              value="Nicolás Serrano Arévalo"
              class="edit-profile__input"
            />
          </div>
          <div class="edit-profile__form-row">
            <label for="username" class="edit-profile__label">Username</label>
            <input type="text" id="username" class="edit-profile__input" />
          </div>
          <div class="edit-profile__form-row">
            <label for="website" class="edit-profile__label">Website</label>
            <input type="url" id="website" class="edit-profile__input" />
          </div>
          <div class="edit-profile__form-row">
            <label for="bio" class="edit-profile__label">Bio</label>
            <textarea id="bio" class="edit-profile__textarea"></textarea>
          </div>
          <div class="edit-profile__form-row">
            <label for="email" class="edit-profile__label">Email</label>
            <input type="email" class="edit-profile__input" id="email" />
          </div>
          <div class="edit-profile__form-row">
            <label for="phone-number" class="edit-profile__label">Phone Number</label>
            <input type="text" class="edit-profile__input" id="phone-number" />
          </div>
          <div class="edit-profile__form-row">
            <label for="gender" class="edit-profile__label">Gender</label>
            <select id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="whatever">Whatever</option>
            </select>
          </div>
          <div class="edit-profile__form-row">
            <span class="edit-profile__label">Similar Account Suggestions</span>
            <input type="checkbox" id="similar" checked />
            <label for="similar">
              Include your account when recommending similar accounts people might want to follow.
              <a
                href="#"
              >[?]</a>
            </label>
          </div>
          <div class="edit-profile__form-row">
            <label class="edit-profile__label"></label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style>
.edit-profile {
  display: flex;
  justify-content: center;
}

.profile-form {
  width: 90%;
  max-width: 1000px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.0975);
  border-radius: 3px;
  padding: 35px 0;
}

.profile-form__header {
  display: flex;
  align-items: center;
  margin-left: 125px;
  margin-bottom: 50px;
}

.profile-form__avatar {
  height: 38px;
  width: 38px;
  border-radius: 50%;
  margin-right: 35px;
}

.profile-form__title {
  font-size: 24px;
}

.edit-profile__form {
  padding-left: 50px;
}

.edit-profile__form-row {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}

.edit-profile__label {
  width: 120px;
  display: block;
  font-weight: 600;
  text-align: right;
  margin-right: 35px;
}

.edit-profile__input,
.edit-profile__textarea,
.edit-profile__form-row select {
  border-radius: 3px;
  padding: 7px 10px;
  border: 1px solid rgba(0, 0, 0, 0.0975);
  width: 320px;
  font-size: 16px;
  resize: vertical;
  background-color: white;
}

.edit-profile__form-row select {
  width: 120px;
  height: 30px;
}

label[for="similar"] {
  width: 400px;
  margin-left: 30px;
}

label[for="similar"] a {
  color: #3897f0;
}

input[type="submit"] {
  background-color: #3897f0;
  color: white;
  border: 0;
  padding: 5px 20px;
  font-weight: 600;
  font-size: 14px;
  border-radius: 3px;
}
</style>