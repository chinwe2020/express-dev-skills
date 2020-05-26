const skills = [
    {id: 12335, skill: 'html', complete: true}, 
    {id: 12346, skill: 'css', complete: true},
    {id: 12357, skill: 'javascript', complete: true},
    {id: 12368, skill: 'node.js', complete: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update (id, skill) {
    const skillObj = skills.find(s => s.id === parseInt(id));
    Object.assign(skillObj, skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.complete = false;
    skills.push(skill)
}

function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }

function getAll() {
    return skills;
}