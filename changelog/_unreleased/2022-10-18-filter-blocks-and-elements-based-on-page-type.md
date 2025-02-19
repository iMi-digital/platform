---
title: Filter blocks and elements based on page type
issue: NEXT-17716
flag:
author: Niklas Limberg
author_email: n.limberg@shopware.com
author_github: NiklasLimberg
---
# Administration
* Added functions to the `cms.service` which determine whether a block/element is allowed on a given page type
* Changed `sw-cms-sidebar/index.js` to restrict the selection of blocks based on the page type
* Changed `sw-cms-slot/index.js` to restrict the selection of elements based on the page type
* Changed the CMS-Blocks `product-heading`, `category-navigation` and `sidebar-filter` to restrict them to certain page types
* Changed the CMS-Elements `manufacturer-logo`, `product-name`, `sidebar-category-navigation` and `sidebar-filter` to restrict them to certain page types
* Added property `currentPageType` to the `cms-page-state` store
* Changed `sw-cms-detail/index.js` to set the current page type in the `cms-page-state` store
