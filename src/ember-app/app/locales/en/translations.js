import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestконтрLForm from './forms/i-i-s-test-контр-l';
import IISTestномLForm from './forms/i-i-s-test-ном-l';
import IISTestтестLForm from './forms/i-i-s-test-тест-l';
import IISTestконтрEForm from './forms/i-i-s-test-контр-e';
import IISTestномEForm from './forms/i-i-s-test-ном-e';
import IISTestтестEForm from './forms/i-i-s-test-тест-e';
import IISTestконтрModel from './models/i-i-s-test-контр';
import IISTestномModel from './models/i-i-s-test-ном';
import IISTestтестModel from './models/i-i-s-test-тест';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-контр': IISTestконтрModel,
    'i-i-s-test-ном': IISTestномModel,
    'i-i-s-test-тест': IISTestтестModel
  },

  'application-name': 'Test',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test',
          title: 'Test'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'new-folder1': {
          caption: 'NewFolder1',
          title: 'NewFolder1',
          'i-i-s-test-ном-l': {
            caption: 'номL',
            title: 'Ном'
          },
          'i-i-s-test-тест-l': {
            caption: 'тестL',
            title: 'Тест'
          },
          'i-i-s-test-контр-l': {
            caption: 'контрL',
            title: 'Контр'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-контр-l': IISTestконтрLForm,
    'i-i-s-test-ном-l': IISTestномLForm,
    'i-i-s-test-тест-l': IISTestтестLForm,
    'i-i-s-test-контр-e': IISTestконтрEForm,
    'i-i-s-test-ном-e': IISTestномEForm,
    'i-i-s-test-тест-e': IISTestтестEForm
  },

});

export default translations;
