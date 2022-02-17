<script setup>
import Header from '../components/Header.vue'
import LoginIn from './Login.vue'
</script>

<template>
	<Header :class="hideLoginPage ? 'hidden' : ''" />
	<LoginIn :class="hideLoginPage ? 'hidden' : ''" />
</template>