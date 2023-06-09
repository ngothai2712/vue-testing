<template>
  <main>
    <p data-testId="userName">{{ userName }}</p>
    <button data-testId="changeBtn" @change="onChangeUserName">change</button>
    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue';
import { ref } from 'vue';

const userName = ref('thai');

function onChangeUserName() {
  userName.value = 'thao';
}
</script>
