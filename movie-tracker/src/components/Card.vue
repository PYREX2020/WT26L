
<script setup lang="ts">
defineProps({
  name: String
})
</script>
<template>
    <div class="card">{{ name }}</div>
</template>

<style>
.card {
        padding:10px;
        margin:10px;
        border:1px solid red;
}
</style>