<template>
  <h1>Events for Good</h1>
  <div v-if="error">Error: {{ error }}</div>
  <div v-if="events.length" class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div v-else>Loading...</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { EventsData } from '../App.vue';
import EventService from '../services/EventService';
import EventCard from '../components/EventCard.vue';

const events = ref<EventsData[]>([]);
const error = ref('');
EventService.getEvents()
  .then((res) => {
    events.value = res.data;
  })
  .catch((err) => {
    error.value = err.message;
  });
</script>

<style lang="scss" scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
