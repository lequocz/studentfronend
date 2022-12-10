<template>
<!--  <div class="create container-fluid">-->
    <div class="create container">
      <div class="container"></div>

      <form style="position: center">

          <button class="btn btn-outline-success"  @click="back">go home</button>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="Name">Name</label>
            <input type="text" v-model="form.name" class="form-control" id="inputName" placeholder="Điền tên của bạn">
          </div>
          <div class="form-group col-md-6">
            <label for="Age">Age</label>
            <input type="number" v-model="form.age" class="form-control" id="inputAge" placeholder="Điền tuổi của bạn">
          </div>
          <div class="form-group col-md-6">
            <label for="ClassId">ClassId</label>
            <input type="text" v-model="form.classId" class="form-control" id="inputClassName" placeholder="Điền tên lớp">
          </div>
        </div>
        <br>
        <div class="form-group col-md-6">
          <button type="submit" class="btn btn-outline-success" @click="save" >Create</button>
        </div>
      </form>
  </div>

</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Create",
  props: {
  },data(){
    return{
      param :this.$route.query.id,
      form:{}
    }
  },
  methods:{
    save : async function (){
      await axios.post('http://localhost:8081/student/save',this.form).then(function (){
      alert("xong")
      }).catch(function (){
        alert("lỗi")
      })
    },
    init:async function () {
      if (this.param != -1) {
        const resp = await axios.get('http://localhost:8081/student/findStudent?id='+this.param)
        this.form = resp.data
      }
    },back: function (){
      router.push({path: '/student'})
    }
  },mounted(){
    this.init();
  }
}
</script>

<style>

</style>