<template>
    <div>
        <h1>Penggunaan "IF", "ELSE", Dan "ELSE IF" Dalam Vue</h1>
        <p>
            <b>predikat yang akan muncul berdasarkan kondisi dari isi properti "nilai"</b>
        </p>
        <div v-if="nilai >= 8">
            <p>Predikatmu = A</p>
        </div>
        <div v-else-if="nilai >= 5">
            <p>Predikatmu = B</p>
        </div>
        <div v-else="nilai < 5">
            <p>Predikatmu = C</p>
        </div>
    </div>
    <br>
    <div>
        <h1>Penggunaan V-SHOW</h1>
        <p v-show="msg">
            TEXT MUNCUL
        </p>
        <button @click="button">Click Here</button>
    </div>
    <br>
    <div>
        <h1><b>NOTE</b></h1>
        <P>v-show Dan v-if Sebenarnya Menggunakan Logika Yang Sama Cuman Disarankan Menggunakan V-show Cuman Untuk Keperluan FrontEnd dan V-if Jika Nilai Perbandingan Berdasarkan Database </P>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nilai: 1,
            msg: false,
        };
    },
    methods:{
        button(){
            this.msg = !this.msg
        }
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