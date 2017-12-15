import ShelterModel from "../models/ShelterModel";

export function create(req, res, next) {
  const shelter = new ShelterModel({ ...req.body });
  shelter
    .save()
    .then(s => res.json(s))
    .catch(err => next(err));
}

export function update(req, res, next) {
  ShelterModel.findOne({ _id: req.params.id })
    .exec()
    .then(shelter => {
      if (!shelter) {
        return next("No Shelter Found");
      }

      shelter.title = req.params.title;
      return shelter.save();
    })
    .then(shelter => {
      return req.json(shelter);
    })
    .catch(err => next(err));
}
