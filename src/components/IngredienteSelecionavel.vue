<script lang="ts">
import tagIngrediente from "./TagIngrediente.vue";

export default {
    name: 'IngredienteSelecionavel',
    components: {
        tagIngrediente
    },
    props: {
        ingrediente: { type: String, required: true },
    },
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        aoClicar() {
            this.selecionado = !this.selecionado;

            if(this.selecionado){
                this.$emit("adicionarIngrediente", this.ingrediente)
            } else {
                this.$emit("removerIngrediente", this.ingrediente)
            }
        }
    },
    emits: ["adicionarIngrediente", "removerIngrediente"]
}
</script>

<template>
    <button @click="aoClicar" class="clicavel" :aria-pressed="selecionado">
        <tagIngrediente :ingrediente="ingrediente" :ativa="selecionado" />
    </button>
</template>

<style scoped>
.clicavel {
    cursor: pointer;
}
</style>
