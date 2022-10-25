<script lang="ts">
export default {
    name: "Badge",
    props: {
        content: {
            type: String,
            default: 'Badge'
        }
    }
}
</script>

<template>
    <div class="unselectable badge">
        <p style="font-weight: 700">{{ content }}</p>
    </div>
</template>

<style scoped lang="scss">
    .badge {
        border-radius: 5px;
        height: 2em;
        align-self: center;
        margin-left: 1em;
        margin-right: 1em;
        color: white;
        opacity: .85;
        font-size: 16px;
        padding: 0.25em;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
    }
</style>