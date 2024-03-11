<script setup>
import { useControlsStore } from '~/stores/useControlsStore';


const controls = useControlsStore()

// const props = defineProps({
//     radius: Number,
//     cx: Number,
//     cy: Number,
//     color: String,
// })

const circleStore = ref({
    radius: 50,
    cx: 100,
    cy: 100,
    color: '#fafafa'
})

</script>

<template>
    <circle :r="circleStore.radius" :cx="circleStore.cx" :cy="circleStore.cy" :fill="circleStore.color"
        @click="controls.updateControls(circleStore)" />
</template>