export const state = () => ({
  list: {},
  title: ''
});

export const mutations = {
  add(state, newImage) {
    state.list[newImage.name] = newImage.url;
  },
  remove(state, {image}) {
    state.list[image.name] = null;
  },
  setTitle(state, string) {
    state.title = string;
  }
};
