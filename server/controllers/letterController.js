
async function getLetters (req,res) {

  const selectedLetters = [];

  //TODO: TIDY UP
  const letters = {
    1:"A", 2:"B", 3:"C", 4:"D", 5:"E",
    6:"H", 7:"I", 8:"K", 9:"L", 10:"M",
    11:"O", 12:"P", 13:"R", 14:"S", 15:"T"
  }

  function randomInt() {
    return Math.floor(Math.random() * (15 - 1) + 1);
  }

  for (let i = 0; i < 25; i++) {
    const key = randomInt();
    selectedLetters.push(letters[key]);
  }

  try {
    await selectedLetters;
    res.status(200);
    res.send(selectedLetters);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

}

module.exports = {getLetters};
