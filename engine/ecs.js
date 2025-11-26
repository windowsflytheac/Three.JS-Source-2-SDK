let _id = 1;

function createEntity() {
  return { id: _id++, components: new Map() };
}

function addComponent(ent, name, data) {
  ent.components.set(name, data);
}

function getComponent(ent, name) {
  return ent.components.get(name);
}
