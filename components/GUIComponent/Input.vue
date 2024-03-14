<script setup>
const props = defineProps({
    model: Object
})

const selection = useSelectionsStore()
const control = useControlsStore()

const tempValueArray = ref([])

// watch(() => props.model.control, () => {
//     if (selection.guiControl.id === props.model.id) {
//         const newSet = []
//         props.model.control.forEach(element => {
//             newSet.push(element)
//         })
//         tempValueArray.value = newSet
//         control.updateObjectValue(props.model.id, newSet)
//         console.log(tempValueArray.value)
//     }
// },
//     { deep: true }
// )

const changed = () => {
    // if (selection.guiControl.id === props.model.id) {
    //     console.log('ddj')
    //     const newSet = []
    //     props.model.control.forEach(element => {
    //         newSet.push(element)
    //     })
    //     tempValueArray.value = newSet
    //     control.updateObjectValue(props.model.id, newSet)
    // }
}



</script>

<template>
    <div v-if="selection.guiControl.id === props.model.id" v-for="(value, index) in props.model.control" :key="index"
        class="flex justify-between w-full">
        <label :for="value.label" class="text-xl">{{ value.label }}</label>
        <input @input="changed" v-model="value.value" :type="value.type" :name="value.label" :id="value.label"
            class="border-none rounded bg-stone-500 w-14 h-8 pl-4">
    </div>
</template>