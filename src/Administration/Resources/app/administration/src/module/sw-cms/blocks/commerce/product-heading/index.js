import CMS from '../../../constant/sw-cms.constant';

import './component';
import './preview';

/**
 * @private since v6.5.0
 */
Shopware.Service('cmsService').registerCmsBlock({
    name: 'product-heading',
    label: 'sw-cms.blocks.commerce.productHeading.label',
    category: 'commerce',
    component: 'sw-cms-block-product-heading',
    previewComponent: 'sw-cms-preview-product-heading',
    allowedPageTypes: [CMS.PAGE_TYPES.PRODUCT_DETAIL],
    defaultConfig: {
        marginTop: '20px',
        marginLeft: '20px',
        marginBottom: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        left: 'product-name',
        right: 'manufacturer-logo',
    },
});
