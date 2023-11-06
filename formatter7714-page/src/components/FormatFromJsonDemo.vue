<script lang="ts" setup>
import type { UploadFileInfo } from 'naive-ui'

interface Uploads { file: UploadFileInfo; fileList: UploadFileInfo[] }

const upload = ref()
const message = useMessage()

const content = ref([])

async function beforeUpload(data: Uploads) {
  if (data.file.file?.type === 'application/json')
    return true
  message.error('只能上传json文件，请重新上传')
  return false
}

function processMark(mark: string) {
  if (mark.includes('-'))
    return mark.split('-')[1]
  return mark
}

function process(data: { 引用: any }) {
  // console.log(data)
  return data['引用'].map((it: any, idx: number) => {
    for (const k of ['文献类型标识', '文献载体标识']) {
      if (it[k] !== undefined && it[k] !== null)
        it[k] = processMark(it[k])
    }
    let res = wrapFormat(patterns[it['著录格式']], it) as string
    res = res.replace(/^\./, '')

    return `[${idx + 1}] ${res}`
  })
}

async function onChange(data: Uploads) {
  const reader = new FileReader()
  reader.readAsText(data.file.file as File, 'utf-8')
  reader.onloadend = async function () {
    let res
    try {
      res = JSON.parse(this.result as string)
      message.info(`处理${data.file.file?.name}`)
    }
    catch (err) {
      message.error('请检查json文件格式是否正确')
    }
    content.value = process(res)
  }
}
</script>

<template>
  <div
    h-80vh
    flex
    flex-col
    items-center
    justify-center
    gap-0.8em
    md:flex-row
  >
    <div style="min-width: 20em;">
      <!-- <img src="/res/formatter7714-logo.svg" alt="formatter7714" :style="{ filter: isDark ? 'invert(1)' : undefined }" style="font-family: v-mono;"> -->
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 35"
        >
          <text
            font-size="20"
            font-family="Fira Code"
            font-weight="700"
            fill="currentColor"
          >
            <tspan
              x="10"
              y="20"
            >&lt;{77
            </tspan>
            <tspan
              x="40"
              y="30"
            >14}&gt;
            </tspan>
          </text>
        </svg>
      </div>
    </div>

    <div
      flex
      gap-0.8em
      md:flex-col
    >
      <div>
        <n-button @click="toggleDark()">
          切换主题
        </n-button>
      </div>
      <div w-6em>
        <n-upload
          ref="upload"
          accept=".json"
          :default-upload="false"
          :show-file-list="false"
          @before-upload="beforeUpload"
          @change="onChange"
        >
          <n-button>打开文件</n-button>
        </n-upload>
      </div>
    </div>
  </div>

  <div>
    <div
      text-center
      text-blue
      dark:text-lightblue
    >
      schema:
      <a href="https://liuliaoyu.github.io/schemas/formatter7714.json">
        https://liuliaoyu.github.io/schemas/formatter7714.json</a>
    </div>
  </div>

  <div v-show="content.length > 0">
    <n-card title="输出">
      <div
        v-for="i, k in content"
        :key="k"
      >
        {{ i }}
      </div>
    </n-card>
  </div>
</template>

<style lang="scss"></style>
