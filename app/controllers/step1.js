import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Step1Controller extends Controller {
  dispoItems = [];
  includeItems = [];
  @tracked dispoItems_ = [];
  @tracked includeItems_ = [];

  @action changeDispo(elements) {
    this.dispoItems_ = elements;
  }

  @action changeIncluded(elements) {
    this.includeItems_ = elements;
  }

  @action add(source, dest, what) {
    dest.pushObjects(what);
    source.removeObjects(what);
  }
}
