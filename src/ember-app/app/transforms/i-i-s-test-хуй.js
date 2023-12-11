import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import хуйEnum from '../enums/i-i-s-test-хуй';

export default FlexberryEnum.extend({
  enum: хуйEnum,
  sourceType: 'IIS.Test.хуй'
});
