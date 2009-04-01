/**
 * Interpreter Test
 */
document.write ('This program will run the BF "Hello World!" script through the Interpreter and Compiler numerous times to get an average execution time.<br /><br />');
var cycles = 1000;
var helloWorld = '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.';
bfi = new BFJSInterpreter ();
document.write ('Executing interpreter ' + cycles + ' times...');
var startTime = new Date ();
for (var i = 0; i < cycles; i++)
{
	bfi.execute (helloWorld);
	bfi.reset ();
}
var stopTime = new Date ();
var execTime = stopTime - startTime;
var avg = execTime / cycles;
document.write ('Done.<br />');
document.write ('Start Time: ' + startTime + '<br />');
document.write ('Stop Time: ' + stopTime + '<br />');
document.write ('Total Execution Time: ' + execTime + ' ms<br />');
document.write ('Average Execution Time: ' + avg + ' ms<br />');
bfi.execute ('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.');
document.write ('Output from interpreter: <b>' + bfi.outStream + '</b><br/><br/>');

/**
 * Compiler Tests
 */
// alwayseval mode
bfc = new BFJSCompiler ();
document.write ('Compiling program with <b>alwayseval</b> mode...');
startCompileTime = new Date ();
var prog1 = bfc.compile (helloWorld, 'alwayseval');
document.write ('Done.<br />');
document.write ('Executing program ' + cycles + ' times...');
startTime = new Date ();
for (var i = 0; i < cycles; i++)
{
	prog1.run ();
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
document.write ('Average Execution Time: ' + avg + ' ms<br />');
document.write ('Program Output: <b>' + prog1.run () + '</b><br /><br />');

// preeval mode
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
document.write ('Average Execution Time: ' + avg + ' ms<br />');
document.write ('Program Output: <b>' + prog2.run () + '</b><br /><br />');

// dump mode
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
document.write ('Average Execution Time: ' + avg + ' ms<br />');
document.write ('Program Output: <b>' + prog3.run () + '</b><br /><br />');