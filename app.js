Vue.component('TablaWiner', {
  props: ['nameWinner', 'arrWinner'], //Tengo un objeto con trio quien y all
  data() {
    return {
      ganador3: '',
      ganador5: '',
      ganadorAll: '',
    }
  },
  methods: {
    desempatar(premio) {
      switch (premio) {
        case 3:
          let tamaño3 = this.arrWinner.trio.length
          if (tamaño3 != 0) {
            ramdon = Math.floor(Math.random() * tamaño3)
            this.ganador3 = this.arrWinner.trio[ramdon].name
          }
          break
        case 5:
          let tamaño5 = this.arrWinner.quintina.length
          if (tamaño5 != 0) {
            ramdon = Math.floor(Math.random() * tamaño5)
            this.ganador5 = this.arrWinner.quintina[ramdon].name
          }
          break
        case 15:
          let tamañoAll = this.arrWinner.cartonLleno.length
          if (tamañoAll != 0) {
            ramdon = Math.floor(Math.random() * tamañoAll)
            this.ganadorAll = this.arrWinner.cartonLleno[ramdon].name
          }
          break
      }
    },
  },
  template: `
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Premio</th>
      <th scope="col">Nombre</th>
      <th scope="col">Sortear</th>
      <th scope="col">Ganador</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Trio</th>
      <td><p v-for="element in nameWinner" v-bind:key="element.id" v-show="element.winner.trio == 3">{{element.name}}</p></td>      
      <td><button class="btn green btn-lg" v-on:click="desempatar(3)">?</button></td>
      <td>
      <p>{{ganador3}}</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Quintina</th>
      <td><p v-for="element in nameWinner" v-bind:key="element.id" v-show="element.winner.quintina == 5">{{element.name}}</p></td>      
      <td><button class="btn green btn-lg" v-on:click="desempatar(5)">?</button></td>
      <td>{{ganador5}}</td>
    </tr>
    <tr>
      <th scope="row">Carton Lleno</th>
      <td><p v-for="element in nameWinner" v-bind:key="element.id" v-show="element.winner.cartonLleno == 15">{{element.name}}</p></td>      
      <td><button class="btn green btn-lg" v-on:click="desempatar(15)">?</button></td>
      <td>{{ganadorAll}}</td>
    </tr>
  </tbody>
</table>
  `,
})
Vue.component('TablaAllPerson', {
  props: ['personas'],
  data() {
    return {}
  },
  methods: {},
  template: `
  <table class="table table-bordered">  
  <tbody>
    <tr>      
      <td  v-for="element in personas" v-bind:key="element.id" v-if="element.id < 11" v-bind:class="element.active ? 'green' : 'gray'" v-bind:style="{color:element.color}">
      {{element.name}} - {{element.rama}}</td>      
    </tr>

    <tr>      
      <td  v-for="element in personas" v-bind:key="element.id" v-if="element.id > 10 && element.id < 22 " v-bind:class="element.active ? 'green' : 'gray'" v-bind:style="{color:element.color}">
      {{element.name}} - {{element.rama}}</td>      
    </tr>

    <tr>      
      <td  v-for="element in personas" v-bind:key="element.id" v-if="element.id > 21 && element.id < 33 " v-bind:class="element.active ? 'green' : 'gray'" v-bind:style="{color:element.color}">
      {{element.name}} - {{element.rama}}</td>      
    </tr>
    <tr>      
    <td  v-for="element in personas" v-bind:key="element.id" v-if="element.id > 32 && element.id < 44 " v-bind:class="element.active ? 'green' : 'gray'" v-bind:style="{color:element.color}">
    {{element.name}} - {{element.rama}}</td>      
    </tr>
    <tr>      
    <td  v-for="element in personas" v-bind:key="element.id" v-if="element.id > 43 && element.id < 55 " v-bind:class="element.active ? 'green' : 'gray'" v-bind:style="{color:element.color}">
    {{element.name}} - {{element.rama}}</td>      
    </tr>
    <tr>      
    <td  v-for="element in personas" v-bind:key="element.id" v-if="element.id > 54 && element.id < 66 " v-bind:class="element.active ? 'green' : 'gray'" v-bind:style="{color:element.color}">
    {{element.name}} - {{element.rama}}</td>      
    </tr>
    <tr>      
    <td  v-for="element in personas" v-bind:key="element.id" v-if="element.id > 65 " v-bind:class="element.active ? 'green' : 'gray'" v-bind:style="{color:element.color}">
    {{element.name}} - {{element.rama}}</td>      
    </tr>    
    </tbody>  
    </table>
    
    `,
})

