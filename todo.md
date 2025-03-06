react95 ashbringer.us

Place to keep my things to do other than the comments (of which I will be doing both)

Design approach
- Instead of making this a portfolio site with a taskbar, think of making it feel more in line with interacting through a file system. 
- Treat the portfolio component simply as a directory in my operating system.

Desktop Level
Issues
- ‘Programs’ or modals will not reopen after closing the window once. Seems to be an issue with managing the state (since we are tracking state of ‘programs’ on both the component and Desktop.js level, they seem to become out of sync)
    - ✅ FIXED! | By centralizing all the logic for modal toggle state (openExplorer, closeExplorer, isExplorerOpen for example) inside of Desktop.js it has fixed the issue of the state becoming out-of-sync

- Align all font sizes across task bar and desktop programs
    - ✅ FIXED! | Fixed by wrapping in a TaskBarContainer and applying a font size to all descendants of the container.

- Fix the border of the window around some windows (its expanding past react95 modal borders)
    - ✅ FIXED! | By removing the hardcoded ‘height’ value on render it allows the modal to wrap around the content as expected. 

Shortcuts
Issues
- I am adding this one after the fact, but for the sake of documenting, when hovering at any position to the right on the horizontal plane alongside each shortcut, it would active the hover effect
    - ✅ FIXED! |  By default, a div is a block level element. This means it will span the entire width of the container. To remedy such effect, I added width: fit-content; to the styled component and it will now act the way I would expect.

Terminal
Issues
- Text is fucking up. Finally have determined that the only real ‘bug’ I am going to need to figure out on the terminal is that the font that is being using, seems to be spaced weird on certain characters (i.e. not properly monospaced, even thought the damn thing says it a monospaced font)



