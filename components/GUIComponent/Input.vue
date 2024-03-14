<script setup>
const props = defineProps({
    model: Object
})

const selection = useSelectionsStore()

// watch(() => props.model, () => {
//     console.log(props.model)
// },
//     { deep: true }
// )

</script>

<template>
    <div v-if="selection.guiControl.id === props.model.id" v-for="(value, index) in props.model.control" :key="index"
        class="flex justify-between w-full">
        <label :for="value.label" class="text-xl">{{ value.label }}</label>
        <input v-model="value.value" :type="value.type" :name="value.label" :id="value.label"
            class="border-none rounded bg-stone-500 w-14 h-8 pl-4">
    </div>
</template>