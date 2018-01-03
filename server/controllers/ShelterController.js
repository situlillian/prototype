import ShelterModel from "../models/ShelterModel";

export function create(req, res, next) {
  const shelter = new ShelterModel({ ...req.body });
  shelter
    .save()
    .then(s => res.json(s))
    .catch(err => next(err));
}

export function list(request, response) {
  ShelterModel.find({}).exec().then(shelters => {
    return response.json(shelters);
  });
}

export function show(request, response) {
  ShelterModel.findById(request.params.id).exec().then(shelter => {
    return response.json(shelter);
  });
}

export function remove(request, response) {
  ShelterModel.findByIdAndRemove(request.params.id).exec().then(shelters => {
    return response.json(shelters);
  });
}
