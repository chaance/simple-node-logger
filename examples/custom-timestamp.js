#!/usr/bin/env node

var moment = require( 'moment' ),
    opts = {
        formatTimestamp(ts) {
            return moment( ts ).format( 'mm:ss.SSS' );
        },
    },
    log = require('../lib/SimpleLogger').createSimpleLogger( opts );

log.trace('this is a simple trace log statement (should not show)');
log.debug('this is a simple debug log statement (should not show)');
log.info('this is a simple info log statement/entry');
log.warn('this is a simple warn log statement/entry');
log.error('this is a simple error log statement/entry');
log.fatal('this is a simple fatal log statement/entry');

log.info('set the level to all');
log.setLevel('all');
log.trace('this is a simple trace log statement (should show)');
log.debug('this is a simple debug log statement (should show)');

