<template>
    <div class="testLabel">
        <a>{{ testLabel }}</a>
    </div>
</template>

<script>
export default {
  name: 'ImageInput',
  data () {
    return {
      testLabel: '你猜我猜不猜你猜不猜'
    }
  }
}
</script>

<style scoped>
  .testLabel a{
    color: #e3e3e3;
  }
</style>
