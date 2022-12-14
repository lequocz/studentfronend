<template>
<!--list-->
  <div class="student container">
    <div class="container"></div>
    <td>
    <botton class="btn btn-outline-success"  @click="getId(-1)">Create</botton>
    </td>
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>ClassId</th>
        <th> </th>
        <th> </th>
        <th> </th>
      </tr>
      <tr v-for="student in students" v-bind:key="student.age">
        <td>{{student.id}}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.age }}</td>
        <td>{{ student.classId }}</td>
        <td>
          <botton class="btn btn-outline-success"  @click="getId(student.id)">edit</botton>
        </td>
        <td>
          <botton class="btn btn-outline-success" @click="del(student.id)">delete</botton>
        </td>
        <td>
          <botton class="btn btn-outline-success"  @click="detail(student.id)">detail</botton>
        </td>
      </tr>
    </table>
<!--    create && update -->

  </div>

</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'student',
  props: {
  },
  data(){
    return{
      msg : 'hello',
      students :[]
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init : async function (){
      const resp = await axios.get('http://localhost:8081/student/listStudent')
      this.students = resp.data
    },
    getId: function (event){
      router.push({path: '/create',query :{id:event}})
    },
    del:function ( event){
      axios.get(('http://localhost:8081/student/deleteStudent?id=' + event)).then(res =>{
        this.msg =res.data
        this.init();
      }).catch(function (){
        alert("loi")
      })
    },
    detail: function (event) {
      router.push({path: '/detail',query :{id:event}})

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