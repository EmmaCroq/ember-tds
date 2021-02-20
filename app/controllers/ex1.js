import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  MAX = 100;
  @tracked content = 'Ecrivez votre note ici';
  @tracked info = '';
  @tracked hidden = false;

  @action
  clear() {
    this.content = '';
    this.hidden = false;
  }
  @action
  save() {
    console.log(this.content);
  }
  @action
  update() {
    if (this.size == 99 || this.size == 100) {
      this.hidden = false;
    } else {
      this.hidden = true;
      this.info = 'Note modifiée';
    }
  }

  get style() {
    if (this.size < 50 && this.size > 20) {
      return 'alert-warning';
    } else if (this.size < 20) {
      return 'alert-danger';
    } else {
      return 'alert-info';
    }
  }
  get size() {
    return this.MAX - this.content.length;
  }
}
