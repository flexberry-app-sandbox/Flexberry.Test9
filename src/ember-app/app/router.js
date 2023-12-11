import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test-контр-l');
  this.route('i-i-s-test-контр-e',
  { path: 'i-i-s-test-контр-e/:id' });
  this.route('i-i-s-test-контр-e.new',
  { path: 'i-i-s-test-контр-e/new' });
  this.route('i-i-s-test-ном-l');
  this.route('i-i-s-test-ном-e',
  { path: 'i-i-s-test-ном-e/:id' });
  this.route('i-i-s-test-ном-e.new',
  { path: 'i-i-s-test-ном-e/new' });
  this.route('i-i-s-test-тест-l');
  this.route('i-i-s-test-тест-e',
  { path: 'i-i-s-test-тест-e/:id' });
  this.route('i-i-s-test-тест-e.new',
  { path: 'i-i-s-test-тест-e/new' });
});

export default Router;
