<?php
require __DIR__ . '/const/constants.php';
require __DIR__ . '/utils/RoutesUtil.php';

//ad/1?fields[]=text&fields[]=images
RoutesUtil::route(CREATE_PAGE, function () {
    require_once 'view/create_page.php';
});

RoutesUtil::route(ADS_PAGE, function () {
    require_once 'view/ads_page.html';
});

RoutesUtil::route(AD_PAGE, function () {
    require_once 'view/ad_page.html';
});

RoutesUtil::route("/download", function () {
    require_once 'view/downloadUtil.php';
});
////ads/1?isPriceSort=1&isTimeSort=-1
//RoutesUtil::route("", function () {
//    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
//    $page = explode('/', $path);
//    controller::getAds(end($page), $_GET['isPriceSort'] ?? 0, $_GET['isTimeSort'] ?? 0);
//});

RoutesUtil::execute();

