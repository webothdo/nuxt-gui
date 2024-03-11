<script setup>


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


</script>

<template>
  <div>
    <h1>The home page</h1>
    <main class="flex justify-between pl-[70px]">
      <SVGBackground :controls="controls" />
      <controlsGUI :controls="controls" :settings="settings" @updateControls="updateControls" />
    </main>
  </div>
</template>
