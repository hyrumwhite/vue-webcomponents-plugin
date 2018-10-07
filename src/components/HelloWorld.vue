<template>
  <div class="hello">
    {{myData}}
    <wc-input @input="myData = $event.target.value" :value="myData"></wc-input>
    <wc-input-object @input="myData = $event.target.value" :value="myData"></wc-input-object>
  </div>
</template>

<script>
// import LinearInput from "../web-components/linear-input/linear-input";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      myData: "test"
    };
  },
  methods: {
    doStuff($event) {
      // console.log($event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
