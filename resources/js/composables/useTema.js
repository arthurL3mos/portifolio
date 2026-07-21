import { ref } from 'vue';

const escuro = ref(false);

export function useTema() {
    function alternar() {
        escuro.value = !escuro.value;
    }

    return { escuro, alternar };
}