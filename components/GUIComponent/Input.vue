<script setup>
const props = defineProps({
    model: Object
})

// watch(() => props.model, () => {
//     console.log(props.model)
// },
//     { deep: true }
// )

</script>

<template>
    <label :for="props.model?.label" class="text-xl">{{ props.model?.label }}</label>
    <input v-model="props.model.value" :type="props.model?.type" :name="props.model?.label" :id="props.model?.label"
        class="border-none rounded bg-stone-500 w-14 h-8 pl-4">
</template>