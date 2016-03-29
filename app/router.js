import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('story', {path: '/story/:post_id'});
  this.route('admin');
});

export default Router;
