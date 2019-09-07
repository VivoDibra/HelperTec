export default class TaskSchema {
  static schema = {
    name: "Tasks",
    primaryKey: "id",
    properties: {
      id: { type: "int", indexed: true },
      title: "string",
      description: "string"
    }
  };
}
