<script lang="ts" setup>
let templates: { [property: string]: any } = {
  formatType: '专著',
}

for (const [key, value] of Object.entries(fmt7714.输入模板))
  templates[key] = value

templates = reactive(templates)

const data = computed(() => templates[templates.formatType])

// const formatType = '著录格式类型'

const fmt = computed(() => {
  return wrapFormat(patterns[templates.formatType], data.value)
})
</script>

<template>
  <div style="font-family: 'Times New Roman', 'SimSun';" text-xl>
    {{ fmt }}
  </div>

  <div w-40em flex flex-col gap-y-0.5>
    <!-- <div flex justify-between> -->
    <label for="著录格式类型" flex items-center text-1.2em>著录格式类型:</label>
    <n-select
      id="著录格式类型"
      v-model:value="templates.formatType"
      :options="options.著录格式类型" placeholder="著录格式类型"
    />
    <!-- </div> -->

    <label for="document-type-marker" flex items-center text-1.2em>文献类型:</label>
    <DocumentTypeMarker
      id="document-type-marker"
      v-model:documentType="data.文献类型标识"
      v-model:eResourceCarrier="data.文献载体标识"
    />

    <!-- <div flex justify-between -->
    <!-- v-for="key in Object.keys(data)"> -->
    <!-- <label :for="key" basis-18em text-1.2em flex items-center>{{ key }}:</label> -->
    <!--  -->
    <!-- <template v-if="Object.keys(options).indexOf(key) === -1"> -->
    <!-- <n-input :id="key" v-model:value="data[key]" :placeholder="key" clearable /> -->
    <!-- </template> -->
    <!-- <template v-if="key === '文献类型标识'"> -->
    <!-- </template> -->
    <!-- </div> -->
  </div>
</template>

<style lang="scss"></style>
