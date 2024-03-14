<script setup>


const controls = useControlsStore()

</script>

<template>
    <div v-for="(value, index) in controls.objectValue" :key="index"
        class="flex flex-col justify-between items-center font-[Poppins] gap-1 my-3">
        <GUIComponentInput :model="value" />
    </div>
</template>
