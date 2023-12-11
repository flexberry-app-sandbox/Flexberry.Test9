import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as тестMixin
} from '../mixins/regenerated/models/i-i-s-test-тест';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(тестMixin, Validations, {
});

defineProjections(Model);

export default Model;
