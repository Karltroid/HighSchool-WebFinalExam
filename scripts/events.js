/*
 * File: events.js
 * Name: Karl Palmer
 * Date: 3/13/2020 (created)
 */

function gotopage(page) // had to make a script that simple goes to a sub domain of the page because <a href=""> wasn't working on <tr> elements
{
	if (page != "")
	{
		window.location.href = window.location + "/../" + page + "/index.html";
	}
	else
	{
		window.location.href = window.location + "/../../index.html";
	}
}