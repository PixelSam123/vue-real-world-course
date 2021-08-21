<template>
  <div v-if="error">Error: {{ error }}</div>
  <div v-if="Object.keys(event).length">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  <div v-else>Loading...</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { EventsData } from '../App.vue';
import EventService from '../services/EventService';

/* global defineProps */
const props = defineProps<{
  id: string;
}>();

const event = ref<EventsData>(<EventsData>{});
const error = ref('');
EventService.getEventById(props.id)
  .then((res) => {
    event.value = res.data;
  })
  .catch((err) => {
    error.value = err.message;
  });
</script>
