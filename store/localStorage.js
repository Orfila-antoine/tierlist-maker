export const state = () => ({
  list: {},
  updated: 0
});

export const mutations = {
  add: (state, newImage) => state.list[newImage.name] = newImage.url,
  remove: (state, {image}) => state.list[image.name] = null,
  increase: state => state.updated++,
  reset: state => {
    state.list = {};
    state.updated = 0;
  }
};
