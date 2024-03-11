<script setup>

const controls = useControlsStore()

const circlecontrols = controls?.circleControl

for (let index = 0; index < circlecontrols?.length; index++) {
    console.log(circlecontrols[index])


}

const properties = ref({
    label: 'my label',
    value: 2
})

console.log(properties.value.value)
</script>

<template>

    <template v-for="control in circlecontrols">
        <p>{{ control.value }}</p>
        <GUIComponentInput :model="control" />
    </template>
</template>
