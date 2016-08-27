'use strict';

FileService.$inject = ['$http', 'apiRoutes', 'Upload'];
function FileService($http, apiRoutes, Upload) {
    let service = this;
    let routes = apiRoutes;
    service.saveFile = saveFile;

    function saveFile(file, param) {
        let args = {
            method: 'POST',
            url: routes.files.create + param,
            file: file
        };

        return Upload.upload(args)
            .then((response) => {
                let file = response.data;
                return file;
            });
    }
}

module.exports = FileService;