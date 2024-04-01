const skills = [
  {id: 237749, skill: 'React.js', proficiency: 'Intermediate',done:false},
  {id: 589732, skill: 'JavaScript', proficiency: 'Proficient',done:false},
  {id: 987248, skill: 'Node.js', proficiency: 'Intermidiate',done:true},
  {id: 398742, skill: 'Python', proficiency: 'Proficient',done:true},
  {id: 674923, skill: 'SQL', proficiency: 'Intermediate',done:true},
  {id: 129837, skill: 'Git', proficiency: 'Proficient',done:false},
  {id: 982734, skill: 'Agile Methodologies', proficiency: 'Intermediate',done:false},
  {id: 327846, skill: 'Generative AI', proficiency: 'Proficient', done:true}
];


	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne(id) {

     id = parseInt(id);

     return skills.find(skill => skill.id === id);

  }

  function create(skill){

    // add the id

    skill.id = Date.now() % 1000000;
    skill.proficiency = 'Intermediate'
    skill.proficiency = `${skill.proficiency}`;
    skills.push(skill);

  }

  function deleteOne(id){

    id = parseInt(id);

    // find the index for the skills
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx,1);


  }