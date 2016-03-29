import DS from 'ember-data';

export default DS.Model.extend({
  img: DS.attr(),
  title: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  content: DS.attr(),
});
