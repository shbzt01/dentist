<template>
  <v-container fluid class="center-items d-flex align-center justify-left">
    <div class="d-block">
      <!-- <center> -->
        <v-col cols="12" md="8">
          <h1 :class="{'display-4':$vuetify.breakpoint.mdAndUp,'display-3':$vuetify.breakpoint.smAndDown}" class="font-weight-black">Submit Your Art Here</h1>
          <br />
          <v-btn
            :class="{'display-2':$vuetify.breakpoint.mdAndUp,'headline':$vuetify.breakpoint.smAndDown}" class="main-btn text--black font-weight-bold"
            rounded
            elevation="2"
            x-large
            color="white"
            to="/choose-name" nuxt
            >Start Process</v-btn
          >
        </v-col>
      <!-- </center> -->
    </div>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';
.center-items {
  min-height: 100vh;
}
.main-btn {
  padding: 50px !important;
  @media #{map-get($display-breakpoints, 'sm-and-down')}{
    padding: 20px !important;
  }
}
</style>
