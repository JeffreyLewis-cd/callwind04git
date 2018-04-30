<template>
  <div class="callWindMainPage">
    <searchAndShow></searchAndShow>
    <realTimeCharts></realTimeCharts>
  </div>
</template>

<script>
  import searchAndShow from "@/components/callWindComponents/searchAndShow"
  import realTimeCharts from "@/components/callWindComponents/realTimeCharts"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    searchAndShow,
    realTimeCharts,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
