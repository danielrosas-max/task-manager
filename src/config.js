
const path = require("path")
function ObtenerConfiguracion(){
    return{
        tasksPath:path.join(__dirname,"tasks.json"),
        dateFormate: "YYYY-MM-DD HH:mm:ss",
        logging:{
        flash: true
    }
    };

}
module.exports = {ObtenerConfiguracion};


