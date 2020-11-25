import City from '../models/City';
import State from '../models/State';

module.exports = () => {
  const controller = {};

  controller.listStates = async (req, res) => {
    const states = await State.findAll({
      attributes: ['id', 'name', 'initials'],
    });
    return res.status(200).send(states);
  };

  controller.listCitiesInState = async (req, res) => {
    const { stateId } = req.params;

    const cities = await City.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          model: State,
          as: 'state',
          where: { id: stateId },
          attributes: ['id', 'name', 'initials'],
        },
      ],
    });

    return res.status(200).send(cities);
  };

  return controller;
};
