(this.webpackJsonppanagaea=this.webpackJsonppanagaea||[]).push([[0],{77:function(e,t,c){},78:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var n=c(3),r=c(4),i=c.n(r),s=c(66),a=c.n(s),l=(c(77),c(24)),j=c(31),u=(c(78),c(67)),d=c(22),o=c(68);function b(){var e=Object(u.a)(["\n\tquery Products($currency: Currency) {\n\t\tproducts {\n\t\t\tid\n\t\t\ttitle\n\t\t\timage_url\n\t\t\tprice(currency: $currency)\n\t\t}\n\t\tcurrency\n\t}\n"]);return b=function(){return e},e}var m=Object(d.gql)(b());var O=Object(o.graphql)(m)((function(e){var t=e.setCartItems,c=e.cartItems,i=(e.active,e.setActive),s=e.currency,a=(e.setCurrency,e.currencies,e.setCurrencies),j=Object(d.useQuery)(m,{variables:{currency:s}}),u=j.loading,o=j.error,b=j.data;if(Object(r.useEffect)((function(){if(b&&(a(b.currency),c.length)){var e=c.map((function(e){var t=b.products.filter((function(t){return t.id===e.id}));return e.price=t[0].price,e}));t(e)}}),[b]),u)return"Loading Products...";if(o)return"Error! ".concat(o.message);var O=function(e){i([!0]);var n=c.find((function(t){return t.id===e.id}));n?(n.quantity++,t(Object(l.a)(c))):t([].concat(Object(l.a)(c),[{id:e.id,title:e.title,image_url:e.image_url,quantity:1,price:e.price}])),console.log(c)};return Object(n.jsx)("div",{className:"product-grid",children:b.products.map((function(e){return Object(n.jsxs)("div",{className:"product-grid-item",children:[Object(n.jsx)("img",{src:e.image_url,alt:"Classic Maintenance Set",className:"product-grid-item__image"}),Object(n.jsx)("p",{className:"product-grid-item__name",children:e.title}),Object(n.jsxs)("p",{className:"product-grid-item__price",children:["USD"===s?"$":s,e.price]}),Object(n.jsx)("a",{href:"#",className:"add-to-cart",onClick:function(t){return O(e)},children:"Add To Cart"})]},e.id)}))})}));var h=function(){return Object(n.jsxs)("nav",{children:[Object(n.jsxs)("div",{className:"left-nav",children:[Object(n.jsx)("img",{src:"./lumin-logo.png",alt:"logo",className:"lumin-logo"}),Object(n.jsxs)("ul",{className:"nav-items",children:[Object(n.jsx)("li",{className:"nav-items-links",children:"Shop"}),Object(n.jsx)("li",{className:"nav-items-links",children:"Learn"})]})]}),Object(n.jsx)("div",{className:"right-nav",children:Object(n.jsxs)("ul",{className:"nav-options",children:[Object(n.jsx)("li",{className:"nav-options-links",children:"Account"}),Object(n.jsx)("li",{className:"nav-options-links",children:"Cart"})]})})]})},p=new d.ApolloClient({uri:"https://pangaea-interviews.now.sh/api/graphql",cache:new d.InMemoryCache});var v=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1],s=Object(r.useState)(!1),a=Object(j.a)(s,2),u=a[0],o=a[1],b=Object(r.useState)("USD"),m=Object(j.a)(b,2),v=m[0],x=m[1],f=Object(r.useState)([]),N=Object(j.a)(f,2),g=N[0],y=N[1],C=function(e){var t=c.filter((function(t){return t.id!==e}));i(Object(l.a)(t))};return Object(n.jsx)(d.ApolloProvider,{client:p,children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{}),Object(n.jsxs)("div",{className:"all-products",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"All Products"}),Object(n.jsxs)("p",{children:["A 360",Object(n.jsx)("sup",{children:"o"})," look at Lumin"]})]}),Object(n.jsx)("div",{children:Object(n.jsx)("select",{name:"filter",id:"filter",children:Object(n.jsx)("option",{value:"Filter By",children:"Filter By"})})})]}),Object(n.jsx)(O,{cartItems:c,setCartItems:i,active:u,setActive:o,currency:v,currencies:g,setCurrency:x,setCurrencies:y}),Object(n.jsxs)("div",{className:u?"cart-details-active":"cart-details-inactive",children:[Object(n.jsx)("div",{className:"cart-details-overlay"}),Object(n.jsxs)("form",{className:"cart-details-form",children:[Object(n.jsxs)("div",{className:"cart-details-nav",children:[Object(n.jsx)("img",{src:"./back-button.png",alt:"back button",className:"back-button",onClick:function(){return o(!1)}}),Object(n.jsx)("p",{children:"YOUR CART"})]}),Object(n.jsx)("div",{className:"cart-details-currency",children:Object(n.jsxs)("select",{name:"currency",onChange:function(e){return x(e.target.value)},children:[Object(n.jsx)("option",{defaultValue:!0,children:v}),g.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))]})}),Object(n.jsx)("div",{className:"cart-details-products",children:c.map((function(e){return Object(n.jsxs)("div",{className:"cart-item",children:[Object(n.jsx)("p",{className:"cart-item__name",children:e.title}),Object(n.jsxs)("div",{className:"cart-item__qty",children:[Object(n.jsx)("span",{className:"increment",onClick:function(){return t=e.id,c.find((function(e){return e.id===t})).quantity+=1,void i(Object(l.a)(c));var t},children:"+"}),Object(n.jsx)("span",{className:"qty",children:e.quantity}),Object(n.jsx)("span",{className:"decrement",onClick:function(){return function(e){var t=c.find((function(t){return t.id===e}));t.quantity-=1,t.quantity<1?C(e):i(Object(l.a)(c))}(e.id)},children:"-"})]}),Object(n.jsx)("div",{className:"cart-item__image",children:Object(n.jsx)("img",{src:e.image_url,alt:"product",className:"image"})}),Object(n.jsx)("p",{className:"cart-item__price",children:e.price*e.quantity}),Object(n.jsx)("p",{className:"close",onClick:function(t){return C(e.id)},children:"X"})]},e.id)}))}),Object(n.jsxs)("div",{className:"cart-footer",children:[Object(n.jsxs)("div",{className:"subtotal",children:[Object(n.jsx)("p",{children:"Subtotal"}),Object(n.jsxs)("p",{className:"subtotal-amount",children:["USD"===v?"$":v,function(){if(c.length>0)return c.map((function(e){return e.quantity*e.price})).reduce((function(e,t){return e+t}))}()]})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"subscription",children:"MAKE THIS A SUBSCRIPTION(SAVE 20%)"})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"checkout",children:"PROCEED TO CHECKOUT"})})]})]})]})]})})};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.661e5194.chunk.js.map