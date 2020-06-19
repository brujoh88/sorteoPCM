Vue.component('tablaAllPerson', {
  props: ['Personas'],
  data() {
    return {}
  },
  methods: {},
  template: `
  <table class="table table-bordered">  
  <tbody>
    <tr>      
      <td  v-for="element in Personas" v-bind:key="element.id" v-if="element.id < 11" v-bind:class="element.active ? 'green' : 'gray'">
      {{element.name}} - {{element.rama}}</td>      
    </tr>

    <tr>      
      <td  v-for="element in Personas" v-bind:key="element.id" v-if="element.id > 10 && element.id < 22 " v-bind:class="element.active ? 'green' : 'gray'">
      {{element.name}} - {{element.rama}}</td>      
    </tr>

    <tr>      
      <td  v-for="element in Personas" v-bind:key="element.id" v-if="element.id > 21 && element.id < 33 " v-bind:class="element.active ? 'green' : 'gray'">
      {{element.name}} - {{element.rama}}</td>      
    </tr>
    <tr>      
    <td  v-for="element in Personas" v-bind:key="element.id" v-if="element.id > 32 && element.id < 44 " v-bind:class="element.active ? 'green' : 'gray'">
    {{element.name}} - {{element.rama}}</td>      
    </tr>
    <tr>      
    <td  v-for="element in Personas" v-bind:key="element.id" v-if="element.id > 43 && element.id < 55 " v-bind:class="element.active ? 'green' : 'gray'">
    {{element.name}} - {{element.rama}}</td>      
    </tr>
    <tr>      
    <td  v-for="element in Personas" v-bind:key="element.id" v-if="element.id > 54 && element.id < 66 " v-bind:class="element.active ? 'green' : 'gray'">
    {{element.name}} - {{element.rama}}</td>      
    </tr>
    <tr>      
    <td  v-for="element in Personas" v-bind:key="element.id" v-if="element.id > 65 " v-bind:class="element.active ? 'green' : 'gray'">
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
    }
  },
  methods: {
    sortear() {
      for (let i = 0; i < this.arrPersonas.length; i++) {
        this.arrPersonas[i].active = false
      }
      this.disabledBtnInit = !this.disabledBtnInit
      this.disabledBtnGoAndRest = !this.disabledBtnGoAndRest
      sortearNow()
    },
    viewOne() {
      if (this.cont < this.arrPersonas.length) {
        let personSelecction = this.arrPersonasRamdon[this.cont]
        this.name = personSelecction.name
        this.rama = personSelecction.rama
        personSelecction.active = !personSelecction.active
        const viewTable = personSelecction.name
        this.cont++
      } else {
        this.name = 'NO HAY MAS PERSONAS A SORTEAR'
        this.rama = 'GRACIAS POR JUGAR'
      }
    },
  },
})
