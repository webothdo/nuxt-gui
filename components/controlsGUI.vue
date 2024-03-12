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
    <div class="border border-gray-700 rounded-md w-[200px] flex flex-col justify-between pt-2 px-3 bg-gray-900">
        <div>
            <div v-if="selection.guiControl === 'circle'">
                <p>Circle control</p>
                <GUIInterfaceCircle />
            </div>
            <div v-else-if="selection.guiControl === 'rectangle'">
                <p>Rectangle control</p>
                <GUIInterfaceRectangle />
            </div>
        </div>
        <div class="flex flex-col mt-10  justify-self-end">
            <p>Settings</p>
            <div class="flex flex-col">
                <label for="cx">Steps</label>
                <input v-model="settings.steps" @change="" type="number" name="cx" @click="updateControls"
                    class="border-none rounded-md bg-stone-500 w-1/5">
            </div>
        </div>
    </div>
</template>