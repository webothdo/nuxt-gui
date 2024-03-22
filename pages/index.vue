<script setup lang="jsx">


const controls = ref({
    cx: Number(50),
    cy: Number(50),
    r: Number(45),
    color: "#fafafa"
})



const settings = ref({
    steps: 1,

})

const updateSteps = () => {
    let defaultStep = 0.5
    if (settings.value.steps > 0) {
        settings.value.steps = settings.value.steps
    } else {
        settings.value.steps = defaultStep
    }
}

watch(() => controls.value.color, (newColor) => {
    controls.value.color = newColor
    console.log(newColor)
    console.log(controls.value.color)
},
    { deep: true }
)

function updateControls() {
    // controls.value = {
    //   cx: controls.value.cx,
    //   cy: controls.value.cy,
    //   r: controls.value.r
    // }

    console.log('update')
}

const vnode = h('div', 'Hello world!')
// const Nuxt3 = defineComponent(() => {
//     return () => <span class="text-primary font-bold">Nuxt 3</span>
// })

const el = [
    vnode,
]

// const SVGBackground = () => {
//   return <SVGObjectsCircle />
// }


</script>

<template>
    <div>
        <nav class="flex justify-between px-5 py-3">
            <h1 class="text-3xl font-bold ">Nuxt<span class="text-green-400">GUI</span></h1>
            <NuxtLink class="font-bold hover:text-green-400 font-[Gambetta]" to="https://github.com/webothdo/nuxt-gui"
                target="_blank">
                github
            </NuxtLink>
        </nav>
        <main class="flex justify-between pl-[70px]">
            <SVGBackground />
            <controlsGUI :controls="controls" :settings="settings" @updateControls="updateControls" />
        </main>
        <ObjectCreation />
    </div>
</template>
