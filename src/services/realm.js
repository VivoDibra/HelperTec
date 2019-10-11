import Realm from 'realm';

import TaskSchema from '../schemas/schema_Task';

export default function getRealm() {
  return Realm.open({
    schema: [TaskSchema]
  });
}
