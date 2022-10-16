import { db } from "../models/db.js";

function add(req, res){
  const item = new db.items({
    value: req.body.value
  });
  item.save(item).then(data => {
    res.send(data);
  }).catch(err => {
    console.log(err);
  })
};
function getAll(req, res){
    db.items.find({}).then(data => res.send(data)).catch(e => res.send(e));
}
function deleteItem(req, res){
  db.items.deleteOne({_id: req.params.id}).then(data => res.send(data)).catch(e => res.send(e));
}

export { add, getAll, deleteItem };
