<?php
require __DIR__ . '/const/constants.php';
require __DIR__ . '/utils/RoutesUtil.php';

//ad/1?fields[]=text&fields[]=components
RoutesUtil::route(CREATE_PAGE_PATTERN, function () {
    require_once 'view/create_page.php';
});

RoutesUtil::route(ADS_PAGE_PATTERN, function () {
    require_once 'view/ads_page.html';
});

RoutesUtil::route(AD_PAGE_PATTERN, function () {
    require_once 'view/ad_page.html';
});

RoutesUtil::route(DOWNLOAD_PAGE_PATTERN, function () {
    require_once 'view/download_page.php';
});

RoutesUtil::execute();

