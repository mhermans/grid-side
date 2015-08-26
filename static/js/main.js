$(document).ready(function(){
    // Employ Masonry layout configuration
    var $container = $(".masonry-flex-container").imagesLoaded(function() {
        $container.masonry({
            itemSelector: ".flex-item",
            columnWidth: ".flex-item",
            percentPosition: true,
            transitionDuration: 0 /* Disable animation of transitions */
        });

        $(window).resize(function() {
            $container.masonry();
        });
    });

    // Attach our lightbox handlers
    $("[data-lightbox-id]").each(function() {
        var element = $(this);
        var lightboxId = element.data("lightbox-id");
        var lightbox = $("#" + lightboxId);

        var lightboxProperties = {
            "padding": "70px", 
            "width": "100%", 
            "height": "100%",
            "background-color": "rgba(0, 0, 0, 0.95)",
            "color": "white",
            "position": "fixed",
            "top": "0px",
            "left": "0px",
            "z-index": "999"
        };
        lightbox.css(lightboxProperties);
        lightbox.hide();

        var lightboxCloseButtonProperties = {
            "position": "absolute",
            "top": "0px",
            "left": "0px",
            "z-index": "999",
            "cursor": "pointer"
        };

        var lightboxCloseButton = $("<i/>", {
            "class": "fa fa-close fa-5x",
            "click": function(e) {
                e.preventDefault();
                lightbox.hide("fast");
            }
        });
        lightboxCloseButton.css(lightboxCloseButtonProperties);
        lightboxCloseButton.appendTo(lightbox);

        element.click(function(e) {
            e.preventDefault();
            lightbox.show("fast");
        });
    });

    // Provide syntax highlighting if highlight.js included
    if (typeof hljs !== "undefined") {
        hljs.initHighlightingOnLoad();
    }
});

