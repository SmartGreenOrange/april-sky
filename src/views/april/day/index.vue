<template>
  <transition name="fade" mode="out-in">
    <div class="wrapperA" v-if="page === 1">
      <img src="../../../assets/open_letter.jpg" alt="" @click="changePage"/>
    </div>
  </transition>

  <transition name="fade" mode="out-in">
    <div class="wrapperB" v-if="page === 2">
      <audio autoplay loop v-show="false">
        <!-- <source src="/" type="audio/ogg" /> -->
        <!--        <source src="/music/aprillife.mp3"/>-->
        <source :src="info.audioPath"/>
      </audio>
      <div class="bg"></div>
      <Particles
          id="tsparticles"
          :particlesInit="particlesInit"
          :particlesLoaded="particlesLoaded"
          :options="option"
      />
      <div class="content">
        <!--        <img class="c-img" src="../../../assets/didi.gif" alt=""/>-->
        <img class="c-img" :src="info.imgPath" alt=""/>
        <div>
          <span class="text">{{ text }}</span>
          <span :class="{ love: finish }">💕</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent, ref, reactive, onMounted} from "vue";
import * as service from "../../../service";
import optionRaw from "./option";
import {getList} from "../../../service";

export default defineComponent({
  setup() {
    const option = reactive(optionRaw);
    const page = ref(1);
    const text = ref("");
    const finish = ref(false);
    const publicPath = ref('http://42.192.190.187:8088/uploads/')
    const info: any = reactive({})

    onMounted(() => {
      // service.getAll()
    })

    const particlesLoaded = (main: any) => {
      // console.log(main);
    };
    const particlesInit = (container: any) => {
      // console.log(container);
    };
    const anaFilePath = (str: string) => publicPath.value + str

    const changePage = () => {
      page.value = 2;
      service.getList().then((res: any) => {
        res = res[0]
        res.imgPath = anaFilePath(res.imgPath)
        res.audioPath = anaFilePath(res.audioPath)
        for (let key in res) {
          info[key] = res[key]
        }
        showText(info.content)
      })
    };

    const showText = (info: string) => {
      let count = 1;
      let t = "";
      let timer = setInterval(() => {
        if (t.length === info.length) {
          finish.value = true;
          clearInterval(timer);
        } else {
          t = info.substring(0, count);
          count++;
          text.value = t;
        }
      }, 200);
    };

    return {
      particlesLoaded,
      particlesInit,
      changePage,
      option,
      page,
      text,
      finish,
      info
    };
  },
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>

<style lang="less" scoped>
@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes blingbling {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.wrapperA {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;

  > img {
    margin-top: 40%;
    width: 6rem;
    box-shadow: 0 0 10px #999;
    animation: heartbeat 1.5s ease-out infinite;
  }
}

.wrapperB {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  .bg {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url("../../../assets/bg1.jpg");
    background-size: cover;
    opacity: 0.15;
  }

  .content {
    padding: 30px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 1.2rem;

    .c-img {
      width: 100%;
    }

    .love {
      animation: blingbling 1s infinite;
    }
  }
}
</style>
