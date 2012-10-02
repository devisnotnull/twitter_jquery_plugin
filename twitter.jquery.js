/*

	Twitter Json Plugin
	Created By Alex Brown
	Version 1.0
	
*/

(function ($) {
	
	$.fn.twitterFill = function( options ) {
		
		
		 var settings = $.extend( {
			 
		  'accountName'         : 'stump201',
		  'numberOfTweets' 		: '5'
		  
		}, options);
		
		return this.each( function(){

			var $this = $(this);
			
			this.twitter = {
	
				getTweets : function(){
					
					$.getJSON("https://api.twitter.com/1/statuses/user_timeline.json?screen_name="+ settings.accountName +"&callback=?&count="+ settings.numberOfTweets +"", function(data) {
						
						$.each(data, function(i, item) {
						
							var e = document.createElement('div');
							
							var tweet = $("<div></div>").addClass('tweet').html(this.text);
						 
							tweet.html('<div class="content">' +
							
							tweet.html()
								.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>')
								.replace(/(^|\s)#(\w+)/g,'$1<a href="http://search.twitter.com/search?q=%23$2">#$2</a>')
								.replace(/(^|\s)@(\w+)/g,'$1<a href="http://twitter.com/$2">@$2</a>')
								+ ' - <span class="tweet_time">' + $(this).timeSince(this.created_at) + '</span></div>').appendTo('#'+ $this.attr('id'));
				
						});
					
					}); 
				},
				
				getImage : function(){
					
				},
				
				getUpdate : function(){
					
					
				}
				
				
			}

			
			this.twitter.getTweets();
			this.twitter.getImage();
			
			
		})
	}
		
}) ( jQuery )