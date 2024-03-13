<script setup>

// const rectangleIsActive = ref(false)

// const setIsActive = () => {
//     rectangleIsActive.value = true
//     setTimeout(() => {
//         rectangleIsActive.value = false
//     }, 10000)
// }


const el = ref([
    {
        id: 22,
        label: 'first',
        value: 'aja',
        cx: 45,
        color: 'green',
        type: 'circle'
    },
    {
        id: 245,
        label: 'second',
        value: 'bulu',
        cx: 30,
        color: 'red',
        type: 'rect'
    }
])

function getId() {
    return Math.floor(Math.random() * 10000)
}

const objectRef = ref({
    id: getId(),
    cx: 30,
    cy: 50,
    radius: 45,
    color: '#FF0000',
    type: 'circle'
})

const createObject = () => {
    el.value.push({ ...objectRef.value })
    console.log(el.value.length, el.value)
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
        <template v-for="e in el">
            <SVGObject :model="e" />
        </template>
        <!-- <SVGObjectsRectangle @clickRectangle="clickedMe" />
        <SVGObjectsCircle @clickCircle="clickedMe" /> -->
    </svg>
    <div class="text-black">
        <!-- <div>
            <label for="cx">cx</label>
            <input v-model="objectRef.cx" type="number" name="cx" id="">
        </div>
        <div>
            <label for="cy">cy</label>
            <input v-model="objectRef.cy" type="number" name="cy" id="">
        </div>
        <div>
            <label for="radius">radius</label>
            <input v-model="objectRef.radius" type="number" name="radius" id="">
        </div>
        <div>
            <label for="color">color</label>
            <input v-model="objectRef.color" type="color" name="color" id="">
        </div>
        <div>
            <label for="type">type</label>
            <input v-model="objectRef.type" type="text" name="type" id="">
        </div> -->
        <button @click="createObject" class="border bg-slate-600 text-red-400">Create Circle</button>
    </div>
</template>