export default class TaskSchema {
  static schema = {
    name: 'Tasks',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      title: 'string',
      description: 'string',
      deadEnd: 'date', //Fim do prazo para conclusão
      isPersistent: 'boolean', //Deve continuar sendo exibida apóso seu prazo estar vencido
      isOpenned: 'boolean', //Ja foi concluida?
      type: 'string', //Group da task
      isSaved: 'boolean' //Futuramente, verificar se um Backup da task está salvo na nuvem
    }
  };
}
