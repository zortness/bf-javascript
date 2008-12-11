/** 
 * BF To Javascript Compiler, in Javascript
 * By Kurtis Kopf
 */

function BrainFuckJSCompiler ()
{
	this.program = {};
	this.commandPtr = 0;
	
	this.reset = function ()
	{
		this.program = {};
		this.commandPtr = 0;
	}
	
	this.initProgram = function ()
	{
		this.program = {
			stack: [],
			ptr: 0,
			outStream: '',
			code: '',
			run: function () {
				this.stack = [];
				this.ptr = 0;
				this.outStream = '';
				eval (this.code);
				return (this.outStream);
			},
			init: function ()
			{
				if (this.stack [this.ptr] == null)
				{
					this.stack [this.ptr] = 0;
				}
			}
		};
	}
	
	this.compile = function (command)
	{
		if (command == null || typeof (command) != 'string')
		{
			return;
		}
		command = command.split ('');
		this.initProgram ();
		while (this.commandPtr < command.length)
		{
			this.compileCommand (command [this.commandPtr], command);
			this.commandPtr ++;
		}
		return (this.program);
	}
	
	this.compileCommand = function (c)
	{
		switch (c)
		{
			case '>': this.next (); break;
			case '<': this.prev (); break;
			case '+': this.increment (); break;
			case '-': this.decrement (); break;
			case '.': this.putChar (); break;
			case ',': this.getChar (); break;
			case '[': this.open (); break;
			case ']': this.close (); break;
		}
	}
	
	this.addProgramCode = function (code)
	{
		if (this.program.code == null || typeof (this.program.code) == 'undefined')
		{
			this.program.code = '';
		}
		this.program.code += code;
	}
	
	this.next = function ()
	{
		this.addProgramCode ('this.ptr++;\n');
	}
	
	this.prev = function ()
	{
		this.addProgramCode ('this.ptr--;\n');
	}
	
	this.increment = function ()
	{
		this.addProgramCode ('this.init(); this.stack[this.ptr]++;\n');
	}
	
	this.decrement = function ()
	{
		this.addProgramCode ('this.init(); this.stack[this.ptr]--;\n');
	}
	
	this.putChar = function ()
	{
		this.addProgramCode ('this.outStream+=String.fromCharCode(this.stack[this.ptr]);\n');
	}
	
	this.getChar = function ()
	{
		this.addProgramCode ('var input=prompt(\'Input Character:\',\'\'); this.stack[this.ptr]=input;\n');
	}
	
	this.open = function ()
	{
		this.addProgramCode ('while(this.stack[this.ptr]!=0) {\n');
	}
	
	this.close = function ()
	{
		this.addProgramCode ('}\n');
	}
}
