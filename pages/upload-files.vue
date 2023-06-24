<template>
  <v-container fluid class="center-items d-flex align-center justify-center">
    <div class="d-block">
      <center>
        <h1
          :class="{
            'display-3': $vuetify.breakpoint.mdAndUp,
            'display-1': $vuetify.breakpoint.smAndDown,
          }"
          class="font-weight-black"
        >
          Upload your files
        </h1>
        <br />
        <FileInput label="file 1"/>
        <FileInput label="file 2"/>
        <FileInput label="file 3"/>
        <br />
        <br />
      </center>
      <v-card-actions>
        <v-btn
          color="white"
          elevation="2"
          x-large
          width="150"
          to="/multi-choice"
          nuxt
        >
          <v-scroll-y-transition>
            <div class="text-center font-weight-bold">back</div>
          </v-scroll-y-transition>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="white" elevation="2" x-large width="150" to="/show-data" nuxt>
          <v-scroll-y-transition>
            <div class="text-center font-weight-bold">
              Next
            </div>
          </v-scroll-y-transition>
        </v-btn>
      </v-card-actions>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      question: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~vuetify/src/styles/settings/_variables";
.center-items {
  min-height: 100vh;
}
.red {
  background-color: red;
}
.main-btn {
  padding: 50px !important;
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    padding: 20px !important;
  }
}
</style>
