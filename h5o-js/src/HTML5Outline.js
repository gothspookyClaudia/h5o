	HTML5Outline=function(start)
	{
		if (!isSecRoot(start) && !isSecContent(start)) {
			throw new Error("Must start with either sectioning content or sectioning root element");
		}

		// Let current outlinee be null. (It holds the element whose outline is being created.)
		currentOutlinee=null;
		
		// Let current section be null. (It holds a pointer to a section, so that elements in the DOM can all be associated with a section.)
		currentSection=new Section();
		
		// Create a stack to hold elements, which is used to handle nesting. Initialize this stack to empty.
		stack=[];

		// As you walk over the DOM in tree order, trigger the first relevant step below for each element as you enter and exit it.
		walk(start, enterNode, exitNode);
		
/*
If the current outlinee is null, then there was no sectioning content element or sectioning root element in the DOM. There is no outline. Abort these steps.

Associate any nodes that were not associated with a section in the steps above with current outlinee as their section.

Associate all nodes with the heading of the section with which they are associated, if any.

If current outlinee is the body element, then the outline created for that element is the outline of the entire document.
*/
		
		return currentOutlinee.outline.asHTML();
		
	};