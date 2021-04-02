'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function(db) {
    return db.createTable('surah', {
        columns: {
            id: {
                type: 'int',
                unsigned: true,
                primaryKey: true,
                autoIncrement: true,
                length: 11,
            },
            name: {
                type: 'string',
                notNull: true,
            },
            englishName: {
                type: 'string',
                notNull: true,
            },
            numberOfAyahs: {
                type: 'string',
                notNull: true,
            },
            revelationType: {
                type: 'string',
                notNull: true,
            }
        },
    });
};

exports.down = function(db) {
    return db.dropTable('surah');
};

exports._meta = {
    "version": 1
};