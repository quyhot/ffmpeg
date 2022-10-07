const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs')

function a() {
    const stream = fs.createReadStream('./alo.mp4')
    const writeStream = fs.createWriteStream('./output3.gif');

    ffmpeg('./alo.mp4')
        .addOutputOption('-movflags', 'frag_keyframe+empty_moov')
        .format('gif')
        .seek(1)
        .setDuration('5')
        .save(writeStream, {end: true})
        .on('end', function (err) {
            if (!err) {
                console.log('conversion Done')
            }
        })
        .on('error', err => console.log('error: ', err))

}

a()
