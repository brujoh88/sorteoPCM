let random = []
const cantidadPersonas = 73
const listRandomPeople = []
//console.log(listAllPeople[1].name)
const sortearNow = () => {
  for (let i = 0; i < cantidadPersonas; i++) {
    random[i] = Math.floor(Math.random() * cantidadPersonas)
    //Si se repetite entra y retraca un ciclo
    for (let x = 0; x < random.length; x++) {
      if (random[i] == random[x] && i != x) {
        x = random.length
        i--
      }
    }
  }
  random.forEach((element) => {
    listRandomPeople.push(listAllPeople[element])
  })
}
