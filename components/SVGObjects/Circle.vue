<script setup>

const circleValue = useControlsStore().circleValue
const selection = useSelectionsStore()

const emit = defineEmits(['clickCircle'])


// const props = defineProps({
//     radius: Number,
//     cx: Number,
//     cy: Number,
//     color: String,
// })
const setIsActive = () => {
    if (selection.guiControl === 'circle') {
        circleValue.circleState.isActive = true
        setTimeout(() => {
            circleValue.circleState.isActive = false
        }, 500)
    }
}

const clickedMe = () => {
    emit('clickCircle', 'circle')
    setIsActive()
}






</script>

<template>
    <circle @click="clickedMe" :r="circleValue.radius.value" :cx="circleValue.cx.value" :cy="circleValue.cy.value"
        :fill="circleValue.color.value"
        :class="circleValue.circleState.isActive ? 'outline outline-fuchsia-300' : ''" />
</template>