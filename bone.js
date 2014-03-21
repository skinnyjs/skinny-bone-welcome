var asciimo = require('asciimo').Figlet;

module.exports = function attachWelcome(skinny, text) {
    "use strict";

    skinny.on('start', function() {
        asciimo.write(text, 'Puffy', function(art) {
            console.log();
            console.log(art);

            if (skinny.actions) {
                console.log('My actions:');

                Object.keys(skinny.actions).forEach(function(name) {
                    console.log(' - ' + name);
                });
            }
        });
    });
};