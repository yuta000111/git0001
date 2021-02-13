<template>
    <h2>こんにちは</h2>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            dedault: '山田',
        },
    },
};
</script>
<style scoped>
h2 {
    font-size: 30px;
    font-weight: bold;
}
</style>
