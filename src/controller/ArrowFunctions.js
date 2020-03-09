export const ArrowFunctions = () => {
  const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

  console.log(materials.map(material => material.length));

  let length = materials.map(function (element) {
    return element.length;
  });
  console.log(length);

  length = materials.map((element) => {
    return element.length;
  });
  console.log(length);

  length = materials.map(element => {
    return element.length;
  });
  console.log(length);

  length = materials.map(element => element.length);
  console.log(length);

  length = materials.map(({length: lengthFooBArX}) => lengthFooBArX);
  console.log(length);

  length = materials.map(({length}) => length);
  console.log(length);

  let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
  console.log(f());
};