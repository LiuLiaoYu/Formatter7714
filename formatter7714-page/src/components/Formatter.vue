<script lang="ts" setup>
// const formatFlag = {
//   replaceDot: false,
//   replaceComma: false,
//   replaceColon: false,
// }

const referenceList = reactive([] as string[])

// const HalfWidthToFullWidth = {
//   '.': '．',
//   ',': '，',
//   '[': '［',
//   ']': '］',
//   '-': '—',
// }

const temp = example['专著'][0]

const type = ref('专著')
let data = ref(temp)

const templates = {} as any

watchEffect(() => {
  if (type.value in Object.keys(templates))
    data = templates[type.value]

  else
    data = templates[type.value] = ref((example as any)[type.value][0])
})

const fmtTemplate = computed(() => (fmt7714 as any)[type.value])
const fmt = computed(() => fmtTemplate.value)
const out = computed(() => wrapFormat(fmt.value, data.value))

// function copy_to_clip() {
//   navigator.clipboard.writeText(out.value)
// }

function addItem() {
  referenceList.push(out.value)
}
</script>

<template>
  <div p-10>
    <formatter-input />

    <div
      flex
      justify-center
    >
      <div
        m-3
        flex-1
        border-1
        border-black
        border-solid
        p-3
      >
        <form
          table
          gap-3
        >
          <div
            v-for="i, k in Object.keys(data) "
            :key="k"
            w-full
            table-row
          >
            <template v-if="i === '文献类型标识'">
              <label
                for=""
                table-cell
                text-lg
              >{{ i }} :</label>

              <select
                id=""
                v-model="data[i]"
                name=""
                table-cell
                text-lg
              >
                <option
                  v-for="[name, code] in Object.entries(fmt7714['文献类型'])"
                  :key="code"
                  :value="code"
                >
                  {{ name }}({{ code }})
                </option>
              </select>
            </template>

            <template v-else-if="i === '文献载体标识'">
              <label
                for=""
                table-cell
                text-lg
              >{{ i }} :</label>

              <select
                id=""
                v-model="data[i]"
                name=""
                table-cell
                text-lg
              >
                <option :value="null">
                  (空)
                </option>
                <option
                  v-for="[name, code] in Object.entries(fmt7714['电子资源载体'])"
                  :key="code"
                  :value="code"
                >
                  {{ name }}({{ code }})
                </option>
              </select>
            </template>

            <template v-else-if="i !== '原例'">
              <label
                for=""
                table-cell
                text-lg
              >{{ i }} :</label> <input
                v-model="(data as any)[i]"
                type="text"
                table-cell
                text-lg
              >
            </template>
          </div>
        </form>
      </div>

      <div
        m-3
        flex-1
      >
        <textarea
          id="text"
          name=""
          :value="out"
          h-full
          w-full
          text-6
        />
        <!-- <button @click="copy_to_clip()">copy</button> -->
        <button @click="addItem()">
          add
        </button>
      </div>
    </div>

    <hr>
  </div>

  <div>
    <div
      v-for="i, k in referenceList.length"
      :key="k"
    >
      [{{ i }}] {{ referenceList[i - 1] }}
    </div>
  </div>
  <hr>
  <div>
    <p>
      Formatter7714：一个简单的根据结构化信息进行格式化的工具，主要解决空缺信息对格式组成变化的问题，实现了GB/T 7714-2015中的文献录著格式。
    </p>
    <p>
      格式可能存在错误，下一步准备加入更多的例子，但不会在近期更新。
    </p>
    <p>
      仓库请见 <a
        href="https://github.com/LiuLiaoYu/Miscellaneous/tree/main/Formatter7714"
      >https://github.com/LiuLiaoYu/Miscellaneous/tree/main/Formatter7714</a>
    </p>
  </div>
  <hr>
  目前为demo的阶段，没有做本地存储，刷新会消失

  使用现代编辑工具，推荐typst
</template>

<style lang="scss"></style>
