<script setup>

const rectangleIsActive = ref(false)

const setIsActive = () => {
    rectangleIsActive.value = true
    setTimeout(() => {
        rectangleIsActive.value = false
    }, 10000)
}

const selection = useSelectionsStore()

function clickedMe(e) {
    console.log(e)
    selection.guiControlUpdate(e)
    console.log(selection.guiControl)
}

</script>

<template>
    <svg width="800" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
        class="border border-gray-700 rounded-xl bg-black">
        <SVGObjectsRectangle @clickRectangle="clickedMe" />
        <SVGObjectsCircle @clickCircle="clickedMe" />
    </svg>
</template>