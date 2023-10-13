(function() {

 "use strict";
 
	//Homepage One Revolution Sider Activate	
    jQuery('.fullwidthbanner').show().revolution(
    {
        delay:9000,												
        startheight:748,
        startwidth:1900,
        touchenabled:"off",					
        onHoverStop:"off",
        fullWidth:"on",
        hideThumbs:2000,
        
        navigationType:"bullet",
        navigationArrows:"none",
        navigationStyle:"preview1",
        navigationHAlign:"center",
        navOffsetHorizontal:0,
        navOffsetVertical:20,
        
        fullScreenAlignForce:"on",
        stopAtSlide:-1,
        stopAfterLoops:-1,
        shadow:0,			
    });
	
	//Homepage Two Revolution Sider Activate	
    jQuery('.fullwidthbanner-two').show().revolution(
    {
        delay:9000,												
        startheight:472,
        startwidth:600,
        touchenabled:"on",					
        onHoverStop:"off",
        fullWidth:"on",
        
        hideThumbs:2000,
        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:5,
        
        navigationType:"solo",
        navigationArrows:"verticalcentered",
        soloArrowLeftHalign:"left",
        soloArrowLeftHOffset:0,
        soloArrowRightHalign:"right",
        soloArrowRightHOffset:0,	
        navigationHAlign:"center",
        
        stopAtSlide:-1,
        stopAfterLoops:-1,
        shadow:0,  
    });
    
    //Homepage Three Revolution Sider Activate	
    jQuery('.fullwidthbanner-three').show().revolution(
    {
        delay:9000,												
        startheight:516,
        startwidth:645,
        touchenabled:"on",					
        onHoverStop:"off",
        fullWidth:"on",
        
        hideThumbs:2000,
        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:5,
        
        navigationType:"solo",
        navigationArrows:"verticalcentered",
        soloArrowLeftHalign:"left",
        soloArrowLeftHOffset:0,
        soloArrowRightHalign:"right",
        soloArrowRightHOffset:0,	
        navigationHAlign:"center",
        
        stopAtSlide:-1,
        stopAfterLoops:-1,
        shadow:0,  
    });
	
})();	