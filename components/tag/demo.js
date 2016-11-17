webpackJsonp([26,200],{938:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(177),s(176)),o=t(p),e=s(1),c=t(e),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u57fa\u672c\u6807\u7b7e\u7684\u7528\u6cd5\uff0c\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 ",["code","closable"]," \u53d8\u4e3a\u53ef\u5173\u95ed\u6807\u7b7e\u3002\u53ef\u5173\u95ed\u6807\u7b7e\u5177\u6709 ",["code","onClose"]," ",["code","afterClose"]," \u4e24\u4e2a\u4e8b\u4ef6\u3002"]],"en-US":[["p","Usage of basic Tag, and it could be closable by set ",["code","closable"]," property. Closable Tag supports ",["code","onClose"]," ",["code","afterClose"]," events."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/tag/demo/basic.md",id:"components-tag-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >log</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span><span class="token punctuation" >></span></span>Tag <span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >closable</span> <span class="token attr-name" >onClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>log<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Tag <span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >closable</span> <span class="token attr-name" >afterClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>log<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Tag <span class="token number" >3</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >closable</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://github.com/ant-design/ant-design/issues/1862<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Link<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log(n)}return c["default"].createElement("div",null,c["default"].createElement(o["default"],null,"Tag 1"),c["default"].createElement(o["default"],{closable:!0,onClose:n},"Tag 2"),c["default"].createElement(o["default"],{closable:!0,afterClose:n},"Tag 3"),c["default"].createElement(o["default"],{closable:!0},c["default"].createElement("a",{href:"https://github.com/ant-design/ant-design/issues/1862"},"Link")))}}},939:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=s(8),o=t(p),e=s(4),c=t(e),l=s(6),u=t(l),k=s(5),i=t(k),r=(s(177),s(176)),g=t(r),d=s(1),h=t(d),f=s(2);t(f);n.exports={content:{"zh-CN":[["p","\u53ef\u901a\u8fc7 Tag.CheckableTag \u5b9e\u73b0\u7c7b\u4f3c Checkbox \u7684\u6548\u679c\uff0c\u8be5\u7ec4\u4ef6\u4e3a\u5b8c\u5168\u53d7\u63a7\u7ec4\u4ef6\uff0c\u4e0d\u652f\u6301\u975e\u53d7\u63a7\u7528\u6cd5\u3002"]],"en-US":[["p","Tag.CheckableTag works like Checkbox, and it is an absolute controlled component and has no uncontrolled mode."]]},meta:{order:3,title:{"zh-CN":"\u53ef\u9009\u62e9","en-US":"Checkable"},filename:"components/tag/demo/checkable.md",id:"components-tag-demo-checkable"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> CheckableTag <span class="token operator" >=</span> Tag<span class="token punctuation" >.</span>CheckableTag<span class="token punctuation" >;</span>\n\n<span class="token keyword" >class</span> <span class="token class-name" >UncontrolledCheckableTag</span> <span class="token keyword" >extends</span> <span class="token class-name" >React<span class="token punctuation" >.</span>Component</span> <span class="token punctuation" >{</span>\n  state <span class="token operator" >=</span> <span class="token punctuation" >{</span> checked<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  handleChange <span class="token operator" >=</span> <span class="token punctuation" >(</span>checked<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> checked <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token operator" >&lt;</span>CheckableTag <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >}</span> checked<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>checked<span class="token punctuation" >}</span> onChange<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span> <span class="token operator" >/</span><span class="token operator" >></span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>CheckableTag</span><span class="token punctuation" >></span></span>Unchecked<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>CheckableTag</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>CheckableTag</span> <span class="token attr-name" >checked</span><span class="token punctuation" >></span></span>Checked<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>CheckableTag</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>UncontrolledCheckableTag</span><span class="token punctuation" >></span></span>Uncontrolled<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>UncontrolledCheckableTag</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=g["default"].CheckableTag,a=function(a){function s(){var n,t,p;(0,c["default"])(this,s);for(var o=arguments.length,e=Array(o),l=0;l<o;l++)e[l]=arguments[l];return n=t=(0,u["default"])(this,a.call.apply(a,[this].concat(e))),t.state={checked:!1},t.handleChange=function(n){t.setState({checked:n})},p=n,(0,u["default"])(t,p)}return(0,i["default"])(s,a),s.prototype.render=function(){return h["default"].createElement(n,(0,o["default"])({},this.props,{checked:this.state.checked,onChange:this.handleChange}))},s}(h["default"].Component);return h["default"].createElement("div",null,h["default"].createElement(n,null,"Unchecked"),h["default"].createElement(n,{checked:!0},"Checked"),h["default"].createElement(a,null,"Uncontrolled"))}}},940:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(177),s(176)),o=t(p),e=s(1),c=t(e),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u57fa\u672c\u6807\u7b7e\u53ef\u4ee5\u901a\u8fc7 ",["code","color"]," \u8bbe\u7f6e\u80cc\u666f\u8272\uff0c\u4ee5\u63d0\u4f9b\u89c6\u89c9\u6697\u793a\u533a\u5206\u4e0d\u540c\u76ee\u7684\u7684\u6807\u7b7e\u3002"]],"en-US":[["p","We can set the background color of basic Tag by ",["code","color"],", and it's helpful to tell different Tags."]]},meta:{order:1,title:{"zh-CN":"\u591a\u5f69\u6807\u7b7e","en-US":"Colorful"},filename:"components/tag/demo/colorful.md",id:"components-tag-demo-colorful"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#f50<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>#f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#87d068<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>#87d068<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#2db7f5<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>#2db7f5<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(o["default"],{color:"#f50"},"#f50"),c["default"].createElement(o["default"],{color:"#87d068"},"#87d068"),c["default"].createElement(o["default"],{color:"#2db7f5"},"#2db7f5"))}}},941:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(10),s(9)),o=t(p),e=(s(177),s(176)),c=t(e),l=s(83),u=t(l),k=s(4),i=t(k),r=s(6),g=t(r),d=s(5),h=t(d),f=s(1),m=t(f),y=s(2);t(y);n.exports={content:{"zh-CN":[["p","\u7528\u6570\u7ec4\u751f\u6210\u4e00\u7ec4\u6807\u7b7e\uff0c\u53ef\u4ee5\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664\uff0c\u901a\u8fc7\u76d1\u542c\u5220\u9664\u52a8\u753b\u7ed3\u675f\u7684\u4e8b\u4ef6 ",["code","afterClose"]," \u5b9e\u73b0\u3002"]],"en-US":[["p","Generating a set of Tags by array, you can add and remove dynamically.\nIt's based on ",["code","afterClose"]," event, which will be triggered while the close animation end."]]},meta:{order:2,title:{"zh-CN":"\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664","en-US":"Add & Remove Dynamically"},filename:"components/tag/demo/control.md",id:"components-tag-demo-control"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> index <span class="token operator" >=</span> <span class="token number" >3</span><span class="token punctuation" >;</span>\n<span class="token keyword" >class</span> <span class="token class-name" >EditableTagGroup</span> <span class="token keyword" >extends</span> <span class="token class-name" >React<span class="token punctuation" >.</span>Component</span> <span class="token punctuation" >{</span>\n  state <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    tags<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n      <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Unremovable\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Tag 2\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >3</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Tag 3\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  handleClose <span class="token operator" >=</span> <span class="token punctuation" >(</span>key<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> tags <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>tags<span class="token punctuation" >]</span><span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span>tag <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>tag<span class="token punctuation" >.</span>key <span class="token operator" >!==</span> key<span class="token punctuation" >)</span> <span class="token operator" >&amp;&amp;</span> tag<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>tags<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> tags <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  addTag <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n    index <span class="token operator" >+</span><span class="token operator" >=</span> <span class="token number" >1</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> tags <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>tags<span class="token punctuation" >,</span> <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> index<span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`New tag </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>index<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span> <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>tags<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> tags <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> tags <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span>tags<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>tag <span class="token operator" >=</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>tag<span class="token punctuation" >.</span>key<span class="token punctuation" >}</span></span> <span class="token attr-name" >closable</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>tag<span class="token punctuation" >.</span>key <span class="token operator" >!==</span> <span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >afterClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >handleClose</span><span class="token punctuation" >(</span>tag<span class="token punctuation" >.</span>key<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span>tag<span class="token punctuation" >.</span>name<span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>dashed<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>addTag<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token operator" >+</span> New <span class="token class-name" >tag</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>EditableTagGroup</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=3,a=function(a){function s(){var t,p,o;(0,i["default"])(this,s);for(var e=arguments.length,c=Array(e),l=0;l<e;l++)c[l]=arguments[l];return t=p=(0,g["default"])(this,a.call.apply(a,[this].concat(c))),p.state={tags:[{key:1,name:"Unremovable"},{key:2,name:"Tag 2"},{key:3,name:"Tag 3"}]},p.handleClose=function(n){var a=[].concat((0,u["default"])(p.state.tags)).filter(function(a){return a.key!==n&&a});console.log(a),p.setState({tags:a})},p.addTag=function(){n+=1;var a=[].concat((0,u["default"])(p.state.tags),[{key:n,name:"New tag "+n}]);console.log(a),p.setState({tags:a})},o=t,(0,g["default"])(p,o)}return(0,h["default"])(s,a),s.prototype.render=function(){var n=this,a=this.state.tags;return m["default"].createElement("div",null,a.map(function(a){return m["default"].createElement(c["default"],{key:a.key,closable:1!==a.key,afterClose:function(){return n.handleClose(a.key)}},a.name)}),m["default"].createElement(o["default"],{size:"small",type:"dashed",onClick:this.addTag},"+ New tag"))},s}(m["default"].Component);return m["default"].createElement(a,null)}}},942:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=s(83),o=t(p),e=s(4),c=t(e),l=s(6),u=t(l),k=s(5),i=t(k),r=(s(177),s(176)),g=t(r),d=s(1),h=t(d),f=s(2);t(f);n.exports={content:{"zh-CN":[["p","\u9009\u62e9\u4f60\u611f\u5174\u8da3\u7684\u8bdd\u9898\u3002"]],"en-US":[["p","Select your favourite topics."]]},meta:{order:4,title:{"zh-CN":"\u70ed\u95e8\u6807\u7b7e","en-US":"Hot Tags"},filename:"components/tag/demo/hot-tags.md",id:"components-tag-demo-hot-tags"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> CheckableTag <span class="token operator" >=</span> Tag<span class="token punctuation" >.</span>CheckableTag<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> tagsFromServer <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token string" >\'Movie\'</span><span class="token punctuation" >,</span> <span class="token string" >\'Books\'</span><span class="token punctuation" >,</span> <span class="token string" >\'Music\'</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >class</span> <span class="token class-name" >HotTags</span> <span class="token keyword" >extends</span> <span class="token class-name" >React<span class="token punctuation" >.</span>Component</span> <span class="token punctuation" >{</span>\n  state <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    selectedTags<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>tag<span class="token punctuation" >,</span> checked<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> selectedTags <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> nextSelectedTags <span class="token operator" >=</span> checked <span class="token operator" >?</span>\n            <span class="token punctuation" >[</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>selectedTags<span class="token punctuation" >,</span> tag<span class="token punctuation" >]</span> <span class="token punctuation" >:</span>\n            selectedTags<span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span>t <span class="token operator" >=</span><span class="token operator" >></span> t <span class="token operator" >!==</span> tag<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'You are interested in: \'</span><span class="token punctuation" >,</span> nextSelectedTags<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> selectedTags<span class="token punctuation" >:</span> nextSelectedTags <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> selectedTags <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>strong</span><span class="token punctuation" >></span></span>Hots<span class="token punctuation" >:</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>strong</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span>tagsFromServer<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>tag <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>CheckableTag</span>\n            <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>tag<span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >checked={selectedTags.indexOf(tag)</span> <span class="token punctuation" >></span></span> <span class="token operator" >-</span><span class="token number" >1</span><span class="token punctuation" >}</span>\n            onChange<span class="token operator" >=</span><span class="token punctuation" >{</span>checked <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >handleChange</span><span class="token punctuation" >(</span>tag<span class="token punctuation" >,</span> checked<span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n          <span class="token operator" >></span>\n            <span class="token punctuation" >{</span>tag<span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>CheckableTag</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>HotTags</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){var n=g["default"].CheckableTag,a=["Movie","Books","Music"],s=function(s){function t(){var n,a,p;(0,c["default"])(this,t);for(var o=arguments.length,e=Array(o),l=0;l<o;l++)e[l]=arguments[l];return n=a=(0,u["default"])(this,s.call.apply(s,[this].concat(e))),a.state={selectedTags:[]},p=n,(0,u["default"])(a,p)}return(0,i["default"])(t,s),t.prototype.handleChange=function(n,a){var s=this.state.selectedTags,t=a?[].concat((0,o["default"])(s),[n]):s.filter(function(a){return a!==n});console.log("You are interested in: ",t),this.setState({selectedTags:t})},t.prototype.render=function(){var s=this,t=this.state.selectedTags;return h["default"].createElement("div",null,h["default"].createElement("strong",null,"Hots: "),a.map(function(a){return h["default"].createElement(n,{key:a,checked:t.indexOf(a)>-1,onChange:function(n){return s.handleChange(a,n)}},a)}))},t}(h["default"].Component);return h["default"].createElement(s,null)}}},1182:function(n,a,s){n.exports={basic:s(938),checkable:s(939),colorful:s(940),control:s(941),"hot-tags":s(942)}}});