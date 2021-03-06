import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
// import {initialize} from 'ember-form-master-2000/initializers/fm-initialize';

moduleForComponent('fm-field', 'Integration | Component | fm-field', {
  integration: true,
  setup: function() {
    this.container.inject = this.container.injection;
    // initialize(null, this.container);
  }
});

test('renders properly', function(assert) {
  this.render(hbs `{{fm-field}}`);
  assert.ok(this.$('.form-group').length > 0, 'The field element did not render');
  assert.ok(this.$('input').length > 0, 'A form element was not rendered');
});
//
// test('it allows classNames to be passed in', function(assert) {
//   this.render(hbs `{{fm-field classNames="example"}}`);
//   assert.ok(this.$('.example').length > 0, 'The class name was not set properly');
// });
//
// test('it renders a label if a label is passed in', function(assert) {
//   this.render(hbs `{{fm-field label="Howdy"}}`);
//   assert.ok(this.$('label').length === 1, 'A label tag was not rendered');
//   assert.ok(this.$('label').text() === 'Howdy', 'The label text was incorrect');
// });
//
// test('it does not render a label by default', function(assert) {
//   this.render(hbs `{{fm-field}}`);
//   assert.ok(this.$('label').length === 0, 'A label was rendered when it should not have been');
// });
//
// test('type="select" renders a select', function(assert) {
//   this.render(hbs `{{fm-field type="select"}}`);
//   assert.ok(this.$('select').length === 1, 'A select was not rendered when it should have been');
// });
//
// test('type="textarea" renders a textarea', function(assert) {
//   this.render(hbs `{{fm-field type="textarea"}}`);
//   assert.ok(this.$('textarea').length === 1, 'A textarea was not rendered when it should have been');
// });
//
// test('it allows data attributes to be passed in', function(assert) {
//   this.render(hbs `{{fm-field another="hi" data-test="master-2000"}}`);
//   assert.ok(this.$("input[data-test='master-2000']").length === 1, 'The data attribute was not rendered as expected');
// });
//
// test('allows HTML bound attributes for labels', function(assert) {
//   this.set('htmlLabel', "<span class='html-label'>TEST</span>");
//   this.render(hbs `{{fm-field label=htmlLabel}}`);
//   assert.ok(this.$('span.html-label').length === 1, 'The fm-field did not properly render HTML within a label');
// });
//
// test('uses the label to generate a default for and id attribute for textfields', function(assert) {
//   this.render(hbs `{{fm-field label="Examples Here"}}`);
//   assert.equal(this.$('label').attr('for'), 'Examples-Here');
//   assert.equal(this.$('input').attr('id'), 'Examples-Here');
// });
//
// test('uses the label to generate a default for and id attribute for select elements', function(assert) {
//   this.set('label', "<b>Select's are awesome!</b>");
//   this.render(hbs `{{fm-field type="select" label=label}}`);
//   assert.equal(this.$('label').attr('for'), 'Selects-are-awesome');
//   assert.equal(this.$('select').attr('id'), 'Selects-are-awesome');
// });
//
// test('uses the label to generate a default for and id attribute for textarea elements', function(assert) {
//   this.render(hbs `{{fm-field type="textarea" label="<b>Téxtarea's :-)</b>"}}`);
//   assert.equal(this.$('label').attr('for'), 'Téxtareas--');
//   assert.equal(this.$('textarea').attr('id'), 'Téxtareas--');
// });
//
// test('allows users to override the for/id attributes by passing a specific id', function(assert) {
//   this.render(hbs `{{fm-field inputId="example-id" label="My Label!"}}`);
//   assert.equal(this.$('label').attr('for'), 'example-id');
//   assert.equal(this.$('input').attr('id'), 'example-id');
// });
