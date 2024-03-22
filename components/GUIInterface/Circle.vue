<script setup>


const controls = useControlsStore()
const selection = useSelectionsStore()


if (selection.guiControl.id === selection.objectSelected.id) {
    console.log(selection.objectSelected.state)
    console.log(selection.objectSelected.state)
}


// console.log(selection.guiControl.id === selection.objectSelected.id)
</script>

<template>
    <div v-if="selection.guiControl.id === selection.objectSelected.id"
        class="flex flex-col justify-between items-center font-[Poppins] gap-1 my-3 w-full">
        <GUIComponentInput :model="selection.objectSelected" />
    </div>
    <!-- <div v-if="selection.guiControl.id === selection.objectSelected.id" v-for="(value, index) in controls.objectValue"
        :key="index" class="flex flex-col justify-between items-center font-[Poppins] gap-1 my-3">
        <GUIComponentInput v-if="selection.guiControl.id === value.id" :model="value" />
    </div> -->
</template>
