<script setup>
import { CircleIcon, BoxIcon } from "@radix-icons/vue"
const control = useControlsStore()


</script>

<template>
    <div>
        <button @click="control.createCircle" class="border rounded bg-gray-900 h-28 w-28">
            <CircleIcon class="w-20 h-20 mx-auto " />
        </button>
        <button @click="control.createRect" class="border rounded bg-gray-900 h-28 w-28">
            <BoxIcon class="w-20 h-20 mx-auto" />
        </button>
    </div>
</template>