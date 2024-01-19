const fs = require('fs');
let date_ob = new Date();
let time = date_ob.toLocaleString('en-IN', { timeZone: 'IST' });
let gap = "\n------------------------------------------------------------------------\n"


process.on("unhandledRejection", (reason, p) => {
  fs.appendFileSync('./errorLogs/UnhandledRejection.txt',"\n"+"[Error_Handling] :: Unhandled Rejection/Catch"+"\n"+reason+"\n"+p+"\n"+time+gap)
});
process.on("uncaughtException", (err, origin) => {
  fs.appendFileSync('./errorLogs/UncaughtException.txt',"\n"+"[Error_Handling] :: Uncaught Exception/Catch"+"\n"+err+"\n"+origin+"\n"+time+gap)
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  fs.appendFileSync('./errorLogs/UncaughtMonitor.txt',"\n"+"[Error_Handling] :: Uncaught Exception/Catch (MONITOR)"+"\n"+err+"\n"+origin+"\n"+time+gap)
});
process.on("DeprecationWarning", (err, origin) => {
  fs.appendFileSync('./errorLogs/DeprecationWarning.txt',"\n"+"[Error_Handling] :: Uncaught Exception/Catch (Deprecation)"+"\n"+err+"\n"+origin+"\n"+time+gap)
});
process.on("multipleResolves", (type, promise, reason) => {
  if (reason == "Error: Cannot perform IP discovery - socket closed") return;
  fs.appendFileSync('./errorLogs/MultipleResolves.txt',"\n"+"[Error_Handling] :: Multiple Resolves"+"\n"+type+"\n"+promise+"\n"+reason+"\n"+time+gap)
});
process.on('warning', (warning) => {
   fs.appendFileSync('./errorLogs/Warning.txt',"\n"+"[Error_Handling] :: WARNING"+"\n"+warning+"\n"+time+gap)
});