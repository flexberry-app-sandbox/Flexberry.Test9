import {
  defineNamespace,
  defineProjections,
  Model as номMixin
} from '../mixins/regenerated/models/i-i-s-test-ном';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(номMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
