import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.new-folder1.caption'),
          title: i18n.t('forms.application.sitemap.new-folder1.title'),
          children: [{
            link: 'i-i-s-test-ном-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-test-ном-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-test-ном-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-test-тест-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-test-тест-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-test-тест-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-test-контр-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-test-контр-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-test-контр-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})