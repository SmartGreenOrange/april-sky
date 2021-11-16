<template>
  <van-nav-bar
      title="记录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
  />
  <van-list
      v-model:loading="loading"
      :finished="info.finished"
      :immediate-check="false"
      finished-text="没有更多了"
      @load="onLoad"
  >
    <div v-for="item in info.list" :key="item.id" :title="item.id" class="list-item">
      {{ item }}
    </div>
  </van-list>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, ref, watch} from 'vue'
import {useRouter} from 'vue-router'
import * as service from '../../../service/index'

export default defineComponent({
  name: "List",
  setup() {
    const router = useRouter()
    const loading = ref(false);
    const finished = ref(false);
    const info: any = reactive({
      list: [],
      page: 1,
      size: 10,
      finished: false
    })

    onMounted(() => {
      onLoad()
    })

    const onLoad = () => {
      getList()
    };

    const getList = () => {
      service.getList({page: info.page, size: info.size}).then((res: any) => {
        console.log(res)
        info.list.push(...res)
        info.finished = true
        loading.value = false
      })
    }

    // const onClickLeft = () => history.back();
    const onClickLeft = () => router.go(-1);

    return {
      onLoad,
      onClickLeft,
      info,
      loading
    };
  }
})
</script>

<style lang="less" scoped>
.list-item {
  background-color: #00aa91;
  margin: 0 1.5rem 1.7rem 1.5rem;
  border-radius: 0.4rem;
}
</style>
