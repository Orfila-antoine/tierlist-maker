<template>
  <div>
    <dropzone :destroyDropzone="false" :options="options" id="foo" ref="el"/>
    <button v-on:click="test">test</button>
  </div>
</template>

<script>
  import Dropzone from 'nuxt-dropzone'
  import 'nuxt-dropzone/dropzone.css'

  export default {
    name: "import.vue",
    data() {
      return {
        options: {
          url: '/',
          methods: 'get',
          resizeWidth: 96,
          resizeHeight: 96,
          acceptedFiles: 'image/*'
        }
      }
    },
    components: {
      Dropzone
    },
    methods: {
      test: function () {
        let files = this.$refs.el.getAcceptedFiles();
        files.forEach(file => {
          let newImage = {};
          console.log(file);
          newImage.name = file.upload.filename.match(/([\w#]+)\./g)[0].replace('.', '');
          newImage.url = file.dataURL;
          if (this.$store.state.image.list[newImage.name] === undefined) {
            this.$store.commit('image/add', newImage);
          }
        });
        $nuxt.$router.push('/tier-list');
      }
    }
  }
</script>

<style scoped></style>
