angular.module('image.shapes')

.controller('StickersController', ['$scope', '$rootScope', 'canvas', 'simpleShapes', 'history', function($scope, $rootScope, canvas, simpleShapes, history) {
	$scope.shapes = simpleShapes;
    $scope.opacity = 0.9;

    $scope.categories = [
        { name: 'bubbles', items: new Array(104), type: 'png' },
        { name: 'stars', items: new Array(6), type: 'png', darkbg: true },
        { name: 'transportation', items: new Array(22), type: 'svg' },
        { name: 'doodles', items: new Array(100), type: 'svg' },
        { name: 'landmarks', items: new Array(100), type: 'svg' },
        { name: 'beach', items: new Array(22), type: 'svg' },
        { name: 'animals', items: new Array(10), type: 'png' },
        { name: 'clouds', items: new Array(15), type: 'png', darkbg: true },
    ];

    $scope.activeCategory = 'doodles';

    $scope.activeStickerIsSvg = function() {
        var obj = canvas.fabric.getActiveObject();

        return obj && angular.isDefined(obj.svgUid);
    };

    $scope.isPanelEnabled = function() {
        var obj = canvas.fabric.getActiveObject();
        return obj && obj.name === 'sticker' && $rootScope.activeTab === 'stickers';
    };

    $scope.setActiveCategory = function(name) {
        if ($scope.activeCategory === name) {
            $scope.activeCategory = false;
        } else {
            $scope.activeCategory = name;
        }
    };

    $scope.setOpacity = function(opacity) {
        simpleShapes.getShape('sticker').setOpacity(opacity);
        canvas.fabric.renderAll();
    };

    $scope.setColor = function(color) {
        var obj = simpleShapes.getShape('sticker');

        if (obj.isSameColor && obj.isSameColor() || ! obj.paths) {
            obj.setFill(color);
        }
        else if (obj.paths) {
            for (var i = 0; i < obj.paths.length; i++) {
                obj.paths[i].setFill(color);
            }
        }

        canvas.fabric.renderAll();
    };

    $scope.addToCanvas = function(category, index, e) {
        if ($scope.loading) return;
        $scope.loading = true;
        $scope.openPanel('stickers', e);

        if (category.type === 'svg') {
            fabric.loadSVGFromURL('assets/images/stickers/'+category.name+'/'+index+'.'+category.type, function (objects, options) {
                var image = fabric.util.groupSVGElements(objects, options);
                //var image = new fabric.Image(img);
                image.name = 'sticker';
                canvas.fabric.add(image);
                image.scaleToHeight((40 / 100) * canvas.fabric.getHeight());

                image.center();
                image.setCoords();
                canvas.fabric.setActiveObject(image);
                canvas.fabric.renderAll();

                $scope.$apply(function() {
                    $scope.loading = false;
                });

                history.add('Added: Sticker', 'favorite');
            });
        } else {
            fabric.util.loadImage('assets/images/stickers/'+category.name+'/'+index+'.'+category.type, function(img) {
                var image = new fabric.Image(img);
                image.name = 'sticker';
                canvas.fabric.add(image);
                image.center();
                image.setCoords();
                image.scaleToHeight((40 / 100) * canvas.original.height);

                canvas.fabric.setActiveObject(image);
                canvas.fabric.renderAll();

                $scope.$apply(function() {
                    $scope.loading = false;
                });

                history.add('Added: Sticker', 'favorite');
            });
        }
    }
}]);