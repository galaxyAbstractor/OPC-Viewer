const createParser = require("opc/parser");
const net = require("net");
const createStrand = require("opc/strand");

class Opcserver {
    constructor(win, port) {
        this.mainWindow = win;

        this.server = net.createServer(function (connection) {
            connection.pipe(createParser()).on("data", function (message) {
                if (message.command === 0) {

                    let strand = createStrand(message.data);

                    let pixels = [];
                    for (let i = 0; i < strand.length; i++) {
                        let pixel = strand.getPixel(i);
                        pixels.push(
                            {
                                r: pixel[0],
                                g: pixel[1],
                                b: pixel[2]
                            }
                        )
                    }

                    win.send("update", {
                        strand: {
                            channel: message.channel,
                            pixels: pixels
                        }
                    });
                }
            });
        });

        this.server.listen(port)
    }

}

export default Opcserver;
