 /** 
 * BF Interpreter in Javascript
 * By Kurtis Kopf
 */

function BFJSInterpreter ()
{
	this.stack = [];
	this.ptr = 0;
	this.commandPtr = 0;
	this.outStream = '';
	this.promptListener = null;
	this.loopStartPtrs = [];
	
	this.reset = function ()
	{
		this.ptr = 0;
		this.commandPtr = 0;
		this.stack = [];
		this.outStream = '';
		this.loopStartPtrs = [];
	}
	
	this.execute = function (command)
	{
		if (command == null || typeof (command) != 'string')
		{
			return;
		}
		command = command.split ('');
		while (this.commandPtr < command.length)
		{
			this.executeCommand (command [this.commandPtr], command);
			this.commandPtr ++;
		}
	}
	
	this.executeCommand = function (c, inputStream)
	{
		switch (c)
		{
			case '>': this.next (); break;
			case '<': this.prev (); break;
			case '+': this.increment (); break;
			case '-': this.decrement (); break;
			case '.': this.putChar (); break;
			case ',': this.getChar (); break;
			case '[': this.open (inputStream); break;
			case ']': this.close (); break;
		}
	}
	
	this.init = function ()
	{
		if (this.stack [this.ptr] == null)
		{
			this.stack [this.ptr] = 0;
		}
	}
	
	this.next = function ()
	{
		this.ptr ++;
	}
	
	this.prev = function ()
	{
		this.ptr --;
	}
	
	this.increment = function ()
	{
		this.init ();
		this.stack [this.ptr] ++;
	}
	
	this.decrement = function ()
	{
		this.init ();
		this.stack [this.ptr] --;
	}
	
	this.putChar = function ()
	{
		this.outStream += String.fromCharCode (this.stack [this.ptr]);
	}
	
	this.getChar = function ()
	{
		if (this.promptListener != null)
		{
			this.promptResponse (this.promptListener ());
		}
		else
		{
			var input = prompt ('Input Character:', '');
			this.promptResponse (input.charCodeAt ());
		}
	}
	
	this.promptResponse = function (inputChar)
	{
		this.stack [this.ptr] = inputChar;
	}
	
	this.open = function (inputStream)
	{
		if (this.stack [this.ptr] > 0)
		{
			this.loopStartPtrs.push (this.commandPtr - 1);
		}
		else
		{
			this.loopStartPtrs.pop ();
			var startPointers = 1;
			var stopPointers = 0;
			this.commandPtr ++;
			while (startPointers != stopPointers && inputStream [this.commandPtr] != null)
			{
				if (inputStream [this.commandPtr] == '[')
				{
					startPointers ++;
				}
				else if (inputStream [this.commandPtr] == ']')
				{
					stopPointers ++;
				}
				this.commandPtr ++;
			}
			this.commandPtr --;
		}
	}
	
	this.close = function ()
	{
		if (this.stack [this.ptr] == 0)
		{
			this.loopStartPtrs.pop ();
		}
		else
		{
			var loc = this.loopStartPtrs [this.loopStartPtrs.length - 1];
			this.commandPtr = loc;
		}
	}
}
