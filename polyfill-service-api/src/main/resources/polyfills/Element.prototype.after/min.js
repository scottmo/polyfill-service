Document.prototype.after=Element.prototype.after=function(){this.parentNode&&this.parentNode.insertBefore(_mutation(arguments),this.nextSibling)},"Text"in this&&(Text.prototype.after=Element.prototype.after);