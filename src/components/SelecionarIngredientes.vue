<script lang="ts">
import { obterCategorias } from "@/http/index";
import CardCategoria from "./CardCategoria.vue";
import BotaoNavegar from "./BotaoNavegar.vue";
import type ICategoria from "@/interfaces/ICategoria";

export default {
    data() {
        return {
            categorias: [] as ICategoria[]
        }
    },
    async created() {
        this.categorias = await obterCategorias();
    },
    components: {
        CardCategoria,
        BotaoNavegar
    },
    emits: ['adicionarIngrediente', 'removerIngrediente', 'buscarReceitas'],
}
</script>

<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>
        <p class="paragrafo-lg instrucoes">
            Selecione abaixo os ingredientes que você quer utilizar nesta receita:
        </p>
        <ul class="categorias">
            <li v-for="categoria in categorias" v-bind:key="categoria.nome">
                <CardCategoria :categoria="categoria" @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
                    @remover-ingrediente="$emit('removerIngrediente', $event)" />
            </li>
        </ul>
        <p class="paragrafo">
            *Atenção, consideramos que você tenha em casa sal, pimente e água.
        </p>

        <br>
        <BotaoNavegar texto="Buscar Receita" @click="$emit('buscarReceitas')" />
    </section>
</template>

<style scoped>
.selecionar-ingredientes {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo-ingredientes {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.instrucoes {
    margin-bottom: 2rem;
}

.categorias {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.dica {
    align-self: flex-start;
    margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
    .dica {
        margin-bottom: 2.5rem;
    }
}
</style>