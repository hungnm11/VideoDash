(function(){
    
    this.Modal = function() {
        
        var defaults = {
            mpdURL: ""
        }
        
        if (arguments[0] && typeof(arguments[0]) === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }
    }
    
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }
    
    Modal.prototype.streamDASH = function(elem) {
        var url = this.options.mpdURL; 
        var context = new Dash.di.DashContext();
        var player = new MediaPlayer(context);
        player.startup();
        player.attachView(elem);
        player.attachSource(url);
    }
    
})();