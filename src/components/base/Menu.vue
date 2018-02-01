<template>
  <el-menu
    router
    @select="handleSelect"
    class="el-menu-demo"
    mode="horizontal"
    text-color="#fff"
    background-color="#00aec9"
    active-text-color="#e9669c">
    <el-menu-item index="/">HOME</el-menu-item>
    <el-submenu index="2">
      <template slot="title">CONGRESS INFORMATION</template>
      <el-menu-item index="/scientificCommittee">Scientific Committee</el-menu-item>
      <el-menu-item index="/organizingCommittee">Organizing Committee</el-menu-item>
      <el-menu-item index="/speakers">Speakers</el-menu-item>
      <el-menu-item index="/generalInformation">General Information</el-menu-item>
    </el-submenu>
    <el-menu-item>AGENDA</el-menu-item>
    <el-submenu index="3">
      <template slot="title">REGISTRATION</template>
      <el-menu-item index="/register">Registration Form</el-menu-item>
      <el-menu-item index="/registerFee">Registration Fee</el-menu-item>
    </el-submenu>
    <el-menu-item index="/abstract">ABSTRACT</el-menu-item>
    <el-menu-item index="/hotelMap">ACCOMMODATION</el-menu-item>
    <el-menu-item index="/contactUs">CONTACT US</el-menu-item>
    <el-menu-item index="/download">DOWNLOADS</el-menu-item>
    <el-menu-item index="/aboutPage">ABOUT CHONGQING</el-menu-item>
  </el-menu>
</template>

<script type="text/ecmascript-6">
  /**
   * Created by xzc
   * 描述:
   */
  export default {
    data () {
      return {}
    },
    mounted: function () {
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
  .el-menu-demo {
    padding-left: 6%;
  }
</style>
