/* hello world speed test for compiled bf code */
document.write ('This program compiles the BF "Hello World!" program into JavaScript and runs it numerous times to get an average execution time.<br /><br />');
bfc = new BrainFuckJSCompiler ();
var cycles = 1000;
document.write ('Compiling program...');
var startCompileTime = new Date ();
var prog = bfc.compile ('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.');
document.write ('Done.<br />');
document.write ('Executing program ' + cycles + ' times...');
var startTime = new Date ();
for (var i = 0; i < cycles; i++)
{
	prog.run ();
}
var stopTime = new Date ();
var compileTime = startTime - startCompileTime;
var execTime = stopTime - startTime;
var avg = execTime / cycles;
document.write ('Done.<br />');
document.write ('Compile Time: ' + compileTime + ' ms<br />');
document.write ('Start Time: ' + startTime + '<br />');
document.write ('Stop Time: ' + stopTime + '<br />');
document.write ('Total Execution Time: ' + execTime + ' ms<br />');
document.write ('Average Execution Time: ' + avg + ' ms<br /><br />');
document.write ('Program Output: <b>' + prog.run () + '</b><br />');