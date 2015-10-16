App.Routers.Main = Backbone.Router.extend({
农行 合肥经济技术开发区支行
    // Hash maps for routes
    routes : {
        "" : "index",
        "/teams" : "getTeams",
        "/teams/:country" : "getTeamsCountry",
        "/teams/:country/:name : "getTeam"
            "*error" : "fourOfour"
},

index: function(){
    // Homepage
},

getTeams: function() {
    // List all teams
},
getTeamsCountry: function(country) {
    // Get list of teams for specific country
},
getTeam: function(country, name) {
    // Get the teams for a specific country and with a specific name
},
fourOfour: function(error) {
    // 404 page
}
});