# QuickCheat

QuickCheat is a browser extension for helping you to create cheats or cheat sheets for the various tools and technologies you
use in dailty lives. you might be using long complicated commands  with several command line options for different tools to
accomplish different tasks and its often tough to remember those commands or type them quickly into your terminals. QuickCheat
will provide you with a place to quickly lookup such commands and also create such cheats for yourself for future use.

Features provided by QuickCheat :

- Add a tool or technology for example ```docker, consul, netstat``` any thing that you use in your daily lives. Then start
adding commands/notes which you use quite often with respect with those tools. Quickly look them up when you need to type in
that command the next time.

- In our day to day lives we visit several websites to find resources. Often we might want to leave back some note on a web
  page, so that when we come back the next time we remember easily what we were trying to do or what issue we faced and where
  to pick up our stuff from. For example, you might be reading a tutorial or a setup instruction of a tool, and then you leave
  that activity for sometime. You come back after quite some time, and now you want to know where you had left, what was your
  progress and what issues you were facing, or may be a note you want to remind you self with. you can do this very easily
  with QuickCheat. With QuickCheat you can take different custom notes for different web page and then look them up whenever
  you go back to that page later

## Installation

This is a work in progress and there is yet no packaged version. So in order to test it you can load it temporarily in
your browser using the following steps.

Also, the extension right now works only in Firefox properly due to some APIs breaking in Google Chrome.

**Firefox:**

- Clone this repository.
- Open Firefox
- Open ```about:debugging``` page
- Select ```This Firefox```
- Select ```Load temporary extension``` then browse to this reposiroty and open any file from the repository.
- The extension will be loaded into the browser as a browser action (button). Clicking on that button will open the
  main popup.
  
## Command cheatsheets

You can add new tool and creat cheats using the following steps:

- Open the QuickChear popup
- Select the big plus button, enter the name of the tool/technology you want to add and confirm.
- Once the technology is added, a card will be created.
- To add a command/note, press on the plus button on the corresponding card, give a suitable title and add the actual command
  or note.
- You can edit or remove your command or tool card whenever you desire.
- It is to be notes that, your tool name should be unique, that is, it should not be quickalready present and also, your
  command/note tiltle should be unique for a particular tool.
  
<img src="github_assets/commands.gif">

## Webpage note

A webpage note can be added using the following steps:

- Open QuickCheat popup.
- Press on the edit icon beside ```Web Page Notes``` title in the first card.
- Enter whatever note you want to take for the current web page and confirm.
- Try openning the same page again in a different tab or window and press on the more/vertical icom, you should be
  able to see your note. You can update your note anytime.
  
<img src="github_assets/notes.gif">
  

  
  

