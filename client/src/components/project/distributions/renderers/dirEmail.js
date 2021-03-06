angular.module('common')
.directive('dirEmail', [function() {
    'use strict';

    /*************************************
    ******** Directive description *******
    **************************************/
    var dirDefn = {
        restrict: 'AE',
        require: '?^dirAttrRenderer',
        templateUrl: '#{server_prefix}#{view_path}/components/project/distributions/renderers/email.html',

        scope: {
            email: '@',
            nodeColorStr: '@'
        },
        link: postLinkFn
    };

    /*************************************
    ************ Local Data **************
    **************************************/


    /*************************************
    ******** Controller Function *********
    **************************************/


    /*************************************
    ******** Post Link Function *********
    **************************************/
    function postLinkFn(scope) {
        //remove whitespace
        scope.email = scope.email.replace(/\s/g, '');
    }



    /*************************************
    ************ Local Functions *********
    **************************************/



    return dirDefn;
}
]);