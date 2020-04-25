<template>
  <div class="row q-py-md justify-center">
    <div class="col-12 col-sm-6 column">
      <div class="text-weight-bold">Learn More</div>
      <ul class="q-pa-xs q-ma-none q-ml-md q-pl-md">
        <li
          v-for="(link, id) in params.learnMore"
          :key="id"
        >
          <a
            class="text-weight-medium text-secondary"
            :href="link.href"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="col-12 col-sm-6 column">
      <div class="text-weight-bold">Resources</div>
      <ul class="q-pa-xs q-ma-none q-ml-md q-pl-md">
        <li
          v-for="(link, id) in params.resources"
          :key="id"
        >
          <a
            class="text-weight-medium text-secondary"
            :href="link.href"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['params']
}
</script>
