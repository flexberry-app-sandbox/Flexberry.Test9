import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test',
          title: 'Test'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
