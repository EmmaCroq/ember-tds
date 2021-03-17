import Model, { attr } from '@ember-data/model';

export default class EmployeeModel extends Model {
  /*@attr('number') id;
  @attr('date') dateCreation;
  @attr('number') idUser;
  @attr('number') idEmployee;
  @attr('enum') status;
  @attr('decimal') amount;
  @attr('decimal') toPay;
  @attr('number') itemsNumber;
  @attr('number') missingNumber;
  @attr('number') idTimeslot;*/

  //d'après les variables de l'api rest

  //@attr('int') id; on ne met pas d'id dans un model
  @attr('string') name;
  @attr('string') email;
  @attr('string') password;
}
