<template>
    <header class="menu-topo">
        <BotaoTema/>
    </header>
    
    <section class="hero" :class="{ 'tema-escuro': escuro}">
        <p class="hero-eyebrown">Desenvolvedor PHP . Laravel . Vue</p>
        <h1 class="hero-nome">Arthur da Silva Lemos</h1>
        <p class="hero-frase">
            Atuo como Desenvolvedor PHP Pleno - Construindo aplicações Frontend e Backend.
        </p>
    </section>
</template>

<style scoped>
.menu-topo{
    display: flex;
    justify-content: flex-end;
    padding: 1rem, 2rem;
}
.hero{
    background-color: var(--fundo);
    color: var(--texto);
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
}

.hero-eyebrown{
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 0.5rem;
}
.hero-nome{
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
}
.hero-frase {
    font-size: 1rem;
    color: #555;
    max-width: 40ch;
}
</style>

<script setup>
import { ref, watch } from 'vue';
import { useTema } from './composables/useTema.js';
import BotaoTema from './components/BotaoTema.vue';

const { escuro } = useTema();

watch(
    escuro,
    (valor) => {
        document.documentElement.classList.toggle("tema-escuro", valor);
    },
    { immediate: true} 
);

</script>