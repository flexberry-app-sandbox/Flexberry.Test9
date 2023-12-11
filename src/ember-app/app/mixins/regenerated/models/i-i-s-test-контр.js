import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  когнтра: DS.attr('string')
});

export let ValidationRules = {
  когнтра: {
    descriptionKey: 'models.i-i-s-test-контр.validations.когнтра.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('контрE', 'i-i-s-test-контр', {
    когнтра: attr('Когнтра', { index: 0 })
  });

  modelClass.defineProjection('контрL', 'i-i-s-test-контр', {
    когнтра: attr('Когнтра', { index: 0 })
  });
};
