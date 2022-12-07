<template>

  <div class="student">
    <div class="container"></div>
    <td>
    <a  href="/create">Create</a>
    </td>
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>ClassId</th>
        <th>ScoreId</th>
      </tr>
      <tr v-for="student in students" v-bind:key="student.age">
        <td>{{student.id}}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.age }}</td>
        <td>{{ student.classid }}</td>
        <td>{{ student.scoreid }}</td>

      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'student',
  props: {
  },
  data(){
    return{
      msg : 'hello',
      students :[],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init : async function (){
      const resp = await axios.get('http://localhost:8081/student/listStudent')
      this.students = resp.data
    }
  }
}
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>