<template>
  <div class="create">
  <h1>Cretae</h1>
    <label for="name">name:</label><br>
    <input type="text" v-model="form.name"><br>
    <label for="age">age:</label><br>
    <input type="text" v-model="form.age"><br>
    <label for="age">scoreId:</label><br>
    <input type="text" v-model="form.scoreId"><br>
    <label for="age">classId:</label><br>
    <input type="text" v-model="form.classId"><br>
    <input type="button" value="Submit" @click="save">
    <form>
    </form>
    {{this.form}}
  </div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Create",
  props: {
  },data(){
    return{
      form:{}
    }
  },
  methods:{
    save : async function (){
      const resp = await axios.post('http://localhost:8081/student/save',this.form)
      this.students = resp.data
    }
  }
}
</script>

<style>

</style>