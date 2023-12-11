import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-ном', 'Unit | Serializer | i-i-s-test-ном', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test-ном',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-test-хуй',

    'model:i-i-s-test-контр',
    'model:i-i-s-test-ном',
    'model:i-i-s-test-тест',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
