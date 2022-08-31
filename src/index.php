<?php
require __DIR__ . '/const/constants.php';
require __DIR__ . '/utils/RoutesUtil.php';

RoutesUtil::route(CREATE_PAGE_PATTERN, function () {
    require_once 'view/create_page.html';
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

RoutesUtil::route(INTERNAL_ERROR_PATTERN, function () {
    require_once 'view/internal_error_page.html';
});

RoutesUtil::execute();

