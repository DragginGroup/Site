# v0.2.1 - Oct 30, 2024
- Fixed `createImage` function Image SRC.

# v0.2 - Oct 30, 2024
- Added `createParagraph` function
- Added `createImage` function
- Streamlined `replaceText` and `replaceImg` functions
- Streamlined entire api
- mod data is now a variable (`MOD_DATA`) in `data.js` utilizing JSON
- Mod data now has the fields: name, author, version, nicodrag_version, api_version, mod_api_version and enabled, compared to title, version, date (version), and enabled.
- Added CHANGELOG.md for `api.js`

# v0.1.12 - Aug 27, 2024
- Added default values to replacement function arguments
- Fixed about 2 bugs the Console Log Viewer by mark smth
- Attempts at `WebUtil.js`
- Utilization of `global.js` for mod data

# v0.1.11 - Aug 24, 2024
- redid `api.js` (mostly the same lol)
- Removed `returnFileContent`, `toggleMod`, and `returnModStats` functions

# v0.1.10 - Aug 24, 2024
- Removed `MOD_VERSION` variable softcoding (broken)

# v0.1.9.1 - Aug 23, 2024
- Changed `MOD_VERSION` variable to get the mod version from the mod content folder `version.txt` file.

# v0.1.9 - Aug 23, 2024
- Added `returnFileContent` function using `readFile` function from `/Blog/SP/util/gpt.js`

# v0.1.8 - Aug 21, 2024
- Changed `MOD_ENABLED` variable to an export let variable (`toggleMod` and `returnModStats` functions are now depricated and shouldn't have been used at the moment)

# v0.1.7 - Aug 21, 2024
- Added return statement to `toggleMod` function

# v0.1.6 - Aug 21, 2024
- Changed MOD_ENABLED variable to a regular var
- Added `returnModStats` function

# v0.1.5 - Aug 21, 2024
- Attempted fix and `toggleMod` function

# v0.1.4 - Aug 21, 2024
- Attempted fix and `toggleMod` function

# v0.1.3 - Aug 21, 2024
- Added checks to see if the mod is enabled in replacement functions
- Added `toggleMod` function
- Added `ignore_enable` argument to replacement functions

# v0.1.2 - Aug 21, 2024
- Added checks to see if the `replacement` argument in the `replaceImg` and `replaceText` functions are blank

# v0.1.1 - Aug 21, 2024
- Added `MOD_ENABLED` variable
- Added `replaceText` function

# v0.1 - Aug 21, 2024
- Added `replaceImg` function