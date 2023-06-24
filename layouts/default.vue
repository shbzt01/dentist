<template>
  <v-app light id="content">
    <!-- <v-app-bar elevation="0" absolute height="150" color="transparent">
      <nuxt-link to="/">
        <v-img
          src="dentist/tooth.png"
          class="mx-2"
          max-height="300"
          max-width="300"
          contain
        ></v-img>
      </nuxt-link>
    </v-app-bar> -->
    <v-container fluid>
      <Nuxt />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      title: "Vuetify.js",
    };
  },
};
</script>
<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
#content {
  background-image: linear-gradient(
      130deg,
      rgba($first-color, 0.5),
      rgba($first-color, 0.5)
    ),
    url("~/assets/img/background.jpg");
  // background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center left;
  @media #{map-get($display-breakpoints, 'sm-and-down')}{
    background-position: center center;
  }
  // max-height: 100vh;
}
h1 {
  color: white;
}
</style>
