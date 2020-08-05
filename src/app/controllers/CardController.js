import Card from '../models/Card';


class CardController {
  async index(req, res) {
    try {
      const cards = await Card.findAll();

      return res.json({ cards });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;

      const card = await Card.findOne({ where: { uid } });
      return res.json({ card });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const card = await Card.create(req.body);

      return res.json({ card });
    } catch (error) {
      const response = {
        message: 'Nota criada!',
        error,
      };
      return res.json(response);
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const [card] = await Card.update(req.body, { where: { uid } });

      if (!card) {
        throw Error('Não foi possível encontrar a nota!');
      }
      return res.json({ card });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const card = await Card.destroy({ where: { uid } });
      return res.json({ card });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new CardController();
