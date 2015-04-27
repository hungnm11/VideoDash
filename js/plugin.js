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
    
    
     var createEl = function(tagName) {
        var el;
        
        tagName = tagName || 'div';
        properties = properties || {};
        
        el = document.createElement(tagName);
        console.log(el);
        return el;
    };
    
    this.each = function(obj, fn, context) {
        for (var key in obj) {
            if (hasOwnProp.call(obj, key)) {
                fn.call(context || this, key, obj[key]);
            }
        }
        
    };
    
    Modal.prototype.setScreenSize = function(el) {
        this.el_ = el;
        this.el_.setAttribute('width', this.options.screenSize.maxWidthScreen);
        this.el_.setAttribute('height', this.options.screenSize.maxHeightScreen);
        this.el_.setAttribute('poster', this.options.poster);
        
        
    };
    
    Modal.prototype.createEl = function() {
        //var elem = document.createElement('div');
    };
    
    Modal.prototype.streamDASH = function(el) {
        this.url = this.options.mpdURL;
        var context = new Dash.di.DashContext();
        var player = new MediaPlayer(context);
        player.startup();
        player.attachView(el);
        player.attachSource(this.url);
        this.setScreenSize(el);
    };
    
    
})();