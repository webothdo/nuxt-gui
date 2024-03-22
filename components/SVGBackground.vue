<script setup lang="jsx">

const selection = useSelectionsStore()

const objectValue = useControlsStore()

const setIsActive = () => {
    selection.objectSelected.state.isActive = true
    setTimeout(() => {
        selection.objectSelected.state.isActive = false
    }, 500)

}

function clickedMe(element) {
    selection.getObjectSelected(element[1], objectValue.objectValue)
    // console.log(selection.objectSelected)
    // console.log(element)
    selection.guiControlUpdate(element[0], element[1])
    setIsActive()
}

</script>

<template>
    <svg width="800" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
        class="border border-gray-700 rounded-xl bg-black relative">
        <template v-for="e in objectValue.objectValue">
            <SVGObject @clickRect="clickedMe" @clickCircle="clickedMe" :model="e" />
        </template>
    </svg>
</template>