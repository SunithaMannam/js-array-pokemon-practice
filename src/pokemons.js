// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
  return pokemons.filter((ele) => ele.type.includes("Fire"));
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
  if (pokemons.length === 0) return 0;
  let smallOne = parseFloat(
    pokemons[0].height.slice(0, pokemons[0].height.length - 2),
    10
  );

  pokemons.forEach((ele) => {
    const pokemonHt = parseFloat(
      ele.height.slice(0, ele.height.length - 2),
      10
    );
    smallOne = smallOne < pokemonHt ? smallOne : pokemonHt;
  });

  let smallPokeMoname = pokemons.filter(
    (ele) =>
      parseFloat(ele.height.slice(0, ele.height.length - 2), 10) === smallOne
  )[0].name;

  return smallPokeMoname;
}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
  let candCnt = pokemons.reduce(
    (acc, ele) => (ele.hasOwnProperty("candy_count") ? ++acc : acc),
    0
  );
  if (candCnt === 0) return 0;

  let candyCntTot = pokemons.reduce(
    (acc, ele) =>
      ele.hasOwnProperty("candy_count") ? acc + ele.candy_count : acc,
    0
  );
  return parseFloat((candyCntTot / pokemons.length).toFixed(2));
}
// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
  if (pokemons.length === 0) return 0;

  let resArr = pokemons
    .filter((ele) => ele.type.includes("Ground"))
    .slice(0, 10)
    .map((ele) => ele.img);
  return resArr;
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
  if (pokemons.length === 0) return 0;

  const pikachuWt = parseFloat(
    pokemons
      .filter((ele) => ele.name === "Pikachu")[0]
      .weight.slice(0, pokemons[0].weight.length - 3),
    2
  );
  const resArr = pokemons
    .filter((ele) => {
      const eachPMonWt = parseFloat(
        ele.weight.slice(0, pokemons[0].weight.length - 3),
        2
      );
      if (eachPMonWt > pikachuWt) {
        return ele.name;
      }
    })
    .map((ele) => ele.name);
  return resArr;
}
// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
  // if (pokemons.length === 0) return 0;
  let resArr = pokemons
    .map((ele) => ele.name)
    .sort()
    .slice(0, 20);
  return resArr;
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
function strongPokemons(pokemons) {
  let resArr = pokemons.filter((ele) => ele.weaknesses.length === 1);
  return resArr.slice(0, 15).map((ele) => ele.name);
}
