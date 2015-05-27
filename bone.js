var asciimo = require('asciimo').Figlet;

module.exports = function attachWelcome(skinny, text) {
    "use strict";

    skinny.on('start', function() {
        asciimo.write(text, 'Puffy', function(art) {
            text = `\n${art}`;

            if (skinny.actions) {
                text += "My actions:\n";

                Object.keys(skinny.actions).forEach(function(name) {
                    text += ` - ${name}\n`;
                });
            }

            if (skinny.logger) {
                skinny.logger.info(text);
            } else {
                console.log(text);
            }
        });
    });
};