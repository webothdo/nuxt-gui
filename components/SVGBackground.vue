<script setup>

const props = defineProps({
    controls: Object
})

function clickedMe(e) {
    console.log(e.clientX, e.clientY, e.view)
}

</script>

<template>
    <svg width="800" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
        class="border border-gray-700 rounded-xl bg-black">
        <SVGObjectsCircle />
        <!-- <circle :r="props.controls.r" :cx="props.controls.cx" :cy="props.controls.cy" :fill="props.controls.color"
            @click="clickedMe" /> -->
    </svg>
</template>