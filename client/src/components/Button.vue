<script>
export default {
    props: {
        class: String,
        type: String
    }
}
</script>

<template>
    <button class="btn" :class="class" :type="type">
        <slot></slot>
    </button>
</template>