<template>
  <div>
    <dropzone :destroyDropzone="false" :options="options" id="foo" ref="el"/>
    <button v-on:click="storeImages">test</button>
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
                    console.log(file);
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

<style scoped></style>
