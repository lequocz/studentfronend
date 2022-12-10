<template>
  <div class="detail container">
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <button class="btn btn-outline-success" type="button">Edit</button>
        <button class="btn btn-outline-success" type="button" @click="back">Back</button>
      </form>
    </nav>
    <div class="container"></div>
    <table>
      <tr>
        <th>Phone Number</th>
        <th>Address</th>
        <th>English</th>
        <th>Math</th>
      </tr>
      <tr >
        <td>{{student.phoneNumber}}</td>
        <td>{{ student.address }}</td>
        <td>{{ student.englishScore }}</td>
        <td>{{ student.mathScore }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Detail"
  ,
  data(){
    return{
      param :this.$route.query.id,
      student :{}
    }
  },
  methods:{
    init:async function () {
      const resp = await axios.get('http://localhost:8081/student/detailStudent?id='+this.param)
      this.student = resp.data
    },
  back: function () {
    router.push({path: '/student'})

  }
  },mounted(){
    this.init();
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


