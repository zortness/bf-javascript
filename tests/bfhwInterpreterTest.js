/* hello world speed test for interpreter */
document.write ('This program will run the BF "Hello World!" script through the interpreter numerous times to get an average execution time.<br /><br />');
var cycles = 1000;
bfi = new BFJSInterpreter ();
document.write ('Executing interpreter ' + cycles + ' times...');
var startTime = new Date ();
for (var i = 0; i < cycles; i++)
{
	bfi.execute ('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.');
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
document.write ('<br />Output from interpreter: <b>' + bfi.outStream + '</b><br/>');
/* simple addition program test */
//bfi.execute (',>++++++[<-------->-],[<+>-]<.');
//document.write ('output from interpreter: <br/><b>' + bfi.outStream + '</b><br/>');