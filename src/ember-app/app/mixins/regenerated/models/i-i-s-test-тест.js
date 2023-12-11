import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  хЗ: DS.attr('i-i-s-test-хуй'),
  ном: DS.belongsTo('i-i-s-test-ном', { inverse: null, async: false })
});

export let ValidationRules = {
  хЗ: {
    descriptionKey: 'models.i-i-s-test-тест.validations.хЗ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ном: {
    descriptionKey: 'models.i-i-s-test-тест.validations.ном.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('тестE', 'i-i-s-test-тест', {
    хЗ: attr('ХЗ', { index: 0 }),
    ном: belongsTo('i-i-s-test-ном', 'Ном', {
      нома: attr('Нома', { index: 2, hidden: true }),
      контр: belongsTo('i-i-s-test-контр', '', {
        когнтра: attr('когнтра', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'нома' })
  });

  modelClass.defineProjection('тестL', 'i-i-s-test-тест', {
    хЗ: attr('ХЗ', { index: 0 }),
    ном: belongsTo('i-i-s-test-ном', 'Нома', {
      нома: attr('Нома', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
