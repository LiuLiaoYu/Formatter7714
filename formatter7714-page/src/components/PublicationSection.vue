<script lang="ts" setup>
// const isListStyle = ref(false)
// const toggleListStyle = useToggle(isListStyle)
const [isListStyle, toggleListStyle] = useToggle()

const data = reactive({
  出版地: null,
  出版者: null,
  出版年: null,
  引文页码: null,
  引用日期: null,
  公告日期或公开日期: null,
  更新或修改日期: null,
})
</script>

<template>
  <n-button @click="toggleListStyle()">
    toggle style
  </n-button>
  <div flex gap-x-3px :class="{ 'flex-col': isListStyle }">
    <label v-show="isListStyle" for="出版地" label-text>出版地:</label>
    <n-input id="出版地" v-model:value="data.出版地" placeholder="出版地" clearable />

    <span v-show="!isListStyle" label-text>:</span>

    <label v-show="isListStyle" for="出版者" label-text>出版者:</label>
    <n-input id="出版者" v-model:value="data.出版者" placeholder="出版者" clearable />

    <span v-show="!isListStyle" label-text>,</span>

    <label v-show="isListStyle" for="出版年" label-text>出版年:</label>
    <n-input id="出版年" v-model:value="data.出版年" placeholder="出版年" clearable />

    <span v-show="!isListStyle" label-text>:</span>

    <label v-show="isListStyle" for="引文页码" label-text>引文页码:</label>
    <n-input id="引文页码" v-model:value="data.引文页码" placeholder="引文页码" clearable />
  </div>

  <div flex gap-x-3px :class="{ 'flex-col': isListStyle }">
    <label v-show="isListStyle" for="公告日期或公开日期" label-text>公告日期或公开日期:</label>
    <n-input id="公告日期或公开日期" v-model:value="data.公告日期或公开日期" placeholder="公告日期或公开日期" clearable />

    <label v-show="isListStyle" for="更新或修改日期" label-text>更新或修改日期:</label>
    <span v-show="!isListStyle" label-text>(</span>
    <n-input id="更新或修改日期" v-model:value="data.更新或修改日期" placeholder="更新或修改日期" clearable />
    <span v-show="!isListStyle" label-text>)</span>

    <label v-show="isListStyle" for="引用日期" label-text>引用日期:</label>
    <span v-show="!isListStyle" label-text>[</span>
    <n-input id="引用日期" v-model:value="data.引用日期" placeholder="引用日期" clearable />
    <span v-show="!isListStyle" label-text>]</span>
  </div>

  <!-- <.{出版地}:{出版者},{出版年}<:{引文页码}><[{引用日期}]>> -->
  <!-- <template v-for="key in publicationSection"> -->
  <!-- </template> -->
</template>

<style lang="scss"></style>
