<template>
    <div>
        <MainNavigation />

        <v-flex lg4 offset-lg4 class="mt-12">
            <v-text-field v-model="searchString" outlined label="Rechercher un event..." @keydown="filteredArticles"></v-text-field>
        </v-flex>

        <div class="text-center">
            <v-btn @click="toggleGrid" :class="grid ? color = 'primary' : color = 'secondary' " rounded><v-icon>mdi-format-list-checkbox</v-icon></v-btn>
        </div>

        <v-row v-if="grid">
            <v-col :cols="4" lg="4" v-for="(n, key) in filteredArticles" :key="key">
                <v-card class="elevation-1">
                    <v-card-title>{{n.fields.nom}}</v-card-title>
                    <v-card-subtitle class="mt-3 mr-3">{{n.fields.description}}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
        <div v-if="!grid">
           <v-container>
               <v-simple-table>
                   <template v-slot:default>
                       <thead>
                       <tr>
                           <th class="text-left">id</th>
                           <th class="text-left">Nom</th>
                           <th class="text-left">Lieu</th>
                           <th class="text-left">Description</th>
                       </tr>
                       </thead>
                       <tbody>
                           <tr v-for="(n, key) in filteredArticles" :key="key">
                               <td class="pt-12 pb-12">{{ n.datasetid }}</td>
                               <td class="pt-12 pb-12">{{ n.fields.nom }}</td>
                               <td class="pt-12 pb-12">{{ n.fields.lieu }}</td>
                               <td class="pt-12 pb-12">{{ n.fields.description }}</td>
                           </tr>
                       </tbody>
                   </template>
               </v-simple-table>
           </v-container>
        </div>
    </div>
</template>

<script>
    import MainNavigation from "@/components/navigation/MainNavigation";
    import axios from 'axios'

    export default {
        components: { MainNavigation },
        data() {
            return {
                apiKey: 'b6b5d5ac7210292761d683d6af73b1706ed66d88a86f2d6982fb5ad7',
                searchString: '',
                events: null,
                grid: true,
            }
        },
        created: function () {
            this.fetchData()
        },
        watch: {
            currentBranch: 'fetchData'
        },
        methods: {
            toggleGrid: function() {
                if(this.grid == false) {
                    this.grid = true
                } else {
                    this.grid = false
                }
            },
            fetchData: function () {
                var self = this;
                axios.get('https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&facet=emetteur&facet=rubrique&facet=lieu&facet=ville')
                    .then(response => (this.events = response.data.records))
            }
        },
        computed: {
            filteredArticles: function () {
                var events_array = this.events;
                var searchString = this.searchString;
                if (!searchString) {
                    return events_array;
                }
                searchString = searchString.trim().toLowerCase();
                events_array = events_array.filter(function (item) {

                    if (item.fields.nom.toLowerCase().indexOf(searchString) !== -1) {
                        return item;
                    }

                })

                return events_array;
            }
        }
    }
</script>

<style lang="scss">

</style>