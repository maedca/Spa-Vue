<template>
    <div class="container">
        <div class="row pull-right">
            <router-link to="/create"><a href="" class="btn btn-success">Create</a></router-link>
        </div>
        <div class="row">
            <div v-if="loading">Loading...</div>
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default" v-for="notebook in notebooks">
                    <div class="panel-heading">{{notebook.name}}-by- {{notebook.user.name}}</div>

                    <div class="panel-body">
                        {{notebook.body}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                notebooks:[],
                loading:false
            }
        },
        mounted() {
//            var self = this;
//            axios.get('/notebook').then(function (response) {
//                return self.notebooks= response.data;
////                console.log(response);
//            })
            this.loading=true;
            axios.get('notebook').then((response)=>this.notebooks=response.data, this.loading=false);
            //            console.log('Component mounted.')
        }
    }
</script>
