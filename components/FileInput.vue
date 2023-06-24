<template>
  <div>
    <v-file-input
      v-model="files"
      color="deep-purple accent-4"
      counter
      :label="label"
      placeholder="Select your files"
      prepend-icon="mdi-paperclip"
      @change="imgcreate"
      x-large
      filled
      multiple
      :show-size="1000"
    >
      <template v-slot:selection="{ index, text }">
        <v-chip v-if="index < 2" color="deep-purple accent-4" dark label large>
          {{ text }}
        </v-chip>

        <span
          v-else-if="index === 2"
          class="text-overline grey--text text--darken-3 mx-2"
        >
          +{{ files.length - 2 }} File(s)
        </span>
      </template>
    </v-file-input>
  </div>
</template>
<script>
export default {
  props: ["label"],
  data: () => ({
    files: [],
    image:''
  }),
  methods:{
    hello(){

    },
    imgcreate(){
      this.$emit('input', this.files[0]);
    },

  }
};
</script>
<style lang="scss">
.v-file-input {
  width: 200% !important;
}
.v-input__slot {
  background: rgba(256, 256, 256, 0.9) !important;
  padding: 20px 12px 20px 12px !important;
  font-size: 20pt;
}
.v-label {
  font-size: 18pt;
}
.v-input__icon--append .v-icon {
  color: purple;
}
.v-icon.v-icon {
  font-size: 40pt;
}
</style>
