import {
  defineNamespace,
  defineProjections,
  Model as тестMixin
} from '../mixins/regenerated/models/i-i-s-test-тест';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(тестMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
