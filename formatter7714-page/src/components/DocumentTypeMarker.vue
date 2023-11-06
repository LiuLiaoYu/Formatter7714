<script lang="ts" setup>
const props = defineProps<{
  documentType: string | null
  eResourceCarrier: string | null
}>()

const { documentType, eResourceCarrier } = useVModels(props)

const hasCarrier = computed(() => {
  return eResourceCarrier.value === null
})
</script>

<template>
  <!-- <label for="文献类型标识" text-1.2em flex items-center>{{ "文献类型标识" }}:</label> -->
  <div flex gap-x-3px>
    <span flex items-center text-1.2em>[</span>

    <n-select
      id="文献类型标识"
      v-model:value="documentType"
      :options="options.文献类型标识"
      placeholder="文献类型标识"
    />

    <span
      flex items-center text-1.2em
      :class="{
        'dark:text-hex-3f3f3f': hasCarrier,
        'text-hex-cfcfcf': hasCarrier,
      }"
    >/</span>

    <n-select
      id="文献载体标识"
      v-model:value="eResourceCarrier"
      :options="options.文献载体标识"
      placeholder="文献载体标识(空)"
      clearable
    />
    <span flex items-center text-1.2em>]</span>
  </div>
</template>

<style lang="scss"></style>
