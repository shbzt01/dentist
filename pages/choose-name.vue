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
          Tooth Name
        </h1>
        <br />
        <v-item-group v-model="name" mandatory>
          <v-container>
            <v-row>
              <v-col v-for="n in names" :key="n">
                <v-item v-slot="{ active, toggle }">
                  <v-btn
                    :color="active ? 'primary' : 'white'"
                    class="main-btn text--black font-weight-bold"
                    rounded
                    elevation="2"
                    small
                    :x-large="$vuetify.breakpoint.smAndDown"
                    :block="$vuetify.breakpoint.smAndDown"
                    @click="toggle"
                  >
                    <v-scroll-y-transition>
                      <div class="text-h4 text-center font-weight-bold">
                        {{ n }}
                      </div>
                    </v-scroll-y-transition>
                  </v-btn>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </center>
      <v-card-actions>
        <v-btn color="white" elevation="2" x-large width="150" to="/" nuxt>
          <v-scroll-y-transition>
            <div class="text-center font-weight-bold">back</div>
          </v-scroll-y-transition>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="white"
          elevation="2"
          x-large
          width="150"
          :to="{ name: 'upload', params: {  name: names[name] }}"
          nuxt
        >
          <v-scroll-y-transition>
            <div class="text-center font-weight-bold">Next</div>
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
      names: ["Central", "Premandibular"],
      name: 0,
      buccal:'',
      files: {
        buccal: "",
        lingual: "",
        mesial: "",
        distal: "",
      },
      top: "",
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
