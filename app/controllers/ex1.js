import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  MAX = 100;
  @tracked content;
  @tracked info;

  @action
  clear() {
    this.clear();
  }
  @action
  save() {
    this.save();
  }
  @action
  update() {
    this.update();
  }
  getStyle() {
    this.getElementById('container'), 'font-size';
  }

  getSize() {
    this.querySelector('.selector');
  }
}
