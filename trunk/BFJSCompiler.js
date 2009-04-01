/** 
 * BF To Javascript Compiler, in Javascript
 * By Kurtis Kopf
 */

function BFJSCompiler ()
{
	this.program = {};
	this.commandPtr = 0;
	this.binType = {
		alwaysEval: 'alwayseval',
		preEval: 'preeval',
		dump: 'dump'
	};
	this.currentBinType = this.binType.preEval;
	this.tempExec = null;
	
	this.reset = function ()
	{
		this.program = {};
		this.commandPtr = 0;
		this.tempExec = null;
	}
	
	this.initProgram = function ()
	{
		this.program = {
			stack: [],
			ptr: 0,
			outStream: '',
			code: '',
			exec: null,
			run: function () {
				this.stack = [];
				this.ptr = 0;
				this.outStream = '';
				if (this.exec != null)
				{
					this.exec ();
				}
				else
				{
					eval (this.code);
				}
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
	
	this.compile = function (command, bintype)
	{
		this.reset ();
		var date = new Date ();
		var tempName = '_temp' + date.getTime () + date.getMilliseconds ();
		if (command == null || typeof (command) != 'string')
		{
			return;
		}
		switch (bintype)
		{
			case this.binType.alwaysEval:
				this.currentBinType = this.binType.alwaysEval;
				break;
			case this.binType.preEval:
				this.currentBinType = this.binType.preEval;
				break;
			case this.binType.dump:
				this.currentBinType = this.binType.dump;
				break;
			default:
				this.currentBinType = this.binType.preEval;
				break;
		}
		command = command.split ('');
		this.initProgram ();
		if (this.currentBinType == this.binType.evalOnce)
		{
			this.addProgramCode ('this.tempExec = function (){ ');
		}
		if (this.currentBinType == this.binType.dump)
		{
			this.addProgramCode (tempName + ' = function () {');
		}
		while (this.commandPtr < command.length)
		{
			this.compileCommand (command [this.commandPtr], command);
			this.commandPtr ++;
		}
		if (this.currentBinType == this.binType.evalOnce)
		{
			this.addProgramCode ('};');
			eval (this.program.code);
			this.program.exec = this.tempExec;
		}
		if (this.currentBinType == this.binType.dump)
		{
			this.addProgramCode ('};');
			document.write ('<script type="text/javascript">' + this.program.code + '</script>');
			this.program.exec = eval (tempName);
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
