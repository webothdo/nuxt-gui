<script setup>

const props = defineProps({
    controls: Object
})

const selection = useSelectionsStore()

function clickedMe(e) {
    selection.guiControlUpdate(e)
}

</script>

<template>
    <svg width="800" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
        class="border border-gray-700 rounded-xl bg-black">
        <SVGObjectsRectangle @clickRectangle="clickedMe" />
        <SVGObjectsCircle @clickCircle="clickedMe" />
    </svg>
</template>