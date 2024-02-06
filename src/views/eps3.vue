<template>
    <div>
        <h1>Cara Melakukan Looping Data Pada Vuejs</h1>
        <div>
            <h2>Perulangan Menggunakan V-for</h2>
            <p>Perulangan Angka</p>
            <span v-for="number in 5">
                {{ number }}
            </span>
            <p><b>Perulangan Pada Array</b></p>
            <ul v-for="namabuah in buah">
                <li>
                    {{ namabuah }}
                </li>
            </ul>
            <ul v-for="namamurid in murid">
                <li>
                    {{ namamurid.nama }} memiliki nilai = {{ namamurid.nilai }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buah : ['apel','jeruk','melon'],
            murid : [
                {nama : 'juna', nilai: 0},
                {nama : 'budi', nilai: 100},
                {nama : 'toni', nilai: 70},
            ],
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