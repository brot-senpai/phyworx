(this.webpackJsonpphyworx=this.webpackJsonpphyworx||[]).push([[0],{231:function(e,n,t){},232:function(e,n,t){},239:function(e,n,t){"use strict";t.r(n);var a=t(35),i=t(11),r=t.n(i),o=t(66),s=t.n(o),c=(t(231),t(232),t(219)),l=t(184),d=t(42),h=t(41),p=t(271),w=t(140),g=t(281),b=t(275),j=t(276),x=t(273),u=t(193),O=t(278),m=t(277),v=t(215),y=t.n(v),f=t(217),C=t.n(f),I=t(216),L=t.n(I),T=t(282),N=t(279),R=t(280),A=t(218),E=t.n(A),S=t(26),P=t(39),k=t(36),z=t(37),F=t(40),M=t(214),_={height:500,width:600},D=(i.Component,t(27)),B=t(57),G=t(190),V=t(220),U=function(e){var n=Object(i.useRef)(null),t=e.antialias,r=e.engineOptions,o=e.adaptToDeviceRatio,s=e.sceneOptions,c=e.onRender,d=(e.onSceneReady,Object(V.a)(e,["antialias","engineOptions","adaptToDeviceRatio","sceneOptions","onRender","onSceneReady"]));return Object(i.useEffect)((function(){if(n.current){var a=new D.e(n.current,t,r,o);a.resize();var i=new D.k(a,s);i.isReady()?e.onSceneReady(i):i.onReadyObservable.addOnce((function(n){return e.onSceneReady(n)})),a.runRenderLoop((function(){"function"===typeof c&&c(i),i.render()}));var l=function(){i.getEngine().resize()};return window&&window.addEventListener("resize",l),function(){i.getEngine().dispose(),window&&window.removeEventListener("resize",l)}}}),[n]),Object(a.jsx)("canvas",Object(l.a)({width:window.innerWidth,height:window.innerHeight,ref:n},d))},Z=t(186);window.CANNON=Z;window.CANNON=Z;var H=function(e){var n=new D.a("ArcRotateCamera",4.7,1.2,12,new D.o(0,0,0),e);n.setTarget(D.o.Zero());new D.f("light",new D.o(1,1,0));var t=e.getEngine().getRenderingCanvas();n.attachControl(t,!0);var a=new D.o(0,0,0);e.enablePhysics(a);var i=new G.a("skyMaterial",e);i.majorUnitFrequency=6,i.minorUnitVisibility=.43,i.gridRatio=.5,i.mainColor=new D.c(1,1,1),i.lineColor=new D.c(0,1,1),i.backFaceCulling=!1,D.g.CreateSphere("skySphere",30,90,e).material=i;var r=D.h.CreateGround("ground1",{width:6,height:6},e),o=new D.b("backgroundMaterial",e);o.diffuseTexture=new D.n("/phyworx/assets/osu.png",e),r.material=o,function(e){var n=B.a.CreateFullscreenUI("UI"),t=new D.m(e);t.diffuseColor=new D.c(1,0,0);var a=5;function i(){var i=new B.f;i.width=.1,i.height="20px",i.cornerRadius=20,i.color="red",i.thickness=1,i.background="white",n.addControl(i),i.linkOffsetY=-50;var r=new B.f;r.width=.1,r.height="20px",r.cornerRadius=20,r.color="red",r.thickness=1,r.background="white",n.addControl(r),r.linkOffsetY=-50;var o=D.g.CreateSphere("sphere1",16,1,e);o.material=t,o.position=new D.o(-2,2,0),o.color=new D.c(1,0,0),o.physicsImpostor=new D.i(o,D.i.SphereImpostor,{mass:1,restitution:.95,friction:0},e),o.physicsImpostor.setLinearVelocity(new D.o(a,0,0)),i.linkWithMesh(o);var s=new B.i;s.text=o.physicsImpostor.getLinearVelocity()._x+" m/s",i.addControl(s);var c=D.g.CreateSphere("sphere1",16,1,e);c.position=new D.o(2,2,0),c.physicsImpostor=new D.i(c,D.i.SphereImpostor,{mass:1,restitution:.95,friction:0},e),r.linkWithMesh(c);var l=new B.i;l.text=c.physicsImpostor.getLinearVelocity()._x+" m/s",r.addControl(l),window.setInterval((function(){l.text=c.physicsImpostor.getLinearVelocity()._x.toFixed(2)+" m/s",s.text=o.physicsImpostor.getLinearVelocity()._x.toFixed(2)+" m/s"}),1e3)}var r=!0,o=new B.b.CreateSimpleButton("menu","Start");o.color="black",o.width=1,o.height="40px",o.horizontalAlignment=B.d.HORIZONTAL_ALIGNMENT_LEFT,o.verticalAlignment=B.d.VERTICAL_ALIGNMENT_BOTTOM,o.onPointerDownObservable.add((function(){!0===r?(i(),r=!1):(i(),r=!0)}));var s=new B.e("Enter");s.width=1,s.text="Enter velocity",s.height="40px",s.background="black",s.color="white",s.verticalAlignment=B.d.VERTICAL_ALIGNMENT_TOP,s.onPointerDownObservable.add((function(){s.text=""})),s.onTextChangedObservable.add((function(){a=s.text})),e.enablePhysics();var c=new B.g("sp",[]);c.color="black",c.width="150px",c.height="100px",c.horizontalAlignment=B.d.HORIZONTAL_ALIGNMENT_LEFT,c.verticalAlignment=B.d.VERTICAL_ALIGNMENT_TOP,c.top="60px",c.left="80px",n.addControl(c),c.addControl(o),c.addControl(s)}(e)},W=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(U,{antialias:!0,onSceneReady:H,id:"my-canvas"})})},X=function(e){var n=new D.a("Camera",3*Math.PI/2,3*Math.PI/8,30,D.o.Zero());e.clearColor=D.c.White();var t=e.getEngine().getRenderingCanvas();n.attachControl(t,!0),new D.f("light",new D.o(0,1,0),e).intensity=.7;!function(n){var t=function(n,t,a){var i=new D.d("DynamicTexture",50,e,!0);i.hasAlpha=!0,i.drawText(n,5,40,"bold 36px Arial",t,"transparent",!0);var r=new D.g.CreatePlane("TextPlane",a,e,!0);return r.material=new D.m("TextPlaneMaterial",e),r.material.backFaceCulling=!1,r.material.specularColor=new D.c(0,0,0),r.material.diffuseTexture=i,r},a=D.g.CreateLines("axisX",[new D.o.Zero,new D.o(n,0,0),new D.o(.95*n,.05*n,0),new D.o(n,0,0),new D.o(.95*n,-.05*n,0)],e);a.color=new D.c(1,0,0);var i=t("X","red",n/5);i.position=new D.o(.9*n,.1*n,0);var r=D.g.CreateLines("axisY",[new D.o.Zero,new D.o(0,n,0),new D.o(-.05*n,.95*n,0),new D.o(0,n,0),new D.o(.05*n,.95*n,0)],e);r.color=new D.c(0,1,0);var o=t("U","green",n/5);o.position=new D.o(0,.9*n,.1*n);var s=D.g.CreateLines("axisZ",[new D.o.Zero,new D.o(0,0,n),new D.o(0,-.05*n,.95*n),new D.o(0,0,n),new D.o(0,.05*n,.95*n)],e);s.color=new D.c(0,0,1);var c=t("T","blue",n/5);c.position=new D.o(n,.05*n,.9*n);var l=function(e){var n=e.scene,t=e.psize,a=new G.a("grid",n);a.gridRatio=1,a.opacity=.99,a.lineColor=D.c.Gray();var i=D.j.FromPositionAndNormal(new D.o(0,0,0),new D.o(1,0,0)),r=D.j.FromPositionAndNormal(new D.o(0,0,0),new D.o(0,1,0)),o=D.j.FromPositionAndNormal(new D.o(0,0,0),new D.o(0,0,1)),s=D.h.CreatePlane("planex",{size:t,sourcePlane:i,sideOrientation:D.g.DOUBLESIDE}),c=D.h.CreatePlane("planey",{size:t,sourcePlane:r,sideOrientation:D.g.DOUBLESIDE}),l=D.h.CreatePlane("planez",{size:t,sourcePlane:o,sideOrientation:D.g.DOUBLESIDE});return s.material=a,c.material=a,l.material=a,[s,c,l,a]}({scene:e,psize:1}),d=l[0],h=l[1],p=l[2],w=l[3],g=B.a.CreateFullscreenUI("UI",!0,e),b=new B.h;b.minimum=1,b.maximum=100,b.value=1,b.height="20px",b.width="200px",b.color="#003399",b.background="grey",b.top="20px",b.horizontalAlignment=B.d.HORIZONTAL_ALIGNMENT_CENTER,b.verticalAlignment=B.d.VERTICAL_ALIGNMENT_TOP,b.onValueChangedObservable.add((function(e){a.scaling.x=e/2,r.scaling.y=e/2,s.scaling.z=e/2,w.gridRatio=1/e,d.scaling.x=e,d.scaling.y=e,h.scaling.y=e,h.scaling.x=e,p.scaling.y=e,p.scaling.x=e,d.position.z=e/2,h.position.z=e/2,p.position.z=e,i.scaling.x=e/2,i.scaling.y=e/2,i.position.x=e/2,o.scaling.x=e/2,o.scaling.y=e/2,o.position.y=e/2,c.scaling.x=e/2,c.scaling.y=e/2,c.position.x=e/1.85,c.position.z=e})),g.addControl(b)}(1)};function Y(){return Object(a.jsx)("div",{children:Object(a.jsx)(U,{antialias:!0,onSceneReady:X,id:"my-canvas"})})}var J=t(201),q=function(e){var n=new D.a("Camera",3*Math.PI/2,3*Math.PI/8,30,D.o.Zero());e.clearColor=D.c.White();var t=e.getEngine().getRenderingCanvas();n.attachControl(t,!0),new D.f("light",new D.o(0,1,0),e).intensity=.7,D.l.RegisterPlugin(new J.GLTFFileLoader),J.GLTFFileLoader.IncrementalLoading=!1,D.l.Append("/phyworx/assets/","sol.glb",e,(function(e){e.createDefaultCameraOrLight(!0,!0,!0),e.activeCamera.alpha+=Math.PI}))};function K(){return Object(a.jsx)("div",{children:Object(a.jsx)(U,{antialias:!0,onSceneReady:q,id:"my-canvas"})})}var Q=t.p+"static/media/atom.1651bc53.svg",$=t.p+"static/media/babylon_gray2.a3cbb95f.svg",ee=t(156),ne=t(69),te=240,ae=Object(p.a)((function(e){return{root:{display:"flex"},appBar:{backgroundColor:"black",elevation:0,zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:te,width:"calc(100% - ".concat(te,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:te,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:te,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(d.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{overflow:"hidden",flexGrow:1,padding:e.spacing(3)}}}));function ie(){var e,n,t=ae(),i=Object(w.a)(),o=r.a.useState(!1),s=Object(c.a)(o,2),l=s[0],p=s[1];return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(x.a,{}),Object(a.jsx)(b.a,{position:"fixed",className:Object(h.a)(t.appBar,Object(d.a)({},t.appBarShift,l)),children:Object(a.jsx)(j.a,{children:Object(a.jsx)(m.a,{color:"inherit","aria-label":"open drawer",onClick:function(){p(!0)},edge:"start",className:Object(h.a)(t.menuButton,Object(d.a)({},t.hide,l)),children:Object(a.jsx)(y.a,{})})})}),Object(a.jsxs)(ee.a,{children:[Object(a.jsxs)(g.a,{variant:"permanent",className:Object(h.a)(t.drawer,(e={},Object(d.a)(e,t.drawerOpen,l),Object(d.a)(e,t.drawerClose,!l),e)),classes:{paper:Object(h.a)((n={},Object(d.a)(n,t.drawerOpen,l),Object(d.a)(n,t.drawerClose,!l),n))},children:[Object(a.jsx)("div",{className:t.toolbar,children:Object(a.jsx)(m.a,{onClick:function(){p(!1)},children:"rtl"===i.direction?Object(a.jsx)(L.a,{}):Object(a.jsx)(C.a,{})})}),Object(a.jsx)(O.a,{}),Object(a.jsx)(ee.b,{to:"/phyworx",style:{textDecoration:"none"},children:Object(a.jsxs)(T.a,{button:!0,children:[Object(a.jsx)(N.a,{children:Object(a.jsx)(E.a,{})}),Object(a.jsx)(R.a,{children:"Home"})]},"Home")}),Object(a.jsx)(ee.b,{to:"/phyworx/babylon",style:{textDecoration:"none"},children:Object(a.jsxs)(T.a,{button:!0,children:[Object(a.jsx)(N.a,{children:Object(a.jsx)("img",{src:$,alt:"babylonicon",height:"25"})}),Object(a.jsx)(R.a,{children:"Babylon"})]},"Babylon")}),Object(a.jsx)(O.a,{}),Object(a.jsx)(ee.b,{to:"/phyworx/physims",style:{textDecoration:"none"},children:Object(a.jsxs)(T.a,{button:!0,children:[Object(a.jsx)(N.a,{children:Object(a.jsx)("img",{src:Q,alt:"atomicon",height:"25"})}),Object(a.jsx)(R.a,{children:"Physic Sims"})]},"Three")})]}),Object(a.jsxs)("main",{className:t.content,children:[Object(a.jsx)("div",{className:t.toolbar}),Object(a.jsxs)(ne.c,{children:[Object(a.jsx)(ne.a,{exact:!0,path:"/phyworx",children:Object(a.jsx)(Y,{})}),Object(a.jsx)(ne.a,{path:"/phyworx/babylon",children:Object(a.jsx)(K,{})}),Object(a.jsx)(ne.a,{path:"/phyworx/physims",children:Object(a.jsx)(W,{})})]}),Object(a.jsx)(u.a,{paragraph:!0})]})]})]})}var re=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(ie,{})})})},oe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,283)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),i(e),r(e),o(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(re,{})}),document.getElementById("root")),oe()}},[[239,1,2]]]);
//# sourceMappingURL=main.362034b9.chunk.js.map