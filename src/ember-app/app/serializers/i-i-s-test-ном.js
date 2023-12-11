import { Serializer as номSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-ном';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(номSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
