productWidget=function(e,t){function o(e,t){var o=document.getElementsByTagName("body")[0],r=document.createElement("script");r.type="text/javascript",r.src=e,r.onload=t,o.insertBefore(r,o.firstChild)}function r(e,t){new ReviewsWidget("#"+e,{store:t.store,widget:"polaris",options:{types:"product_review",per_page:t.perPage?t.perPage:10,product_review:{sku:t.sku,hide_if_no_results:!1,enable_rich_snippets:!1},questions:{hide_if_no_results:!1,enable_ask_question:!0,show_dates:!1,grouping:""},header:{enable_summary:!0,enable_ratings:!0,enable_attributes:!0,enable_image_gallery:!0,enable_percent_recommended:!1,enable_write_review:!0,enable_ask_question:!0,overall_rating_style:"outof5",image_thumbnail_size:"large",enable_sub_header:!0},filtering:{enable:!0,enable_text_search:!0,enable_overall_rating_filter:!0,enable_ratings_filters:!0,enable_attributes_filters:!1,enable_sorting:!0},reviews:{enable_share:!0,enable_helpful_vote:!0,enable_helpful_display:!0,enable_report:!0,enable_date:!0,enable_images:!0,image_thumbnail_size:"large",enable_attributes:!0,enable_verified_badge:!0,enable_avatar:t.avatars,enable_reviewer_name:!0,enable_product_name:!1,enable_reviewer_address:!0,reviewer_address_format:"city, country",enable_reviewer_recommends:!0},text:{"Verified Buyer":"Blah"},avatars:{enable_gravatar:!0,gravatar_fallback:"identicon"}},styles:{"--base-font-size":"16px","--common-button-font-family":"inherit","--common-button-font-size":" 16px","--common-button-font-weight":" 500","--common-button-letter-spacing":" 0","--common-button-text-transform":" none","--common-button-vertical-padding":" 10px","--common-button-horizontal-padding":" 25px","--common-button-border-width":" 2px","--common-button-border-radius":" 0px","--primary-button-bg-color":" #0E1311","--primary-button-border-color":" #0E1311","--primary-button-text-color":" #ffffff","--secondary-button-bg-color":" transparent","--secondary-button-border-color":" #0E1311","--secondary-button-text-color":" #0E1311","--common-star-color":t.primaryClr,"--medium-star-size":"22px","--small-star-size":"19px","--heading-text-color":" #333333","--heading-text-font-weight":" 600","--heading-text-font-family":" inherit","--heading-text-letter-spacing":"0","--heading-text-transform":"none","--body-text-color":t.textClr,"--body-text-line-height":"125%","--body-text-font-family":" inherit","--body-text-letter-spacing":"0","--body-text-transform":"none","--inputfield-text-font-family":"inherit","--input-text-font-size":"14px","--inputfield-text-font-weight":"400","--inputfield-text-color":"#0E1311","--inputfield-border-color":"rgba(0,0,0,0.2)","--inputfield-background-color":"transparent","--inputfield-border-width":"1px","--inputfield-border-radius":"0px","--common-border-color":"rgba(0,0,0,0.15)","--common-border-width":"1px","--common-sidebar-width":"190px","--slider-indicator-bg-color":"rgba(0,0,0,0.1)","--slider-indicator-button-color":"#0E1311","--slider-indicator-width":"170px","--badge-icon-color":"#0E1311","--badge-text-color":"#0E1311","--badge-text-transform":"none","--author-font-size":"inherit","--author-text-transform":"none","--avatar-thumbnail-size":"60px","--avatar-thumbnail-border-radius":"100px","--avatar-thumbnail-text-color":" #0E1311","--avatar-thumbnail-bg-color":"rgba(0,0,0,0.1)","--photo-video-thumbnail-size":t.media_size,"--photo-video-thumbnail-border-radius":"0px","--mediaslider-scroll-button-icon-color":"#0E1311","--mediaslider-scroll-button-bg-color":"rgba(255, 255, 255, 0.85)","--mediaslider-overlay-text-color":"#ffffff","--mediaslider-overlay-bg-color":"rgba(0, 0, 0, 0.8)","--mediaslider-item-size":"110px","--pagination-tab-text-color":"#0E1311","--pagination-tab-text-transform":"none","--pagination-tab-text-letter-spacing":"0","--pagination-tab-text-font-size":"16px","--pagination-tab-text-font-weight":"600","--pagination-tab-active-text-color":"#0E1311","--pagination-tab-active-text-font-weight":"600","--pagination-tab-active-border-color":"#0E1311","--pagination-tab-border-width":"3px"}})}if("just-my-look1"==t.store||"haute-florist"==t.store||"euro-car-parts"==t.store||"car-parts-4-less-limited"==t.store)"haute-florist"==t.store?(t.primaryClr="#ff735e",t.avatars=!1,t.media_size="160px"):"car-parts-4-less-limited"==t.store?(t.primaryClr="#e05c0b",t.avatars=!1,t.media_size="160px"):(t.avatars=!0,t.media_size="60px"),window.onload=function(){o("https://widget.reviews.io/polaris/build.js",function(){r(e,t)})};else{var a=document.getElementById(e),n="https://widget.reviews.io/product/widget",l="version=13&";t.elementId=e;for(i in t)"sku"==i&&Array.isArray(t[i])&&(t[i]=t[i].join(";")),l.length>0&&(l+="&"),"object"!=typeof t[i]?l+=i+"="+encodeURIComponent(t[i]):l+=i+"="+encodeURIComponent(JSON.stringify(t[i]));var d=document.createElement("IFRAME");d.name+=e+"_frame",d.id+=e+"_frame",d.setAttribute("frameborder",0),d.width="100%",d.scrolling="no",d.maxWidth="100%",d.minWidth="100%",d.title="Reviews Product Widget",a.innerHTML="",a.appendChild(d),window.onresize=function(){d.width=window.getComputedStyle(a,null).getPropertyValue("width"),d.style.width=window.getComputedStyle(a,null).getPropertyValue("width")+"px"};if("get"==(l.length>1e3?"post":"get"))d.setAttribute("src",n+"?"+l);else{var s=document.createElement("form");s.style="display:none;",s.method="POST",s.action=n,s.target=e+"_frame";for(var c in t){var b=document.createElement("input");b.type="hidden",b.value=t[c],b.name=c,s.appendChild(b)}document.body.appendChild(s),s.submit()}var m=function(o){try{var r=JSON.parse(o.data);if(void 0!=r.action)switch(r.action){case"product-resize":r.elementId==e&&(d.height=r.height);break;case"product-scroll":if(r.elementId==e){var i=d.getBoundingClientRect().top-document.body.getBoundingClientRect().top;window.scrollTo(0,i)}break;case"product-summary":r.elementId==e&&"function"==typeof t.onSummary&&t.onSummary(r)}}catch(e){}};window.addEventListener?addEventListener("message",m,!1):attachEvent("onmessage",m)}},"function"==typeof productWidgetCallback&&productWidgetCallback();