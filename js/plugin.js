(function(){
    
    this.Modal = function() {
        
        var defaults = {
            mpdURL: "",
            screenSize: {
                maxWidthScreen: 640,
                maxHeightScreen: 480
            },
            advertisement: {
                setTimeStart: 2,
                setAdvertisementTime: 10,
                setContent: ""
            },
            poster: ""
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
    
    Modal.prototype.setScreenSize = function() {
        this.vid = document.querySelector('video');
        this.vid.setAttribute('width', this.options.screenSize.maxWidthScreen);
        this.vid.setAttribute('height', this.options.screenSize.maxHeightScreen);
        this.vid.setAttribute('poster', this.options.poster);
    };
    
    Modal.prototype.streamDASH = function(elem) {
        
        var url = this.options.mpdURL;
        var context = new Dash.di.DashContext();
        var player = new MediaPlayer(context);
        player.startup();
        player.attachView(elem);
        player.attachSource(url);
                
        this.setScreenSize();

    };
    
    
})();