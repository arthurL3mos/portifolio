<template>
  <button @click="alternar" class="botao-tema" type="button">
    <span v-if="escuro">☀️ Claro</span>
    <span v-else>🌙 Escuro</span>
  </button>
</template>

<style scoped>
.botao-tema {
    background-color: transparent;
    border: 1px solid var(--texto);
    color: var(--texto);
    padding: 0.4rem 0.9rem;
    border-radius: 6px;
    font-size: 0.85rem;
    cursor: pointer;
}
.botao-tema:hover {
    opacity: 0.8;
}
</style>

<script setup>
import { useTema } from '../composables/useTema.js';

const { escuro, alternar } = useTema();
</script>