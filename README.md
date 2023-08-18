Within card.html I noticed that the partial components/common/responsive-img was responsible for creating images on category pages. Within responsive-img.html I added an addition attribute:
```
hover = '{{getImageSrcset images.[1] 1x=(default fallback_size '160w')}}'
```
I used the stencil supported handlebar helper getImageSrcSet to get the second product image. Within category.js I added JavaScript to use the hover attribute and the functions onMouseOver and onMouseOut.
Lines 32-42:
```
    onMouseOver(e) {
        const card = $(e.currentTarget).find(".card-image");
        const image = card.attr("hover");
        card.attr("srcset", image);
    }
```
```
    onMouseOut(e) {
        const card = $(e.currentTarget).find(".card-image");
        const image = card.attr("src");
        card.attr("srcset", image);
    }
```
```
Lines 154-157:

     $(".card-figure").hover(
        this.onMouseOver.bind(this),
        this.onMouseOut.bind(this)
     );
```
     
Essentially the functions are triggered when the cursor enters/exits the element with the class name specified. Note I allowed the hover feature to apply to all categories because I thought it would be cool and I wanted to test what would happen if a second image was not available.

Added Add All to Cart and Remove All Items button to category.html as well as a notification popup. Built-in helper #if was used to ensure this feature is only available when the category === "Special Items".
Lines 47-54:
```
{{#if category.name "==" "Special Items"}}
<div class = "button-group">
    <div class = "flex">
        <input type="button" class="button button-add" id="addAll" value="Add All To Cart"/>
        <input type="button" class="button button-remove" id="removeAll" value="Remove All Items"/>
    </div>
</div>
{{/if}}
```
```
Lines 22-29:
<div class="cart-notification">
    <div class="add-notification">
      All items successfully added to the cart!
    </div>
    <div class="remove-notification">
        All items successfully removed from cart!
    </div>
</div>
```
Added inject helpers to category.html
```
{{inject "categoryProducts" category.products}}
{{inject "thisCategory" category}}
{{inject "categoryProductsPerPage" theme_settings.categorypage_products_per_page}}
{{inject "categoryId" category.id}}
```

Imported filename custom in theme.scss to use custom scss

Button functionality was implemented on lines 44-134 using the storefront api documentation with the functions createCart, getCart, deleteCart, onAddAll, onRemoveAll, onCheckCart on lines 44-134. Adding items and removing items takes a few seconds to process before the cart is updated appropriately.

Bugs: Attempting to add more items to the cart after it has already been created results in a 422 error response because PUT must be used to modify an existing cart with the cartId or cartId and itemId: https://yourstore.example.com/api/storefront/carts/{cartId}/items/{itemId}. I attempted to create an updateCart function and checked if a cart exists within the onAddAll function with multiple tests on cartId during creation, deletion, and update but I received a 404 error response indicating that the server cannot find the requested resource (cart). Since the test doesn't ask for quantity to be updated when the addAll button is clicked numerous times I scrapped the workaround I created. It was based on a forum post I found. The post suggested the 404 error response was due to testing on localhost:3000 instead of https://josip-kapular.mybigcommerce.com and that a potential workaround is deleting and recreating the cart with the appropriate quantities.

I added html within header.html to display customer information at the top of the page only if a customer is currently logged in (used built-in helper #if on customer to check).
Lines 13-20:
```
{{#if customer}}
<header class="details">
  <div class="about">
    <span>{{customer.name}}</span>
    <span>{{customer.email}}</span>
    <span>{{customer.phone}}</span>
  </div>
</header>
{{/if}}
```

Store Access
- Preview Code: ps3atzlctj
- Store Url: https://josip-kapular.mybigcommerce.com
