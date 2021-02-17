export default class contacts {
  datas;
  constructor(datas) {
    this.datas = datas;
  }
  get contacts() {
    return this.datas.filterBy('isDeleted', false);
  }

  get deleteds() {
    return this.datas.filterBy('isDeleted', true);
  }

  get deletedsCount() {
    return this.deleteds.length;
  }
}
