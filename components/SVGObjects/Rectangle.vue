<script setup>

const rectValue = useControlsStore().rectValue


// const props = defineProps({
//     radius: Number,
//     cx: Number,
//     cy: Number,
//     color: String,
// })


</script>

<template>
    <rect @click="$emit('clickRectangle', 'rectangle')" :x="rectValue.x.value" :y="rectValue.y.value"
        :width="rectValue.width.value" :height="rectValue.height.value" :fill="rectValue.color.value" />
</template>