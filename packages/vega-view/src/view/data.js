import {changeset, isChangeSet} from 'vega-dataflow';

function dataref(view, name) {
  var data = view._runtime.data;
  if (!data.hasOwnProperty(name)) {
    view.error('Unrecognized data set: ' + name);
  }
  return data[name];
}

export function data(name) {
  return dataref(this, name).values.value;
}

export function change(name, changes) {
  if (!isChangeSet(changes)) {
    this.error('Second argument to changes must be a changeset.');
  }
  return this.pulse(dataref(this, name).input, changes);
}

export function insert(name, _) {
  return this.pulse(
    dataref(this, name).input,
    changeset().insert(_)
  );
}

export function remove(name, _) {
  return this.pulse(
    dataref(this, name).input,
    changeset().remove(_)
  );
}
