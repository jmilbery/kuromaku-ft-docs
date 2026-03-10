---
sidebar_position: 5
title: Data Export
---

# Data Export

## How to Export

1. Tap the **Export** tab at the bottom of the screen
2. You'll see the total number of workouts recorded and the date range
3. Tap **"Export CSV"** to generate the file
4. Choose how to share: Files, AirDrop, email, Messages, or any other share target

## CSV Format

The export produces an 18-column CSV file named `Kuromaku-FT_Export.csv`.

### Columns

| # | Column | Description |
|---|--------|-------------|
| 1 | Date | Workout date (yyyy-MM-dd) |
| 2 | Category | Strength Training, Cardio, Stretching, or Water |
| 3 | ID | Stable exercise ID (e.g., strength_1, cardio_6) |
| 4 | Exercise | Display name (default or custom) |
| 5 | Start-Time | Not applicable for exercises (used for Water rows) |
| 6-13 | C1-C8 | Set checkboxes: 1 = completed, 0 = not completed, -1 = N/A |
| 14 | Weight or Reps | Weight value for strength exercises, -1 if N/A |
| 15 | Minutes | Minutes for cardio exercises, -1 if N/A |
| 16 | End-Time | Not applicable for exercises (used for Water rows) |
| 17 | Duration-Minutes | Not applicable for exercises (used for Water rows) |
| 18 | Exercise Notes | Optional per-exercise note text |

### Exercise Rows

Each exercise entry gets one row. The checkbox columns (C1-C8) contain:
- `1` for a completed set
- `0` for an uncompleted set
- `-1` for sets that don't apply (e.g., minutes-only cardio has no checkboxes)

### Water Rows

Each day with water data gets one "Water" row:
- **C1-C8**: `1` for each glass drunk, `0` for remaining
- **Start-Time**: Timestamp of first glass
- **End-Time**: Timestamp of last glass
- **Duration-Minutes**: Minutes between first and last glass

### Sorting

Rows are sorted by:
1. Date (chronological)
2. Category (Strength > Cardio > Stretching > Water)
3. Exercise order within category

## Opening the CSV

The exported CSV works with:
- **Microsoft Excel**
- **Apple Numbers**
- **Google Sheets**
- **LibreOffice Calc**
- Any text editor or data tool

## Tips

- Export regularly as a backup — your data lives only on your device
- The CSV includes all historical data, not just the current month
- Exercise notes are included in the last column
- Custom exercise names are used in the export (not internal IDs)
