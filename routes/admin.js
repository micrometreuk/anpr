var express = require('express');
var router = express.Router();
var config = require('config');
var config = config.get('config');
var exec = require('child_process').exec;

/* GET users listing. */



router.get('/', function (req, res) {
    res.render('pages/admin.ejs', {
        locations: config.locations,
        links: config.links,
        commands: config.commands,
        pageTitle: config.pageTitle
    });
});


router.get('/info', function (req, res) {
    var informations = config.informations;
    var infoResults = new Array()
    var i;

    function create_child(i) {
        var child = exec(informations[i].exec, function (error, stdout, stderr) {
            //console.log("order know in callback " + i + " with PID "+ child.pid);

            //Need to store result on the corresponding command using order/i match.
            var index = infoResults.findIndex(x => x.order === i);
            infoResults[index].result = stdout;
            infoResults[index].status = "done";

            // Return full results only when all async exec are done
            if (infoResults.filter(x => x.status == "done").length == informations.length) {
                res.json(infoResults);
            }
        });
        return child;
    }

    for (i = 0; i < informations.length; i++) {
        var created_child = create_child(i);
        //Need to store the PID after creating the child process to match the results with the corresponding command.
        var infoResult = {};
        infoResult["order"] = i;
        infoResult["label"] = informations[i].label;
        infoResult["result"] = "";
        infoResult["status"] = "todo";
        infoResults.push(infoResult);
        //console.log("order know in external loop " + i + " with PID "+ created_child.pid);
    }
});

router.get('/cmd/:requestedPath', function (req, res) {
    var command = config.commands.filter(x => x.nickname === req.params.requestedPath).shift();
    if (command) {
        var execCmd = command.exec;
        child = exec(execCmd, function (error, stdout, stderr) {
            var result = { status: (error ? "failure" : "success"), stdout: stdout, stderr: stderr };
            res.json(result);
        });
    }
    else {
        res.send('No command name found matching with the request "' + req.params.requestedPath + '"');
    }
});


module.exports = router;
