<script lang="ts">
import CardReceita from "./CardReceita.vue";
import { obterTodasReceitas } from "@/http";
import type IReceita from "@/interfaces/IReceita";
import BotaoNavegar from "./BotaoNavegar.vue"
import type { PropType } from "vue";

export default {
    components: {
        CardReceita,
        BotaoNavegar
    },
    data() {
        return {
            receitas: [] as IReceita[]
        }
    },
    props: {
        ingredientes: {type: Array as PropType<String[]>, required: true}
    },
    async created() {
        this.receitas = await obterTodasReceitas();

        
        this.receitas = this.receitas.filter((receita) => {
            return receita.ingredientes.every(elemento => this.ingredientes.includes(elemento));
        })
    },
    emits: ['editarLista']
}
</script>

<template>
    <section>
        <h1 class="cabecalho titulo-receitas texto-verde ">Receitas</h1>
        <p class="texto-verde resultados-encontrados">Resultados encontrados: {{ receitas.length }}</p>

        <div v-if="receitas.length">
            <div>
                <p class="paragrafo-lg instrucoes">
                    Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
                </p>
            </div>
            <div class="selecionar-receitas">
                <CardReceita v-for="receita in receitas" :receita="receita" />
            </div>
        </div>

        <div v-else>
            <div>
                <p class="paragrafo-lg instrucoes">
                    Ops, não encontramos resultados para sua combinação, gostaria de tentar novamente?
                </p>
            </div>
            <div class="espaco-sem-receita">
                <img src="../assets/images/sem-receitas.png" alt="">
            </div>
        </div>

        <div class="espaco-botao">
            <BotaoNavegar texto="Editar Lista" @click="$emit('editarLista')" />
        </div>
    </section>
</template>

<style scoped>
.selecionar-receitas {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
    gap: 20px;
}

.texto-verde {
    color: var(--verde-medio, #3D6D4A);
}

.espaco-botao {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.resultados-encontrados {
    font-size: 20px;
    text-align: center;
}

.titulo-receitas {
    display: block;
    margin-bottom: 1.5rem;
    text-align: center;
}

.instrucoes {
    margin-bottom: 2rem;
    text-align: center;
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

.espaco-sem-receita {
    display: flex;
    justify-content: center;
}

@media only screen and (max-width: 767px) {
    .dica {
        margin-bottom: 2.5rem;
    }
}
</style>