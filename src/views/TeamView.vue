<script setup>
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'

import { useTeamStore } from '@/stores/TeamStore'

let team = useTeamStore()

team.fill()
</script>

<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>

  <TeamFooter />
</template>