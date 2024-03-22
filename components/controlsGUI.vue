<script setup>
import { useSettingsStore } from '~/stores/useSettingsStore';

const controlsProps = defineProps({
    controls: Object,
    settings: Object
})

const emit = defineEmits(['updateControls', 'updateSteps'])

const settings = useSettingsStore()
const selection = useSelectionsStore()





</script>

<template>
    <div
        class="border border-gray-700 rounded-md w-[200px] h-[508px] flex flex-col justify-between pt-2 px-3 bg-gray-900 overflow-clip relative">
        <div>
            <div v-if="selection.guiControl.type === 'circle'">
                <p>Circle control</p>
                <GUIInterfaceCircle />
            </div>
            <div v-else-if="selection.guiControl.type === 'rect'">
                <p>Rectangle control</p>
                <GUIInterfaceRectangle />
            </div>
            <div v-else>
                <p>Select an svg element</p>
            </div>
        </div>
        <div class="flex flex-col mt-10 justify-self-end">
            <p>Settings</p>
            <div class="space-y-2">
                <div class="flex justify-between">
                    <label for="cx">Steps</label>
                    <input v-model="settings.steps" @change="" type="number" name="cx" @click="updateControls"
                        class="border-none rounded-md bg-stone-500 w-14 h-8 pl-4">
                </div>
                <div class="flex justify-between">
                    <label for="background">background</label>
                    <input v-model="settings.svgBackground" type="color" id="background" name="background"
                        class="border-none rounded bg-stone-500 w-14 h-8 pl-2 pr-2">
                </div>
            </div>
        </div>
    </div>
</template>