<template>

  <div class="detail container">
    <div>

    </div>
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <button class="btn btn-outline-success" @click="show=true" type="button">Create Score</button>
        <button class="btn btn-outline-success" type="button" @click="back">Back</button>
      </form>
    </nav>

    <table class="table">
      <thead>
      <tr>
        <th scope="col">Student Id</th>
        <th scope="col">Subject_id</th>
        <th scope="col">Subject_Name</th>
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
      <tbody>
      <tr v-for="score in scores" v-bind:key="score.id">
        <th scope="row">{{ score.id }}</th>
        <td>{{ score.subject_id }}</td>
        <td>{{ this.subName[score.subject_id -1] }}</td>
        <td>{{ score.score15p1 }}</td>
        <td>{{ score.score15p2 }}</td>
        <td>{{ score.score15p3 }}</td>
        <td>{{ score.score45p1 }}</td>
        <td>{{ score.score45p2 }}</td>
        <td>{{ score.score45p3 }}</td>
        <td>{{ score.score_final1 }}</td>
        <td>{{ score.score_final2 }}</td>
        <td>{{ score.score_finally }}</td>
        <td>
          <botton class="btn btn-outline-success"  @click="edit(score.scoreId)">edit</botton>
        </td>
      </tr>

      </tbody>
    </table>
<!--    Modal-->
    <b-modal
        v-model="show"
        title="Modal Variants"
        @Ok="createScore"
        :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant"
        :body-bg-variant="bodyBgVariant"
        :body-text-variant="bodyTextVariant"
        :footer-bg-variant="footerBgVariant"
        :footer-text-variant="footerTextVariant"
    >


      <template #modal-footer>
        <div class="w-100">
          <p class="float-left">Modal Footer Content</p>
          <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="show=false"

          >
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>

</template>

<script>
import axios from "axios";
import router from "@/router";
// import student from "@/components/student";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Detail"
  ,
  data(){
    return{
      param :this.$route.query.id,
      student :{},
      scores:[],
      msg:"",
      subName:[],
      show: false,
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'warning',
      footerTextVariant: 'dark'
    }
  },
  methods:{
    init:async function () {
      const resp = await axios.get('http://localhost:8081/student/findStudent?id='+this.param)
      this.student = resp.data
      this.scores = this.student.scoreSet
    },
    edit: function (event){
      router.push({path: '/editScore',query :{id:event}})
    },
    async getSubName(){
      const resp = await axios.get('http://localhost:8081/student/getsubname')
      this.subName = resp.data
    },
    createScore : function (){
      axios.get("http://localhost:8081/student/createScore?id="+this.student.id).then(res =>{
        this.msg = res.data
        this.init();
      })
    },
  back: function () {
    router.push({path: '/student'})
  }
  },mounted(){
    this.getSubName();
    this.init();
  }
}
</script>

<style scoped>
button{
  margin: 10px 10px;
}
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


