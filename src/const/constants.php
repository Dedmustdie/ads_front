<?php

const NOT_FOUND_CODE = 404;
const SUCCESS_CODE = 200;
const INTERNAL_SERVER_ERROR_CODE = 500;

const CREATE_PAGE = '/create';
const ADS_PAGE = '(/(\d+)(\?(((isPriceSort=(1|0|(-1))&)|(isTimeSort=(1|0|(-1))&))((isPriceSort=(1|0|(-1)))|(isTimeSort=(1|0|(-1))))))?)|';
const AD_PAGE = '/ad/(\d+)';
const GET_AD_PATTERN = '/ad/(\d+)(\?((fields\[\]=text&fields\[\]=images)|(fields\[\]=images&fields\[\]=text)|(fields\[\]=(text|images))))?';