'use strict';

module.exports = {
    'dbUrl': 'mongodb://mongo:27017/MAPPRDB',
    'oldDbUrl': 'mongodb://mongo:27017/MPTEST',
    'sessiondbUrl': 'mongodb://mongo:27017/sessionDB',
    'elasticSearchConfig': {
        host: 'elasticsearch:9200',
        log: 'error',
        apiVersion: '2.4'
    },
    'athena' : {
        url : 'athena:5000'
    },
    'beanstalk' : {
        host : 'beanstalk',
        port : 11300
    },
    'redis' : {
        // url : 'redis://user:password@redis-service.com:6379/'
        url : 'redis://127.0.0.1:6380/0'
    }
};
