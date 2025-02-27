import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FilesTable extends Component {
  @tracked selected = [];

  toSentenceCase(str = '') {
    return str?.length
      ? `${str.charAt(0).toUpperCase()}${str.slice(1, str.length)}`
      : '';
  }

  get areAllSelected() {
    return this.selected.length === this.args.files.length;
  }

  get isDownloadDisabled() {
    const pendingAvailable = this.pendingAvailable;
    const noDownloadsAvailable =
      this.selected.length === pendingAvailable.length;

    return !this.selected.length || noDownloadsAvailable;
  }

  get isIndeterminate() {
    const { files } = this.args;
    return Boolean(this.selected.length && this.selected.length < files.length);
  }

  get pendingAvailable() {
    return this.args.files.filter(
      (f) => f.status === 'scheduled' && this.selected.includes(f.name),
    );
  }

  get selectedLength() {
    return this.selected?.length
      ? `Selected ${this.selected.length}`
      : 'None selected';
  }

  @action
  getIsSelected({ name }) {
    return this.selected.includes(name);
  }

  @action
  onChangeSelectAll() {
    const { files } = this.args;
    const areAllSelected = this.selected.length === files.length;

    if (!areAllSelected) {
      this.selected = files.map((file) => file.name);
    } else {
      this.selected = [];
    }
  }

  @action
  onClickDownload() {
    const { files } = this.args;

    const filesToDownload = files.filter(
      ({ name, status }) =>
        this.selected.includes(name) && status === 'available',
    );

    const message = filesToDownload.reduce(
      (arr, file) => arr + `${file.device}\n  · (${file.path}) \n`,
      'Downloading the following:\n',
    );
    alert(message);
  }

  @action
  onToggleRow({ name }) {
    if (this.selected.includes(name)) {
      this.selected = this.selected.filter((id) => id !== name);
    } else {
      this.selected = this.selected.concat(name);
    }
  }
}
