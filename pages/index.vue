<template>
  <div>
    <h1 class="rainbow-text">Tier-list Maker</h1>
    <dropzone :destroyDropzone="false" :options="options" id="dropZone" ref="el"></dropzone>
    <button v-on:click="storeImages">Create Tier list</button>
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
            storeImages: function () {
                let files = this.$refs.el.getAcceptedFiles();
                this.$store.commit('localStorage/reset');
                files.forEach(file => {
                    let newImage = {};
                    newImage.name = file.upload.filename.match(/([\w#]+)\./g)[0].replace('.', '');
                    newImage.url = file.dataURL;

                    if (this.$store.state.localStorage.list[newImage.name] === undefined) {
                        this.$store.commit('localStorage/add', newImage);
                        this.$store.commit('localStorage/increase');
                    }
                });
                $nuxt.$router.push('/tier-list');
            }
        }
    }
</script>


<style scoped>
  button {
    display: inline-block;
    padding: 0.7em 1.4em;
    margin: 0.1em 0.3em 0.3em 0;
    border-radius: 0.15em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    color: #FFFFFF;
    background-color: #3369ff;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    text-align: center;
    position: relative;
  }

  button:active {
    top: 0.1em;
  }

  @media all and (max-width: 30em) {
     a.button6 {
      display: block;
      margin: 0.4em auto;
    }
  }

  .rainbow-text {
    background-image: repeating-linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red, violet);
    background-size: 800% 800%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 48px;
    font-weight: bold;
    animation: rainbow 10s ease infinite;
  }

  @keyframes rainbow {
    0% {
      background-position: 0 50%
    }
    50% {
      background-position: 100% 25%
    }
    100% {
      background-position: 0 50%
    }
  }
</style>
