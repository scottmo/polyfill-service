Array.prototype.map=function(n){if(this===undefined||null===this)throw new TypeError(this+" is not an object");if(!(n instanceof Function))throw new TypeError(n+" is not a function");for(var t=Object(this),i=arguments[1],r=t instanceof String?t.split(""):t,o=Math.max(Math.min(r.length,9007199254740991),0)||0,e=-1,a=[];++e<o;)e in r&&(a[e]=n.call(i,r[e],e,t));return a};