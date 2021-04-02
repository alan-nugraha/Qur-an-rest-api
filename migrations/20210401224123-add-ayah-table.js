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
    return db.createTable('ayah', {
        columns: {
            id: {
                type: 'int',
                unsigned: true,
                primaryKey: true,
                autoIncrement: true,
                length: 11,
            },
            id_surah: {
                type: 'int',
                unsigned: true,
                length: 11,
                foreignKey: {
                    name: 'ayah_id_surah_fk',
                    table: 'surah',
                    rules: {
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE'
                    },
                    mapping: 'id'
                }
            },
            numberAyah: {
                type: 'int',
                unsigned: true,
                notNull: true,
            },
            ayah: {
                type: 'text',
                notNull: true,
            },
        }
    });
};

exports.down = function(db) {
    return db.dropTable('ayah');
};

exports._meta = {
    "version": 1
};