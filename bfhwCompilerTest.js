/* hello world speed test for compiled bf code */
document.write ('This program compiles the BF "Hello World!" program into JavaScript and runs it numerous times to get an average execution time.<br /><br />');
bfc = new BFJSCompiler ();
var cycles = 1000;
var helloWorld = '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.';
document.write ('Compiling program with <b>alwayseval</b> mode...');
var startCompileTime = new Date ();
var prog = bfc.compile (helloWorld, 'alwayseval');
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

document.write ('<br/>Compiling program with <b>preeval</b> mode...');
startCompileTime = new Date ();
var prog2 = bfc.compile (helloWorld, 'preeval');
document.write ('Done.<br />');
document.write ('Executing program ' + cycles + ' times...');
startTime = new Date ();
for (var i = 0; i < cycles; i++)
{
	prog2.run ();
}
stopTime = new Date ();
compileTime = startTime - startCompileTime;
execTime = stopTime - startTime;
avg = execTime / cycles;
document.write ('Done.<br />');
document.write ('Compile Time: ' + compileTime + ' ms<br />');
document.write ('Start Time: ' + startTime + '<br />');
document.write ('Stop Time: ' + stopTime + '<br />');
document.write ('Total Execution Time: ' + execTime + ' ms<br />');
document.write ('Average Execution Time: ' + avg + ' ms<br /><br />');
document.write ('Program Output: <b>' + prog2.run () + '</b><br />');

document.write ('<br/>Compiling program with <b>dump</b> mode...');
startCompileTime = new Date ();
var prog3 = bfc.compile (helloWorld, 'dump');
document.write ('Done.<br />');
document.write ('Executing program ' + cycles + ' times...');
startTime = new Date ();
for (var i = 0; i < cycles; i++)
{
	prog3.run ();
}
stopTime = new Date ();
compileTime = startTime - startCompileTime;
execTime = stopTime - startTime;
avg = execTime / cycles;
document.write ('Done.<br />');
document.write ('Compile Time: ' + compileTime + ' ms<br />');
document.write ('Start Time: ' + startTime + '<br />');
document.write ('Stop Time: ' + stopTime + '<br />');
document.write ('Total Execution Time: ' + execTime + ' ms<br />');
document.write ('Average Execution Time: ' + avg + ' ms<br /><br />');
document.write ('Program Output: <b>' + prog3.run () + '</b><br />');