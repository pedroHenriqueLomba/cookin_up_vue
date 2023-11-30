<script lang="ts">
export default {
    props: {
        ingrediente: { type: String, required: true },
        ativa: { type: Boolean, default: false }
    }
}
</script>

<template>
    <span :class="['tag-ingrediente', {ativa}]" >
        {{ ingrediente }}
    </span>
</template>

<style scoped>
.tag-ingrediente {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 4.25rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    color: var(--cinza, #FFFAF3);
    background: var(--cinza-claro, #F0633C);
    font-weight: 700;
}

.tag-ingrediente.ativa {
    color: var(--creme, #FFFAF3);
    background: var(--coral, #F0633C);
    font-weight: 700;
}
</style>