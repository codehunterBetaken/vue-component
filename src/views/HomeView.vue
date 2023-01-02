<template>
  <div class="home" >
    <i-input v-model="name"></i-input>
    <button @click="onChangeValue">{{name}}</button>
  </div>
</template>

<script >
import iInput from "../components/input/input.vue";

export default  {
  components: {
    iInput
  },
  data() {
    return {
      name: 'init'
    }
  },
  methods: {
    onChangeValue() {
      console.log(this.name)
      // this.name = e.terget.value
    }
  },
}
</script>
