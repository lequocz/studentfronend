<template>
  <div>
    <form style="position: center">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Student Id</th>
        <th scope="col">Subject Name</th>
        <th scope="col">score15p1</th>
        <th scope="col">score15p2</th>
        <th scope="col">score15p3</th>
        <th scope="col">score45p1</th>
        <th scope="col">score45p2</th>
        <th scope="col">score45p3</th>
        <th scope="col">score_final1</th>
        <th scope="col">score_final2</th>
        <th scope="col">score_finally</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody align="center" >
        <th scope="row">{{ form.id }}</th>
        <td>{{this.subName[this.form.subject_id -1]}}</td>
        <td><input type="text" class="form-control" v-model="form.score15p1"></td>
        <td><input type="text" class="form-control" v-model="form.score15p2"></td>
        <td><input type="text" class="form-control" v-model="form.score15p3"></td>
        <td><input type="text" class="form-control" v-model="form.score45p1"></td>
        <td><input type="text" class="form-control" v-model="form.score45p2"></td>
        <td><input type="text" class="form-control" v-model="form.score45p3"></td>
        <td><input type="text" class="form-control" v-model="form.score_final1"></td>
        <td><input type="text" class="form-control" v-model="form.score_final2"></td>
        <td><input type="text" class="form-control" v-model="form.score_finally"></td>
      </tbody>
    </table>
      <div >
        <button type="submit" class="btn btn-outline-success" @click="save" >Ok</button>
        <button class="btn btn-outline-success"  @click="back">go home</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "EditScore",

data(){
  return {
    param: this.$route.query.id,
    form: {},
    subName:[],
  }
},
  methods:{
    init:async function () {
      const resp = await axios.get('http://localhost:8081/student/findScore?id='+this.param)
      this.form = resp.data

    },
    back: function (){
      router.push({path: '/student'})
    },
    save : async function (){
      await axios.post('http://localhost:8081/student/saveScore',this.form).then(function (){

        alert("xong")
      }).catch(function (){
        alert("lỗi")
      })
    },
    async getSubName(){
      const resp = await axios.get('http://localhost:8081/student/getsubname')
      this.subName = resp.data
    }


  },

  mounted() {
    this.init();
    this.getSubName();
  }
}
</script>

<style scoped>
input{
  width: 50px;
  height: 20px;
}
form{
border: 1px solid gray;
  border-radius: 10px;
}
</style>