import Ember from 'ember';

export default Ember.Component.extend({
  editPostForm: false,
  actions: {
    editFormShow() {
      this.set('editPostForm', true);
    },
    edit(post) {
      var params = {
        img: this.get('img'),
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
      };
      this.set('editPostForm', false);
      this.sendAction('edit', post, params);
      }
    }
});
