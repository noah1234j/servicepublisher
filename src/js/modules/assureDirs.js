const fs = require('fs')
const config = require('../../../settings.json')

module.exports = () => {
    //Assures the dirs are in place
    assureDir(config.audio.pre_ptf) //Audio Capture
    assureDir(config.audio.post_ptf)
    assureDir(config.audio.upload_ptf) //Audio Encodes Uploaded
    assureDir(config.video.pre_ptf) //Video Capture
    assureDir(config.video.post_ptf)
    assureDir(config.video.upload_ptf) //Video Encodes

    //Sees if the dir exists, if it doenst it makes it
    function assureDir (dir) {

        // Checks if the dir exists
        if (!fs.existsSync(dir)) {

            //If it doesn't this makes it
            fs.mkdir(dir, function(err){

                //if theres a problem tell us what it is 
                if (err) { log(err)}

                //If there isn't log success
                else { log('\r\n' + dir + " Sucessfully Created! Woot Woot" + '\r\n')}
                
            })

        // If we already have the folders
        } else {

            //Tell us we don't need them
            //log('\r\n' + 'No need to create ' + dir + '\r\n')
        }
    }
}