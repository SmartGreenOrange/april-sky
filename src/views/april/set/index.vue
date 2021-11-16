<template>
  <div class="wrapper">
    <van-form>
      <van-cell-group>
        <label>上传图片：</label>
        <van-uploader v-model="fileImage" :max-count="1" :after-read="afterRead1" @delete="afterDelete1"/>
      </van-cell-group>
      <van-cell-group>
        <label>上传音频：</label>
        <van-uploader v-model="fileAudio" :max-count="1" :after-read="afterRead2" @delete="afterDelete2"
                      accept="audio/*"/>
      </van-cell-group>
    </van-form>
    <van-cell-group>
      <van-field
          v-model="formData.content"
          rows="1"
          autosize
          label="内容"
          type="textarea"
          placeholder="请输入内容"
      />
    </van-cell-group>
    <div class="bottom">
      <van-button type="primary" @click="add">保存</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import {Notify} from 'vant';
import * as service from "../../../service";

export default defineComponent({
  setup() {
    // data
    const fileImage = ref([])
    const fileAudio = ref([])
    const formData: any = reactive({
      imgPath: '',
      audioPath: '',
      content: '',
    })

    // methods
    // 上传图片
    const afterRead1 = async (file: any) => {
      let info = await handleUpload(file)
      formData.imgPath = info.filepath
    }
    const afterDelete1 = () => {
      // fileImage.value = []
      formData.imgPath = ''
    }
    // 上传音乐文件
    const afterRead2 = async (file: any) => {
      let info = await handleUpload(file)
      formData.audioPath = info.filepath
    }
    const afterDelete2 = () => {
      // fileImage.value = []
      formData.audioPath = ''
    }
    // 处理文件上传接口
    const handleUpload = (file: any): any => {
      return new Promise((resolve, reject) => {
        const formData = new FormData()
        formData.append('file', file.file)
        service.uploadFile(formData).then((res: any) => {
          if (res.code === 200) {
            resolve(res.data)
          } else {
            reject(res.data)
          }
        })
      })
    }
    const add = async () => {
      let res = await service.add(formData)
      if (res.code === 200) {
        Notify({type: 'success', message: '保存成功！'});
      }
    }
    return {
      formData,
      fileImage,
      fileAudio,
      afterRead1,
      afterRead2,
      afterDelete1,
      afterDelete2,
      add
    }
  }
})
</script>

<style lang="less" scoped>
.wrapper {
  padding: 1.43rem;
  background: #9993;
  min-height: 100vh;

  .van-cell-group {
    padding: 0 0.7rem;
    margin-bottom: 0.7rem;
    border-radius: 0.7rem;
    display: flex;
    align-items: center;
  }

  .bottom {
    width: 100%;
    padding: 0.7rem 0;
    background-color: #fff;
    border-radius: 0.7rem;
    display: flex;
    justify-content: center;

    button {
      width: 14rem;
    }
  }
}
</style>
