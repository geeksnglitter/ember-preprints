import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('preprint-footer-branded', 'Integration | Component | preprint footer branded', {
  integration: true
});

test('uses provider name', function(assert) {
    const name = 'Social Experiment';
    this.set('model', { name });

    this.render(hbs`{{preprint-footer-branded model=model}}`);

    assert.ok(this.$(`.branded-footer-links:contains('${name}')`).length);
});
