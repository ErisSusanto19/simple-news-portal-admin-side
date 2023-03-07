<script>
import Button from "./Button.vue"

export default {
    components: {
        Button
    },

    props: {
        role: String,
        page: String,
        info: Object,
        category: Object,
        history: Object,
        queue: Number
    },

    emits: ['changePage', 'updateNewsStatus', 'deleteCat'],

    data() {
        return {
            status: "",
            optionStts : [{name: 'Active'}, {name: 'Inactive'}, {name: 'Archive'}]
        }
    },

    created(){
        if(this.info){
            this.status = this.info.status
        }
    },

    methods: {
        changePage(payload){
            // console.log(payload, '<<< from table row');
            this.$emit("changePage", payload)
        },

        updateNewsStatus(payload){
            // console.log(payload, '<<< from table row');
            this.$emit("updateNewsStatus", payload)
        },

        deleteCat(id){
            // console.log(id, '<<< from Table Row');
            this.$emit('deleteCat', id)
        }
    }
}
</script>

<template>
    <tr>
        <td>{{ queue }}</td>
        <td v-if="page === 'news'">{{ info.title }}</td>
        <td v-if="page === 'news'">
            <img :src="info.imgUrl" class="img-fluid" alt="">
        </td>
        <td v-if="page === 'news'">{{ info.content }}</td>
        <td v-if="page === 'news'">{{ info.Category.name }}</td>
        <td v-if="page === 'news'">{{ info.Author.username }}</td>
        <td v-if="page === 'news'">
            <span v-if="role === 'Staff'">{{ info.status }}</span>
            <select v-if="role === 'Admin'" @change="updateNewsStatus({id: info.id, status: status})" v-model="status">
                <option v-for="(stts, idx) in optionStts" :key="idx" :value="stts.name">{{ stts.name }}</option>
            </select>
        </td>
        <td v-if="page === 'news'">
            <Button @click.prevent="changePage({newsId: info.id})">
                <span class="text-primary">
                <i class="fa-solid fa-pen"></i>
                </span>
            </Button>
        </td>
        <td v-if="page === 'category'">{{ category.name }}</td>
        <td v-if="page === 'category'">
            <Button @click.prevent="changePage({categoryId: category.id})">
                <span class="text-primary">
                <i class="fa-solid fa-pen"></i>
                </span>
            </Button>
        </td>
        <td v-if="page === 'category'">
            <Button @click.prevent="deleteCat(category.id)">
                <span class="text-danger">
                <i class="fa-solid fa-trash-can"></i>
                </span>
            </Button>
        </td>
        <td v-if="page === 'history'">{{ history.name }}</td>
        <td v-if="page === 'history'">{{ history.description }}</td>
        <td v-if="page === 'history'">{{ history.createdAt }}</td>
        <td v-if="page === 'history'">{{ history.updatedBy }}</td>
    </tr>
</template>