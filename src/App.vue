<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  setup() {
    const isPc = ref(true);
    const href = ref(location.href);
    const readOs = () => {
      const ua = navigator.userAgent,
          isWindowsPhone = /(?:Windows Phone)/.test(ua),
          isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
          isAndroid = /(?:Android)/.test(ua),
          isFireFox = /(?:Firefox)/.test(ua),
          isChrome = /(?:Chrome|CriOS)/.test(ua),
          isTablet =
              /(?:iPad|PlayBook)/.test(ua) ||
              (isAndroid && !/(?:Mobile)/.test(ua)) ||
              (isFireFox && /(?:Tablet)/.test(ua)),
          isPhone = /(?:iPhone)/.test(ua) && !isTablet,
          isPc = !isPhone && !isAndroid && !isSymbian;
      return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc,
      };
    };

    isPc.value = readOs().isPc;
    return {
      isPc,
      href,
    };
  },
});
</script>

<template>
  <!--  <div v-if="isPc" class="noPC">-->
  <!--    <a :href="href">请使用手机访问！</a>-->
  <!--  </div>-->
  <!--  <router-view v-else />-->
  <router-view/>
</template>

<style lang="less" scoped>
@keyframes animated-border {
  0% {
    box-shadow: 0 0 0 0 #00aa9100;
  }
  100% {
    box-shadow: 0 0 0 20px #00aa9150;
  }
}

.noPC {
  margin-top: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: block;
    animation: animated-border 1.5s infinite;
    font-family: Arial;
    font-size: 18px;
    line-height: 30px;
    font-weight: bold;
    color: #00aa91;
    border: 2px solid;
    border-radius: 10px;
    padding: 15px;
  }
}
</style>
