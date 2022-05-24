/* eslint-disable */
const _ = window._;

const store = {
  data: {
    // visualViewport: document.getElementById('diagram'),
    // codeEditorTheme:'darcula'
  },

  init() {},

  set(path, value, local = false) {
    _.set(this.data, path, value);
    if (local) {
      if (typeof value === 'object') value = JSON.stringify(value);
      localStorage.setItem(path, value);
    }
  },

  get(path, local = false) {
    let value = _.get(this.data, path)
    if (local && typeof value === 'undefined') {
      value = localStorage.getItem(path);
      if (typeof value !== 'undefined') {
        value = JSON.parse(value);
        _.set(this.data, path, value);
      }
    }

    return value;
  },
};

export default store;
