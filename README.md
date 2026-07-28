# Dr Pepper Crack Counter

Open `index.html` in a browser and click the can to increase the tally.

## Persistence
The included version saves the tally in the browser using `localStorage`. It survives refreshes and browser restarts on the same device.

## Put it online free
Drag the folder into Netlify Drop, or upload it to GitHub Pages.

## Important: one shared counter across multiple phones/computers
A static website cannot share the same total between devices by itself. For a true shared tally, connect the buttons to a small database such as Supabase or Firebase. The current version is deliberately dependency-free and works immediately.
