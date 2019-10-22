export default class TaskSchema {
  static schema = {
    name: 'Tasks',
    primaryKey: 'id',
    properties: {
      id: 'int',
      title: 'string',
      description: 'string',
      deadEnd: 'date', //Fim do prazo para conclusão
      isPersistent: 'bool', //Deve continuar sendo exibida apóso seu prazo estar vencido
      isOpenned: 'bool', //Ja foi concluida?
      type: 'string', //Group da task
      isSaved: 'bool' //Futuramente, verificar se um Backup da task está salvo na nuvem
    }
  };
}
