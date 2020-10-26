<template>
  <div id="application" class="full-container">
    <header id="application-header" class="full-width">
      <div id="application-header-container">
        <div id="application-header-left">
          <a id="logo" href="/">
            <img src="@/assets/images/logo.png">
            <span>Vue Sample</span>
          </a>
        </div>
        <div id="application-header-right">
          <el-menu class="el-menu-demo" mode="horizontal" @select="selectLanguage">
            <el-submenu index="1">
              <template slot="title">
                Language
              </template>
              <el-menu-item index="zh" :disabled="language==='zh'">
                中文
              </el-menu-item>
              <el-menu-item index="en" :disabled="language==='en'">
                English
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
    </header>
    <div id="application-main-wrapper" class="full-width">
      <div id="application-main">
        <div id="application-main-content">
          <transition
            enter-active-class="animated zoomIn"
            leave-active-class="animated fadeOut"
            mode="out-in"
          >
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  components: {},
  computed: {
    language() {
      return this.$i18n.locale
    }
  },
  methods: {
    selectLanguage(key) {
      localStorage.setItem('locale', key)
      this.$i18n.locale = key
    }
  }
}
</script>

<style lang="scss" scoped>
    #application {
        #application-header {
            position: fixed;
            height: 60px;
            top: 0;
            left: 0;
            background: #fff;
            box-shadow: 0 3px 4px rgba(0,0,0,.25);
            z-index: 99;
            box-sizing: border-box;
            #application-header-container {
                padding: 0 12%;
                #application-header-left {
                    padding: 10px 0;
                    float: left;
                    #logo {
                        display: inline-block;
                        font-size: 1.5em;
                        line-height: 40px;
                        color: #273849;
                        font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
                        font-weight: 500;
                        text-decoration: none;
                        img {
                            vertical-align: middle;
                            margin-right: 6px;
                            width: 40px;
                            height: 40px;
                            border: none;
                        }
                    }
                }
                #application-header-right {
                    float: right;
                }
            }
        }
        #application-main-wrapper {
            position: absolute;
            top: 60px;
            left: 0;
            height: calc(100% - 60px);
            #application-main {
                padding-left: 12%;
                width: 76%;
                #application-main-content {
                    margin-top: 22px;
                }
            }
        }
    }
</style>
