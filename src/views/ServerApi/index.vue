<template>
  <div>
    <button @click="getHomeApi()">get</button>
    <button @click="AbnormalCheckingIns()">post</button>
    <button @click="deleteCamera()">delect</button>
    <button @click="shanchuData()">put</button>

    <button @click="updata()">上传文件参数明细</button>
    {{message}}
  </div>
</template>

<script>
import { getHomeApi, AbnormalCheckingIns, deleteCamera, shanchuData, updata } from '@/api/server'
export default {
  data () {
    return {
      message: ""
    }
  },
  mounted() {
    this.getHomeApi()
  },
  methods: {
    async getHomeApi() {
      const data = await getHomeApi()
      this.message = Object.freeze(data)
    },
    async AbnormalCheckingIns() {
        await AbnormalCheckingIns({ cameraId: 123 })
    },
    async deleteCamera() {
        await deleteCamera({ data: 123 })
    },
    async shanchuData() {
        await shanchuData({ data: 123 })
    },

    async updata() {
      const data = await updata(123, '靳耀伟')
      console.log(data)
    }
  },
}
</script>