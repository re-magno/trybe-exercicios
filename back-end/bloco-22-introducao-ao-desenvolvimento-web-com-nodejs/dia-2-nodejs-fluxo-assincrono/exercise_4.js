const fs = require('fs').promises;

async function getSimpsons() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((content) => JSON.parse(content));
    // console.log(simpsons);
    return simpsons;
}

// getSimpsons();

async function arrSimpsons() {
  const simpsons = await getSimpsons();

  const arrStrings = simpsons
    .map(({id, name}) => `${id} - ${name}`);

    // console.log(arrStrings);
    return arrStrings;
}

// arrSimpsons();

async function getSimpsonById(id) {
  const simpsons = await getSimpsons();

  const findSimpson = simpsons.find((simpson) => simpson.id === id);

  if(!findSimpson) {
    throw new Error('id não encontrado');
  }
  console.log(findSimpson);
  return findSimpson;
}

// getSimpsonById('1');

async function removeSimpson() {
  const simpsons = await getSimpsons();
  const newArray = simpsons
    .filter(simpson => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

// removeSimpson();

async function createSimpsonsFamily(arrIds) {
  const simpsons = await getSimpsons();

  const simpsonsFamily = [];
  arrIds.forEach((id) => {
    const simpson = simpsons.filter(simpson => id == simpson.id)
    simpsonsFamily.push(...simpson);
  })

  await fs
    .writeFile('./simpsonsFamily.json', JSON
    .stringify(simpsonsFamily));
}

// createSimpsonsFamily([1, 2, 3, 4]);

async function getSimpsonsFamily() {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((content) => JSON.parse(content));
  return simpsonsFamily;
}

// getSimpsonsFamily();

async function addNelsonToFamily() {
  const simpsonsFamily = await getSimpsonsFamily();

  simpsonsFamily.push({ id: "8",name: "Nelson Muntz" });

  await fs
    .writeFile('./simpsonsFamily.json', JSON
    .stringify(simpsonsFamily));
}

// addNelsonToFamily();

async function changeNelsonForMaggie() {
  const simpsonsFamily = await getSimpsonsFamily();

  const newArr = simpsonsFamily
    .filter((simpson) => simpson.id !== '8');

  newArr.push({ id: '5', name: 'Maggie Simpson' });

  await fs
    .writeFile('./simpsonsFamily.json', JSON
      .stringify(newArr));
}

// changeNelsonForMaggie();