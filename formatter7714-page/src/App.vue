<script lang="ts" setup>
import { darkTheme, lightTheme } from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : lightTheme">
    <n-message-provider>
      <n-loading-bar-provider>
        <FormatFromJsonDemo />
      </n-loading-bar-provider>
    </n-message-provider>
    <!-- <div> -->
    <!-- <formatter-input /> -->
    <!-- </div> -->

    <!-- <div> -->
    <!-- <publication-section /> -->
    <!-- </div> -->
  </n-config-provider>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&display=swap');
</style>
