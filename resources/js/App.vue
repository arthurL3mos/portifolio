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
    <section class="projetos">
        <p class="hero-eyebrown">LISTA DE PROJETOS</p>

        <div class="projetos-lista">
            <CardProjeto
                v-for="projeto in projetos"
                :key="projeto in projetos"
                :numero="projeto.numero"
                :titulo="projeto.titulo"
                :desafios="projeto.desafios"
            />
        </div>
    </section>
</template>

<style scoped>

.menu-topo{
    display: flex;
    justify-content: flex-end;
    padding: 1rem 2rem;
}

.hero{
    background-color: var(--fundo);
    color: var(--texto);
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2.5rem 2rem 1.5rem;
}

.hero-eyebrown{
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 0.4rem;
}

.hero-nome{
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.hero-frase {
    font-size: 0.95rem;
    color: #555;
    max-width: 40ch;
}

.projetos {
    background-color: var(--fundo);
    color: var(--texto);
    min-height: 20vh;
    padding: 4rem 2rem;
}

.projetos-lista {
    display: grid;
    grid-template-columns: repeat(1fr);
    gap: 1.5rem;
}

@media (min-width: 768px) {
  .projetos-lista {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas a partir de telas médias */
  }
}

</style>


<script setup>
import { ref, watch } from 'vue';
import { useTema } from './composables/useTema.js';
import BotaoTema from './components/BotaoTema.vue';
import { projetos } from './data/projetos.js'
import CardProjeto from './components/CardProjeto.vue';

const { escuro } = useTema();

watch(
    escuro,
    (valor) => {
        document.documentElement.classList.toggle("tema-escuro", valor);
    },
    { immediate: true} 
);

</script>