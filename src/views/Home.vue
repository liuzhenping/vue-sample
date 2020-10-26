<template>
  <el-card class="box-card">
    <div class="func-card">
      <el-row :gutter="40">
        <el-col :span="6">
          <router-link to="booking/create">
            <el-button class="btn-block">
              {{ $t('CURD') }}
            </el-button>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link to="demo/emit">
            <el-button class="btn-block">
              Emit
            </el-button>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link to="demo/ref">
            <el-button class="btn-block">
              Refs
            </el-button>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link to="demo/vuex">
            <el-button class="btn-block">
              Vuex
            </el-button>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
    .func-card{
        background-color: #ebf5ff;
        padding: 2.5rem;

        .el-col{
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    .btn-block{
        width: 100%;
    }
</style>
