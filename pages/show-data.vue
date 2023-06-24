<template>
  <v-container fluid class="center-items d-flex align-center justify-center">
    <div class="d-block">
      <center>
        <div v-for="d in data" :key="d.id">
          <v-card>
            <v-row>
              <v-col cols="12" class="d-md-flex">
                <v-img
                  :src="
                    'https://sea-turtle-app-2-zkloj.ondigitalocean.app' +
                    d.processed_image
                  "
                  width="300px"
                ></v-img>
                <v-img
                  :src="
                    'https://sea-turtle-app-2-zkloj.ondigitalocean.app' +
                    d.shape_match_image
                  "
                  width="300px"
                ></v-img>
              </v-col>
              <v-col cols="12">
                <span class="subtitle-2"> aspect: {{ d.image_aspect }} </span>
                <br />
                <span class="subtitle-2"> type: {{ d.image_type }} </span>
              </v-col>
              <v-col cols="12" md="6" v-for="(note, i) in d.notes" :key="i">
                <span class="subtitle-2">
                  {{ note.note }}
                </span>
              </v-col>
            </v-row>
          </v-card>
          <br />
          <br />
        </div>
        <div v-if="error">
            <v-row>
              <v-col cols="12">
                <v-alert type="error">there is some errors with the image/s you uploaded</v-alert>
              </v-col>
            </v-row>
          <br />
          <br />
        </div>
        <br />
        <v-progress-circular
          :size="70"
          :width="7"
          color="white"
          v-if="
            data.length <
              Object.entries(this.$route.params.files).filter((i) => i[1] != '')
                .length && !error
          "
          indeterminate
        ></v-progress-circular>
        <br />
        <v-btn
          :class="{
            'text-h4': $vuetify.breakpoint.mdAndUp,
            headline: $vuetify.breakpoint.smAndDown,
          }"
          class="main-btn text--black font-weight-bold"
          rounded
          elevation="2"
          x-large
          color="white"
          to="/"
          nuxt
          >Restart Process</v-btn
        >
      </center>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexPage",
  data() {
    return {
      data: [],
      error: false,
      loading: true,
    };
  },
  created() {
    const vm = this;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    for (const [aspect, image] of Object.entries(
      this.$route.params.files
    ).filter((i) => i[1] != "")) {
      if (image instanceof File) {
        var formData = new FormData();
        formData.append("image_aspect", aspect.toLowerCase());
        formData.append("image_type", this.$route.params.name.toLowerCase());
        formData.append("original_image", image);
        try {
          var resp = axios.post(
            "https://sea-turtle-app-2-zkloj.ondigitalocean.app/engine/api/assessments/",
            formData,
            config
          );
          resp
            .then(function (value) {
              var dataResp = axios.get(
                `https://sea-turtle-app-2-zkloj.ondigitalocean.app/engine/api/assessments/${value.data.id}/`
              );
              dataResp
                .then(function (res) {
                  vm.data.push(res.data);
                })
            })
            .catch(function (error) {
               vm.error = true;
            });
        } catch (error) {
          this.error = true;
        }
      }
    }

    console.log(this.data);
  },
};
</script>
<style lang="scss" scoped>
@import "~vuetify/src/styles/settings/_variables";
.center-items {
  min-height: 100vh;
}
.main-btn {
  padding: 50px !important;
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    padding: 20px !important;
  }
}
</style>
