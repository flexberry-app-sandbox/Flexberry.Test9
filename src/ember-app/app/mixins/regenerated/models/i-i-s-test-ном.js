import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  нома: DS.attr('string'),
  контр: DS.belongsTo('i-i-s-test-контр', { inverse: null, async: false })
});

export let ValidationRules = {
  нома: {
    descriptionKey: 'models.i-i-s-test-ном.validations.нома.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контр: {
    descriptionKey: 'models.i-i-s-test-ном.validations.контр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('номE', 'i-i-s-test-ном', {
    нома: attr('Нома', { index: 0 }),
    контр: belongsTo('i-i-s-test-контр', 'Контр', {
      когнтра: attr('Когнтра', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'когнтра' })
  });

  modelClass.defineProjection('номL', 'i-i-s-test-ном', {
    нома: attr('Нома', { index: 0 }),
    контр: belongsTo('i-i-s-test-контр', 'Когнтра', {
      когнтра: attr('Когнтра', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
