	var Section=function()
	{
		this.sections=[];
	};
	Section.prototype={
		heading: false,
			
		headingRank: function() {
			// if an implied heading was set, treat is as "over the board highest rank"
			/* @todo: check if this is true!!! */
			return isHeading(this.heading) ? getHeadingRank(this.heading) : 1;
		},
		
		append: function(what)
		{
			what.container=this;
			this.sections.push(what);
		},
			
		getHeadingText: function()
		{
			var headingEl = this.heading;
			if (isHeading(headingEl)) {
				if (_getTagName(headingEl)=='HGROUP') {
					var rank = this.headingRank();
					headingEl = headingEl.getElementsByTagName('h'+(-rank))[0];
				}
				return headingEl.textContent || headingEl.innerHTML;
			}
			return headingEl;
		},
			
		asHTML: function()
		{
			var html=this.getHeadingText();
			if (this.sections.length > 0) {
				html+='<ol>';
				for (var i=0; i < this.sections.length; i++) {
					html+='<li>'+this.sections[i].asHTML()+'</li>';
				}
				html+='</ol>';
			}
			return html;
		}
	};
