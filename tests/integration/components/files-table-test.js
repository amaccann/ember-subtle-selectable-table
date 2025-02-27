import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-subtle-selectable-table/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | files-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('files', []);

    await render(hbs`<FilesTable @files={{this.files}} />`);

    assert
      .dom()
      .hasText('None selected Download selected Name Device Path Status');
  });
});
