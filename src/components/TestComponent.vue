<script>
export default {
  props: ['message'],
  created() {
    console.log(this.message);
  }
}
</script>

<template>
{{message}}
</template>