var app = new Vue({
  el: '#app',
  data() {
    return {
      arrPersonas: listAllPeople,
      arrPersonasRamdon: listRandomPeople,
      disabledBtnInit: false,
      disabledBtnGoAndRest: true,
      cont: 0,
      name: 'Nombre',
      rama: 'Rama',
      disabledBtnTrio: false,
      disabledBtnCuarteto: false,
      disabledBtnQuintina: false,
      disabledBtnLleno: false,
      level: 0,
      nameWinner3: '',
      nameWinner5: '',
      nameWinner15: '',
      arrayAllWinner: {
        trio: [],
        quintina: [],
        cartonLleno: [],
      },
      allNames: [],
      filtedNames: [],
    }
  },

  methods: {
    filterNames(value) {
      switch (value) {
        case 3:
          if (!this.nameWinner3 == '') {
            this.filtedNames = this.allNames.filter((nameWinner3) => {
              return nameWinner3
                .toLowerCase()
                .startsWith(this.nameWinner3.toLowerCase())
            })
          } else {
            this.filtedNames = []
          }

          break
        case 5:
          if (!this.nameWinner5 == '') {
            this.filtedNames = this.allNames.filter((nameWinner5) => {
              return nameWinner5
                .toLowerCase()
                .startsWith(this.nameWinner5.toLowerCase())
            })
          } else {
            this.filtedNames = []
          }
          break
        case 15:
          if (!this.nameWinner15 == '') {
            this.filtedNames = this.allNames.filter((nameWinner15) => {
              return nameWinner15
                .toLowerCase()
                .startsWith(this.nameWinner15.toLowerCase())
            })
          } else {
            this.filtedNames = []
          }
          break
      }
    },
    restar() {
      this.disabledBtnInit = false
      this.disabledBtnGoAndRest = true
      this.disabledBtnTrio = false
      this.disabledBtnQuintina = false
      this.disabledBtnLleno = false
      this.name = 'Nombre'
      this.rama = 'Rama'
      this.cont = 0
      for (let i = 0; i < this.arrPersonas.length; i++) {
        this.arrPersonas[i].active = false
        this.arrPersonas[i].color = 'transparent'
      }
      resetAllValue()
      this.arrPersonasRamdon = listRandomPeople
    },

    sortear() {
      if (this.allNames.length == 0) {
        for (let i = 0; i < this.arrPersonas.length; i++) {
          this.allNames.push(this.arrPersonas[i].name)
        }
      }
      this.disabledBtnInit = !this.disabledBtnInit
      this.disabledBtnGoAndRest = !this.disabledBtnGoAndRest
      this.disabledBtnTrio = !this.disabledBtnTrio
      this.disabledBtnQuintina = !this.disabledBtnQuintina
      this.disabledBtnLleno = !this.disabledBtnLleno
      this.name = 'Nombre'
      this.rama = 'Rama'
      this.cont = 0
      sortearNow()
    },
    viewOne() {
      if (this.cont < this.arrPersonas.length) {
        let personSelecction = this.arrPersonasRamdon[this.cont]
        this.name = personSelecction.name
        this.rama = personSelecction.rama
        personSelecction.active = !personSelecction.active
        personSelecction.color = 'inherit'
        this.cont++
      } else {
        this.name = 'NO HAY MAS PERSONAS A SORTEAR'
        this.rama = 'GRACIAS POR JUGAR'
      }
    },
    viewPremio(data) {
      if (data == 3) {
        this.level++
      }
      switch (data) {
        case 3:
          if (this.level == 1) {
            this.disabledBtnTrio = !this.disabledBtnTrio
            this.level++
          }
          break
        case 5:
          if (this.level == 2) {
            this.disabledBtnQuintina = !this.disabledBtnQuintina
            this.level++
          }
          break
        case 15:
          if (this.level == 3) {
            this.disabledBtnLleno = !this.disabledBtnLleno
            this.level = 0
          }
          break
      }
    },
    addWinner(levelPremio) {
      switch (levelPremio) {
        case 3:
          let found3 = this.arrPersonas.find(
            (data) => data.name === `${this.nameWinner3}`
          )
          if (found3) {
            this.arrPersonas[found3.id].winner.trio = 3
            this.arrayAllWinner.trio.push(this.arrPersonas[found3.id])
          }
          this.nameWinner3 = ''

          break
        case 5:
          let found5 = this.arrPersonas.find(
            (data) => data.name === `${this.nameWinner5}`
          )
          if (found5) {
            this.arrPersonas[found5.id].winner.quintina = 5
            this.arrayAllWinner.quintina.push(this.arrPersonas[found5.id])
          }
          this.nameWinner5 = ''
          break
        case 15:
          let found15 = this.arrPersonas.find(
            (data) => data.name === `${this.nameWinner15}`
          )
          if (found15) {
            this.arrPersonas[found15.id].winner.cartonLleno = 15
            this.arrayAllWinner.cartonLleno.push(this.arrPersonas[found15.id])
          }
          this.nameWinner15 = ''

          break
      }
    },
  },
})
