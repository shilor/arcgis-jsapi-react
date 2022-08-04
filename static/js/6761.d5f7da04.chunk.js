"use strict";(self.webpackChunkarcgis_jsapi_react=self.webpackChunkarcgis_jsapi_react||[]).push([[6761],{11873:function(e,t,n){function r(){return[1,0,0,0,1,0,0,0,1]}function i(e,t){return new Float64Array(e,t,9)}n.d(t,{a:function(){return i},c:function(){return r}});Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,n,r,i,o,u,a,c){return[e,t,n,r,i,o,u,a,c]},createView:i},Symbol.toStringTag,{value:"Module"}))},81949:function(e,t,n){function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function o(e,t){return new Float64Array(e,t,16)}n.d(t,{I:function(){return u},a:function(){return o},b:function(){return i},c:function(){return r}});var u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:i,fromValues:function(e,t,n,r,i,o,u,a,c,f,s,l,h,d,m,y){return[e,t,n,r,i,o,u,a,c,f,s,l,h,d,m,y]},createView:o,IDENTITY:u},Symbol.toStringTag,{value:"Module"}))},98131:function(e,t,n){function r(){return[0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3]]}function o(e,t){return new Float64Array(e,t,4)}n.d(t,{I:function(){return u},a:function(){return r},b:function(){return i},c:function(){return o}});var u=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:i,fromValues:function(e,t,n,r){return[e,t,n,r]},createView:o,IDENTITY:u},Symbol.toStringTag,{value:"Module"}))},71417:function(e,t,n){n.d(t,{b:function(){return p},c:function(){return v},d:function(){return g},g:function(){return b},i:function(){return P},m:function(){return k}});n(93169);var r,i=n(32718),o=n(16889),u=n(92026),a=n(14226),c=n(11186),f=n(71353),s=n(90045),l=n(67077);!function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(r||(r={}));var h=n(40885),d=n(40927),m=n(11185),y=i.Z.getLogger("esri.geometry.support.sphere");function v(){return(0,l.c)()}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v();return(0,s.c)(t,e)}function g(e){return e[3]}function b(e){return e}function _(e,t,n){if((0,u.Wi)(t))return!1;var r=t.origin,i=t.direction,o=w;o[0]=r[0]-e[0],o[1]=r[1]-e[1],o[2]=r[2]-e[2];var a=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],c=2*(i[0]*o[0]+i[1]*o[1]+i[2]*o[2]),f=c*c-4*a*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(f<0)return!1;var s=Math.sqrt(f),l=(-c-s)/(2*a),h=(-c+s)/(2*a);return(l<0||h<l&&h>0)&&(l=h),!(l<0)&&(n&&(n[0]=r[0]+i[0]*l,n[1]=r[1]+i[1]*l,n[2]=r[2]+i[2]*l),!0)}var w=(0,f.c)();function P(e,t){return _(e,t,null)}function M(e,t,n){var r=m.WM.get(),i=m.MP.get();(0,c.f)(r,t.origin,t.direction);var o=g(e);(0,c.f)(n,r,t.origin),(0,c.g)(n,n,1/(0,c.l)(n)*o);var u=S(e,t.origin),f=(0,d.EU)(t.origin,n);return(0,a.d)(i,f+u,r),(0,c.m)(n,n,i),n}function E(e,t,n){var r=(0,c.b)(m.WM.get(),t,e),i=(0,c.g)(m.WM.get(),r,e[3]/(0,c.l)(r));return(0,c.a)(n,i,e)}function S(e,t){var n=(0,c.b)(m.WM.get(),t,e),r=(0,c.l)(n),i=g(e),u=i+Math.abs(i-r);return(0,o.ZF)(i/u)}var A=(0,f.c)();function I(e,t,n,i){var u=(0,c.b)(A,t,e);switch(n){case r.X:var a=(0,o.jE)(u,A)[2];return(0,c.s)(i,-Math.sin(a),Math.cos(a),0);case r.Y:var f=(0,o.jE)(u,A),s=f[1],l=f[2],h=Math.sin(s);return(0,c.s)(i,-h*Math.cos(l),-h*Math.sin(l),Math.cos(s));case r.Z:return(0,c.n)(i,u);default:return}}function T(e,t){var n=(0,c.b)(x,t,e);return(0,c.l)(n)-e[3]}function k(e,t){var n=(0,c.d)(e,t),r=g(e);return n<=r*r}var x=(0,f.c)(),L=v();Object.freeze(Object.defineProperty({__proto__:null,create:v,copy:p,fromCenterAndRadius:function(e,t){return(0,l.f)(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},getRadius:g,getCenter:b,fromValues:function(e,t,n,r){return(0,l.f)(e,t,n,r)},elevate:function(e,t,n){return e!==n&&(0,c.c)(n,e),n[3]=e[3]+t,n},setExtent:function(e,t,n){return y.error("sphere.setExtent is not yet supported"),e===n?n:p(e,n)},intersectRay:_,intersectsRay:P,intersectRayClosestSilhouette:function(e,t,n){if(_(e,t,n))return n;var r=M(e,t,m.WM.get());return(0,c.a)(n,t.origin,(0,c.g)(m.WM.get(),t.direction,(0,c.i)(t.origin,r)/(0,c.l)(t.direction))),n},closestPointOnSilhouette:M,closestPoint:function(e,t,n){return _(e,t,n)?n:((0,h.JI)(t,e,n),E(e,n,n))},projectPoint:E,distanceToSilhouette:function(e,t){var n=(0,c.b)(m.WM.get(),t,e),r=(0,c.p)(n),i=e[3]*e[3];return Math.sqrt(Math.abs(r-i))},angleToSilhouette:S,axisAt:I,altitudeAt:T,setAltitudeAt:function(e,t,n,i){var o=T(e,t),u=I(e,t,r.Z,x),a=(0,c.g)(x,u,n-o);return(0,c.a)(i,t,a)},containsPoint:k,tmpSphere:L},Symbol.toStringTag,{value:"Module"}))},21530:function(e,t,n){n.d(t,{x:function(){return u}});var r=n(15671),i=n(43144),o=n(70758),u=function(){function e(t){(0,r.Z)(this,e),this.allocator=t,this._items=[],this._itemsPtr=0,this._grow()}return(0,i.Z)(e,[{key:"get",value:function(){var e=this;return 0===this._itemsPtr&&(0,o.Y)((function(){return e._reset()})),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}},{key:"_reset",value:function(){var e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*a);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}},{key:"_grow",value:function(){for(var e=0;e<Math.max(8,Math.min(this._items.length,a));e++)this._items.push(this.allocator())}}]),e}(),a=1024},40885:function(e,t,n){n.d(t,{JI:function(){return c},Ue:function(){return u},re:function(){return a}});n(63780);var r=n(21530),i=n(11186),o=n(71353);n(11185);function u(e){return e?{origin:(0,o.a)(e.origin),direction:(0,o.a)(e.direction)}:{origin:(0,o.c)(),direction:(0,o.c)()}}function a(e,t){var n=f.get();return n.origin=e,n.direction=t,n}function c(e,t,n){var r=(0,i.e)(e.direction,(0,i.b)(n,t,e.origin));return(0,i.a)(n,e.origin,(0,i.g)(n,e.direction,r)),n}var f=new r.x((function(){return{origin:null,direction:null}}))},40927:function(e,t,n){n.d(t,{EU:function(){return u}});var r=n(16889),i=n(11186),o=n(71353);function u(e,t){var n=(0,i.e)(e,t)/((0,i.l)(e)*(0,i.l)(t));return-(0,r.ZF)(n)}(0,o.c)(),(0,o.c)()},11185:function(e,t,n){n.d(t,{MP:function(){return v},WM:function(){return y}});var r=n(15671),i=n(43144),o=n(59896),u=n(70758),a=n(11873),c=n(81949),f=n(98131),s=n(6394),l=n(71353),h=n(67077),d=function(){function e(t,n,i){(0,r.Z)(this,e),this.itemByteSize=t,this.itemCreate=n,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(i/this.itemByteSize)}return(0,i.Z)(e,[{key:"get",value:function(){var e=this;0===this._itemsPtr&&(0,u.Y)((function(){return e._reset()}));for(var t=Math.floor(this._itemsPtr/this._itemsPerBuffer);this._buffers.length<=t;){for(var n=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize),r=0;r<this._itemsPerBuffer;++r)this._items.push(this.itemCreate(n,r*this.itemByteSize));this._buffers.push(n)}return this._items[this._itemsPtr++]}},{key:"_reset",value:function(){for(var e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}},{key:"test",get:function(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}],[{key:"createVec2f64",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return new e(16,s.c,t)}},{key:"createVec3f64",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return new e(24,l.b,t)}},{key:"createVec4f64",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return new e(32,h.a,t)}},{key:"createMat3f64",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return new e(72,a.a,t)}},{key:"createMat4f64",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return new e(128,c.a,t)}},{key:"createQuatf64",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return new e(32,f.c,t)}}]),e}(),m=4*o.Y8.KILOBYTES,y=(d.createVec2f64(),d.createVec3f64()),v=(d.createVec4f64(),d.createMat3f64(),d.createMat4f64());d.createQuatf64()},6761:function(e,t,n){n.r(t),n.d(t,{destroyContext:function(){return k},dracoDecompressPointCloudData:function(){return w},filterObbsForModifications:function(){return M},filterObbsForModificationsSync:function(){return B},initialize:function(){return F},interpretObbModificationResults:function(){return U},process:function(){return b},setLegacySchema:function(){return I},setModifications:function(){return S},setModificationsSync:function(){return x},test:function(){return O}});var r,i,o=n(74165),u=n(15861),a=n(92026),c=n(18722);!function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(r||(r={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(i||(i={}));var f,s=n(65905);function l(e){return(0,s.V)("esri/libs/i3s/".concat(e))}var h,d,m,y,v;n(71417);!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(h||(h={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(d||(d={}));!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(m||(m={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(y||(y={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(v||(v={}));var p,g;function b(e){return _.apply(this,arguments)}function _(){return _=(0,u.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return n=[t.geometryBuffer],e.abrupt("return",{result:L(t,n),transferList:n});case 4:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function w(e){return P.apply(this,arguments)}function P(){return P=(0,u.Z)((0,o.Z)().mark((function e(t){var n,r,i,u,a,f,s,l,h;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:if(r=[t.geometryBuffer],i=t.geometryBuffer,u=i.byteLength,a=g._malloc(u),(f=new Uint8Array(g.HEAPU8.buffer,a,u)).set(new Uint8Array(i)),s=g.dracoDecompressPointCloudData(a,f.byteLength),g._free(a),!(s.error.length>0)){e.next=7;break}throw"i3s.wasm: ".concat(s.error);case 7:return l=(null===(n=s.featureIds)||void 0===n?void 0:n.length)>0?(0,c.tP)(s.featureIds):null,h=(0,c.tP)(s.positions),l&&r.push(l.buffer),r.push(h.buffer),e.abrupt("return",{result:{positions:h,featureIds:l},transferList:r});case 10:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function M(e){return E.apply(this,arguments)}function E(){return E=(0,u.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return B(t),n={buffer:t.buffer},e.abrupt("return",{result:n,transferList:[n.buffer]});case 5:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function S(e){return A.apply(this,arguments)}function A(){return(A=(0,u.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:x(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return T.apply(this,arguments)}function T(){return(T=(0,u.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:g.setLegacySchema(t.context,t.jsonSchema);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){C(e)}function x(e){for(var t=e.modifications,n=g._malloc(8*t.length),r=new Float64Array(g.HEAPU8.buffer,n,t.length),i=0;i<t.length;++i)r[i]=t[i];g.setModifications(e.context,n,t.length,e.isGeodetic),g._free(n)}function L(e,t){if(!g)return null;var n=e.context,i=e.localOrigin,o=e.globalTrafo,u=e.mbs,f=e.obb,s=e.elevationOffset,l=e.geometryBuffer,h=e.geometryDescriptor,d=e.indexToVertexProjector,m=e.vertexToRenderProjector,y=g._malloc(l.byteLength),v=g._malloc(33*Float64Array.BYTES_PER_ELEMENT),p=new Uint8Array(g.HEAPU8.buffer,y,l.byteLength);p.set(new Uint8Array(l));var b=new Float64Array(g.HEAPU8.buffer,v,33);R(b,i);var _=b.byteOffset+3*b.BYTES_PER_ELEMENT,w=new Float64Array(b.buffer,_);R(w,o),_+=16*b.BYTES_PER_ELEMENT,R(w=new Float64Array(b.buffer,_),u),_+=4*b.BYTES_PER_ELEMENT,(0,a.pC)(f)&&(R(w=new Float64Array(b.buffer,_),f.center),_+=3*b.BYTES_PER_ELEMENT,R(w=new Float64Array(b.buffer,_),f.halfSize),_+=3*b.BYTES_PER_ELEMENT,R(w=new Float64Array(b.buffer,_),f.quaternion));var P=h,M={isDraco:!1,isLegacy:!1,color:e.layouts.some((function(e){return e.some((function(e){return"color"===e.name}))})),normal:e.needNormals&&e.layouts.some((function(e){return e.some((function(e){return"normalCompressed"===e.name}))})),uv0:e.layouts.some((function(e){return e.some((function(e){return"uv0"===e.name}))})),uvRegion:e.layouts.some((function(e){return e.some((function(e){return"uvRegion"===e.name}))})),featureIndex:P.featureIndex},E=g.process(n,!!e.obb,y,p.byteLength,P,M,v,s,d,m,e.normalReferenceFrame);if(g._free(v),g._free(y),E.error.length>0)throw"i3s.wasm: ".concat(E.error);if(E.discarded)return null;var S=E.componentOffsets.length>0?(0,c.tP)(E.componentOffsets):null,A=E.featureIds.length>0?(0,c.tP)(E.featureIds):null,I=(0,c.tP)(E.interleavedVertedData).buffer,T=E.indicesType===r.Int16?(0,c.tP)(new Uint16Array(E.indices.buffer,E.indices.byteOffset,E.indices.byteLength/2)):(0,c.tP)(new Uint32Array(E.indices.buffer,E.indices.byteOffset,E.indices.byteLength/4)),k=(0,c.tP)(E.positions),x=E.positionIndicesType===r.Int16?(0,c.tP)(new Uint16Array(E.positionIndices.buffer,E.positionIndices.byteOffset,E.positionIndices.byteLength/2)):(0,c.tP)(new Uint32Array(E.positionIndices.buffer,E.positionIndices.byteOffset,E.positionIndices.byteLength/4)),L={layout:e.layouts[0],interleavedVertexData:I,indices:T,hasColors:E.hasColors,hasModifications:E.hasModifications,positionData:{data:k,indices:x}};return A&&t.push(A.buffer),S&&t.push(S.buffer),t.push(I),t.push(T.buffer),t.push(k.buffer),t.push(x.buffer),{componentOffsets:S,featureIds:A,transformedGeometry:L,obb:E.obb}}function U(e){return 0===e?d.Unmodified:1===e?d.PotentiallyModified:2===e?d.Culled:d.Unknown}function B(e){var t=e.context,n=e.buffer,r=g._malloc(n.byteLength),i=n.byteLength/Float64Array.BYTES_PER_ELEMENT,o=new Float64Array(g.HEAPU8.buffer,r,i),u=new Float64Array(n);o.set(u),g.filterOBBs(t,r,i),u.set(o),g._free(r)}function C(e){g&&g.destroy(e)}function R(e,t){for(var n=0;n<t.length;++n)e[n]=t[n]}function F(){return g?Promise.resolve():(p||(p=(f||(f=new Promise((function(e){return n.e(7552).then(n.bind(n,57552)).then((function(e){return e.i})).then((function(t){var n=(0,t.default)({locateFile:l,onRuntimeInitialized:function(){return e(n)}});delete n.then}))})).catch((function(e){throw e}))),f).then((function(e){g=e,p=null}))),p)}var O={transform:L,destroy:C}}}]);
//# sourceMappingURL=6761.d5f7da04.chunk.js.map