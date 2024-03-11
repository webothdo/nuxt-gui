<script setup>
import { useSettingsStore } from '~/stores/useSettingsStore';

const controlsProps = defineProps({
    controls: Object,
    settings: Object
})

const emit = defineEmits(['updateControls', 'updateSteps'])

const settings = useSettingsStore()

const inputValueChange = () => {
    emit('updateControls',)
}
</script>

<template>
    <div class="border border-gray-700 rounded-md w-[200px] flex flex-col justify-between pt-2 px-3 bg-gray-900">
        <div>
            <div class="flex justify-between items-center font-[Poppins] gap-1 my-3">
                <label for="cx" class="text-xl">cx</label>
                <input v-model="controlsProps.controls.cx" @change="inputValueChange(e)" type="number" name="cx" id=""
                    :step="settings.steps" class="border-none rounded bg-stone-500 w-14 h-8 pl-4">
            </div>

            <div class="flex justify-between items-center font-[Poppins] gap-1 my-3">
                <label for="cx">cy</label>
                <input v-model="controlsProps.controls.cy" @change="inputValueChange(e)" type="number" name="cx" id=""
                    :step="settings.steps" class="border-none rounded-md bg-stone-500 w-1/5">
            </div>
            <div class="flex justify-between items-center font-[Poppins] gap-1 my-3">
                <label for="cx">r</label>
                <input v-model="controlsProps.controls.r" @change="inputValueChange" type="number" name="cx" id=""
                    :step="settings.steps" class="border-none rounded-md bg-stone-500 w-1/5">
            </div>
            <div class="flex justify-between items-center font-[Poppins] gap-1 my-3">
                <label for="color">Color</label>
                <input v-model="controlsProps.controls.color" type="color" name="color" id="">
            </div>
        </div>
        <GUIInterfaceCircle />

        <div class="flex flex-col mt-10  justify-self-end">
            <p>Settings</p>
            <div class="flex flex-col">
                <label for="cx">Steps</label>
                <input v-model="settings.steps" @change="" type="number" name="cx" @click="updateControls"
                    class="border-none rounded-md bg-stone-500 w-1/5">
            </div>
        </div>
        <!-- 
           

            <div class="flex flex-col">
                <label for="cx">Steps</label>
                <input v-model="settings.steps" @change="updateSteps" type="number" name="cx" id=""
                    class="border-none rounded-md bg-stone-500 w-1/5">
            </div>


        </div> -->
    </div>
</template>