<script setup>

const circleValue = useControlsStore().circleValue


// const props = defineProps({
//     radius: Number,
//     cx: Number,
//     cy: Number,
//     color: String,
// })


</script>

<template>
    <circle @click="$emit('clickCircle', 'circle')" :r="circleValue.radius.value" :cx="circleValue.cx.value"
        :cy="circleValue.cy.value" :fill="circleValue.color.value" />
</template>