<template>
    <div class="test">
      <Header></Header>
    </div>
</template>
<script>
  import Header from "../components/Base/Header/Header.vue";
    export default {
        data() {
            return {}
        },
      components: {
        Header
      }
    }
</script>
<style lang="less" scoped>
.test {
  height: 100%;
}

</style>
