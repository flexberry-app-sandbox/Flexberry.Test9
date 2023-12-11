import { Serializer as контрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-контр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(контрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
