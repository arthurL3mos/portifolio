<script setup>
defineProps({
    numero: {type: Number, required: true},
    titulo: {type: String , required: true},
    desafios: {type: String, required: true},
})
</script>

<template>
    <article class="card-projeto">
        <h3 class="projeto-nome">{{numero}} - {{ titulo }}</h3>

        <p class="projeto-descricao">
            {{ descricao }}
        </p>
        <a href="#" class="projeto-link">Ver Projeto -></a>
    </article>
</template>

<style scoped>

.card-projeto {
    border: 1px solid var(--texto);
    border-radius: 12px;
    padding: 1.5rem;
    transition: 0.2s ease, box-shadow 0.2s ease;
}

.card-projeto:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.projeto.nome {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
}

.projeto-descricao {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 1rem;
}

.projeto-link {
    color: inherit;
    font-size: 600;
    text-decoration: none;
}

.projeto-link:hover {
    text-decoration: underline;
}

</style>