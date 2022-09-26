<template>
  <div class="column">
    <Noti />
    <Header />
    <section>
      <h1>{{$t('package')}}</h1>
      <div>
        <Syncstatus />
        <Packages />
      </div>
    </section>
  </div>
</template>

<style scoped>
.app section {
  border-radius: 5px;
  margin: 1.5rem auto;
  padding: 2rem;
  background-color: var(--secondary-color);
}

.app .column {
  flex: 8;
  margin: 1rem;
}
.app .noti {
  background-color: var(--primary-color);
  padding: 1rem 2rem;
}

.app .noti p {
  margin: 0.5rem auto;
}

.app .noti a {
  color: var(--text-color);
  text-decoration: none;
}
.app .summary h1 {
  padding-bottom: 0.5rem;
}

.app .summary h1:first-child {
  padding-top: 0;
}

.app .summary h1 {
  padding-top: 2.5rem;
}

.app .column-side {
  flex: 4;
}

.app .column p {
  margin: 0.6rem 0;
}
</style>

<script>
import Noti from './noti.vue';
import Header from './header.vue';
import Syncstatus from './syncstatus.vue';
import Packages from './packages.vue';
export default {
    components: { Syncstatus, Noti, Header, Packages },
}
</script>
