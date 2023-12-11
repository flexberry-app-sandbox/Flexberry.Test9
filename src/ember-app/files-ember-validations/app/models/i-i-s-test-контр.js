import {
  defineNamespace,
  defineProjections,
  Model as контрMixin
} from '../mixins/regenerated/models/i-i-s-test-контр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(контрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
