<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <form @submit.prevent="addNotebook">
                    <h2>Form</h2>
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" id="name" name="name" class="form-control" placeholder="Notebook Name" v-model="notebookData.name">
                        <span class="text-danger">{{errors.name?errors.name[0]:""}}</span>
                    </div>
                    <div class="form-group">
                        <label for="">body</label>
                        <input type="text" id="body" name="body" class="form-control" placeholder="Notebook body" v-model="notebookData.body">
                        <span class="text-danger">{{errors.body?errors.body[0]:""}}</span>
                    </div>
                    <button type="submit" class="btn btn-primary"> Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            notebookData:{
                name:'',
                body:''
            },
                errors:{}
        }
    },
    methods:{
        addNotebook()
        {
            axios.post('/notebook', this.notebookData).then(response=>{
//                console.log(response);
                this.notebookData="";
                this.errors="";
                this.$router.push('/');
            }).catch(error=>{
                console.log(error.response);
                this.errors=error.response.data;
            });
        }
    },
    mounted()
    {
        console.log('Component mounted.')
    }
    }
</script>
