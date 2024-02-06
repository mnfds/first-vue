<template>
    <div>
        <h1>V-text Dan v-html directive</h1>
        <p>Cara Menampilkan Data Vue</p>
        <div>
            <h2>Dengan Cara {}</h2>
            <p>{{ message1 }}</p>
        </div>
        <div>
            <h2>Dengan Cara V-text</h2>
            <p v-text="message2"></p>
        </div>
        <div>
            <h2>Dengan Cara V-html</h2>
            <p v-html="message3"></p>
        </div>
        <h2><b>NOTE</b></h2>
        <p>v-html dapat membawa tag HTML sedangkan V-text Tidak dapat Melakukannya</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message1: "Memunculkan Data Dengan {{  }}",
            message2: "Memunculkan Data Dengan V-text",
            message3: "<i>Memunculkan Data Dengan V-html</i>",
        };
    }
};
</script>

<style scoped>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>