<script setup>


const controls = useControlsStore()

const circlecontrols = controls?.circleControl

for (let index = 0; index < circlecontrols?.length; index++) {
    console.log({ ...circlecontrols[index] })
}

const newObj = circlecontrols.map((control) => {
    return {
        ...control
    }
})

console.log(newObj[0].label, newObj[0].value)

const properties = ref({
    label: 'my label',
    value: 2
})

watch(() => circlecontrols, () => {

    circlecontrols.map((control) => {
        console.log(control.label, control.value)
        console.log(newObj[0].label, newObj[0].value)
    })
}, {
    deep: true
})

console.log(properties.value.value)
</script>

<template>
    <div v-for="(value, index) in controls.circleValue"
        class="flex justify-between items-center font-[Poppins] gap-1 my-3">
        <GUIComponentInput :model="value" />
    </div>
    <!-- <div v-for="(control, index) in circlecontrols" :key="index"
        class="flex justify-between items-center font-[Poppins] gap-1 my-3">
        <p>{{ controls.circleValue.color }}</p>
        <GUIComponentInput :model="control" />
    </div> -->
</template>
