### Version 2.1.5 - Nov 1, 2015

- **Progress* - Calling `reset` will now reset `value` to 0, so increment starts again at 0
- **Progress** - Progress example code no longer shows accidental inline css

### Version 2.0.1 - July 6, 2015

- **Progress** - Progress included `debug: true` by default. This has been now correctly set to `false`

### Version 2.0.0 - June 30, 2015

- **Progress** - `indicating` labels now are more legible use separate css variables from `indicating` bar color
- **Progress** - Fixed bug where percentage complete values between 0-1% would display incorrectly (0.5% would show as 50%)
- **Progress** - Update contrast on `indicating`, update default styles. Fixed some examples

### Version 1.12.1 - April 26, 2015

- **Progress* - Fixes rounding error in precision settings *Thanks @aaroncox*

### Version 1.7.(1-2) - January 15, 2015

- **UI** - Fixes `progress`, `ad`, and `sidebar` not loading `.override` files correctly

### Version 1.7.0 - January 14, 2015

- **Progress** - Progress bars can now display percent or amount left using `{value}` in text templates
- **Progress** - Fixes bug with progress that use ``total`` and ``value`` receiving the wrong values for text templates

### Version 1.5.0 - December 30, 2014

- **Progress** - Progress bars now display all intermediary percentage values when animating. Improved performance when progress bar is rapidly updated.

### Version 1.4.0 - December 22, 2014

- **Progress** - Fixes bug where ``ui indicating progress`` would not update its label immediately in webkit

### Version 1.2.0 - December 08, 2014

- **Progress** - Adds ``limitValues`` setting to adjust values outside of 0-100 automatically to within range, defaults to true
- **Progress** - Fixes issues with setting progress to 0% not working as expected

### Version 1.1.0 - December 02, 2014

- **Progress** - Progress now has sizing variations
- **Progress** - Fixes indicating progress appearing incorrectly at 100% complete **Thanks ordepdev**
- **Progress** - Added missing settings docs for progress module

### Version 0.12.0 - Jan 06, 2014

- **Progress Bar** - Adds warning color

### Version 0.1.0 - Sep 25, 2013