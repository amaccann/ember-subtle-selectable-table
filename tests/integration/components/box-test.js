import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-subtle-selectable-table/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | box', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Box />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Box>
        template block text
      </Box>
    `);

    assert.dom().hasText('template block text');
  });
});
