import FieldMessage from './fieldmessage';

import State from '../models/State';

function idValid(id) {
  return !(Number.isNaN(id)) && Number.isInteger(+id);
}

module.exports = () => {
  const validations = {};

  validations.listCitiesInState = async (req) => {
    const errors = [];

    const { stateId } = req.params;
    if (!idValid(stateId)) {
      errors.push(new FieldMessage('stateId', 'Parametro deve ser do tipo inteiro'));
    }

    const state = await State.findByPk(stateId);
    if (!state) {
      errors.push(new FieldMessage('id', 'Estado não existe'));
    }

    return errors;
  };

  return validations;
};
