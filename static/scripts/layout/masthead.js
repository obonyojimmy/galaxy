define(["utils/utils","layout/menu","layout/scratchbook","mvc/user/user-quotameter"],function(a,b,c,d){var e=Backbone.View.extend({initialize:function(a){var e=this;this.options=a,this.setElement(this._template()),this.$navbarBrandLink=this.$(".navbar-brand-link"),this.$navbarBrandImage=this.$(".navbar-brand-image"),this.$navbarBrandTitle=this.$(".navbar-brand-title"),this.$navbarTabs=this.$(".navbar-tabs"),this.$quoteMeter=this.$(".quota-meter-container"),this.collection=new b.Collection,this.collection.on("add",function(a){e.$navbarTabs.append(new b.Tab({model:a}).render().$el)}).on("reset",function(){e.$navbarTabs.empty()}).on("dispatch",function(a){e.collection.each(function(b){a(b)})}).fetch(this.options),Galaxy.frame=this.frame=new c({collection:this.collection}),Galaxy.quotaMeter=this.quotaMeter=new d.UserQuotaMeter({model:Galaxy.user,el:this.$quoteMeter}),$(window).on("click",function(a){var b=$(a.target).closest("a[download]");1==b.length&&(0===$("iframe[id=download]").length&&$("body").append($("<iframe/>").attr("id","download").hide()),$("iframe[id=download]").attr("src",b.attr("href")),a.preventDefault())}).on("beforeunload",function(){var a="";return e.collection.each(function(b){var c=b.get("onbeforeunload")&&b.get("onbeforeunload")();c&&(a+=c+" ")}),""!==a?a:void 0})},render:function(){return this.$navbarBrandTitle.html("Galaxy "+(this.options.brand&&"/ "+this.options.brand||"")),this.$navbarBrandLink.attr("href",this.options.logo_url),this.$navbarBrandImage.attr("src",Galaxy.root+"static/images/galaxyIcon_noText.png"),this.quotaMeter.render(),this},_template:function(){return'<div id="masthead" class="navbar navbar-fixed-top navbar-inverse"><div class="navbar-header"><div class="navbar-tabs"/></div><div class="navbar-brand"><a class="navbar-brand-link"><img class="navbar-brand-image"/><span class="navbar-brand-title"/></a></div><div class="quota-meter-container"/><div class="navbar-icons"/></div>'}});return{View:e}});
//# sourceMappingURL=../../maps/layout/masthead.js.map