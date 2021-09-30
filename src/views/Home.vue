<template>
  <div class="home">
    <el-date-picker
      v-model="date"
      type="monthrange"
      range-separator="To"
      start-placeholder="Start month"
      end-placeholder="End month"
      :disabled-date="disabledDate"
    >
    </el-date-picker>

    <el-table v-loading="loading" :data="monthlyData" style="width: 100%; height: 500px">
      <el-table-column prop="DateTime" label="Date" sortable />
      <el-table-column prop="Complete" label="Complete" sortable />
      <el-table-column prop="Revenue" label="Revenue" sortable />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchDemoData } from '@/api/index';
// import { DemoData } from '@/types/DemoData';
type MonthlyDataType = {
  App: [];
  Appkey: number;
  Commission: number;
  Complete: number;
  DateTime: string;
  Revenue: number;
  Status: number;
};

const date = ref('');
const loading = ref(false);
// const data = ref({} as DemoData);
const monthlyData = ref<MonthlyDataType[]>();
const disabledDate = (time: Date) => time.getFullYear() <= 2017;

onMounted(async () => {
  loading.value = true;
  const {
    Payment: { Monthly }
  } = await fetchDemoData({ search_year: 2021 });
  console.log(Monthly);
  loading.value = false;

  monthlyData.value = Monthly;
});
</script>

<style scoped></style>
