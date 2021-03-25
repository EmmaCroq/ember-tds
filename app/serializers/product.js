import JSONSerializer from '@ember-data/serializer/json';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class ProductSerializer extends JSONSerializer.extend(
  EmbeddedRecordsMixin
) {
  attrs = {
    packs: { embedded: 'always' },
  };
}
