<script lang="ts">
import type IReceita from '@/interfaces/IReceita';
import type { PropType } from 'vue';

export default {
    props: {
        receita: {type: Object as PropType<IReceita>, required: true}
    }
}
</script>

<template>
    <article class="card-receita">
        <div >
            <img class="receita-imagem" :src="`/imagens/receitas/${receita.imagem}`" alt="">
        </div>
        <div class="receita-corpo">
            <p class="receita-nome">{{ receita.nome }}</p>
        </div>
    </article>
</template>

<style scoped>
.card-receita {
    width: 17.625rem;
    max-width: 19.5rem;

    border-radius: 1rem;
    background: var(--Branco, #FFF);
    box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
}

.receita-corpo {
    padding: 2rem 1rem;
}

.receita-imagem {
    width: 100%;
    border-radius: 1rem 1rem 0rem 0rem;
    display: block;
}

.receita-nome {
    font-weight: 700;
    color: var(--cinza, #444);
}
</style>