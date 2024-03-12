<script setup>

const rectValue = useControlsStore().rectValue
const selection = useSelectionsStore()

const emit = defineEmits(['clickRectangle'])

// const props = defineProps({
//     radius: Number,
//     cx: Number,
//     cy: Number,
//     color: String,
// })

const setIsActive = () => {
    if (selection.guiControl === 'rectangle') {
        rectValue.rectState.isActive = true
        setTimeout(() => {
            rectValue.rectState.isActive = false
        }, 500)
    }
}

const clickedMe = () => {
    emit('clickRectangle', 'rectangle')
    setIsActive()
}


</script>

<template>
    <rect @click="clickedMe" :x="rectValue.x.value" :y="rectValue.y.value" :width="rectValue.width.value"
        :height="rectValue.height.value" :fill="rectValue.color.value"
        :class="rectValue.rectState.isActive ? 'outline outline-fuchsia-300' : ''" />
</template>