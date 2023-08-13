const {exec} = require('child_process')
const path = require('path')

const executepy = (filepath)=>{
    
    return new Promise((resolve,reject)=>{

        const uniqueName = path.basename(filepath).split(".")[0];
        // const wayName = `${__dirname}/python_runner`;
        // const dirCodes = path.join(__dirname,"../python_runner");

        const wayName = path.join(__dirname,"../python_runner")
        console.log("File Location:",wayName)
        exec(
            `cd ${wayName} && python ${uniqueName}.py`,
            (error,stdout,stderr)=>{
                if (error) {
                    console.error("faizan-Python execution error:", error);
                    reject(error);
                } else if (stderr) {
                    console.error("faizan-Python stderr:", stderr);
                    reject(stderr);
                } else {
                    console.log("faizan-Python stdout:", stdout);
                    resolve(stdout);
                }
            }
        );
    });
};
module.exports = {
    executepy
}