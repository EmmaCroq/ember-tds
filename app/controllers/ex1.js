import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  MAX = 100;
  @tracked content = "Default";
  @tracked info = "";

  @action
  clear() {
    this.content = "";
  }
  @action
  save() {
    console.log(this.content);
  }
  @action
  update() {

  }
  get style() {
    if(this.size < 50 && this.size > 20 ){
      return 'alert-warning';
    } else if (this.size < 20) {
      return 'alert-danger';
    } else {
      return 'alert-primary';
    }
  }
  get size() {
    return this.MAX - this.content.length;
  }
}
