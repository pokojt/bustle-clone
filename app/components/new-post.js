import Ember from 'ember';

export default Ember.Component.extend({
  newPostForm: false,
  actions:  {
    postFormShow() {
      this.set('newPostForm', true);
    },
    save() {
      var params = {
        img: this.get('img') ? this.get('img') : "",
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        date: this.get('date') ? this.get('date') : "",
        content: this.get('content') ? this.get('content') : "",
      };
      this.set('newPostForm', false);
      this.sendAction('save', params);
    }

  }
});
