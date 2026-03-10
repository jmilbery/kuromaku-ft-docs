---
sidebar_position: 4
title: Calendar & Scoring
---

# Calendar & Scoring

## Score-Based Calendar

The calendar is the main screen of the app. Each day is colored based on a **daily score** calculated from your workout and water intake.

### Scoring Categories

Your daily score is the sum of points across five categories:

| Category | Max Points | What Counts |
|----------|-----------|-------------|
| Strength | 30 | Sets completed across your strength exercises |
| Intense Cardio | 30 | Minutes of high-intensity cardio (Heavy Bag, Jump Rope, Battle Ropes, Box Jumps) |
| Easy Cardio | 30 | Minutes of steady-state cardio (Steps, Walking, Running, Cycling, Swimming, Rowing) |
| Stretching | 30 | Sets completed across your stretching exercises |
| Water | 10 | Glasses of water (must drink at least 4 to score) |

**Maximum possible score: 130 points**

The system rewards **showing up across categories** rather than maxing out any single exercise.

### Scoring Tiers

| Tier | Score Range | Description |
|------|-------------|-------------|
| No Workout | 0 | No activity logged |
| Bronze | 1 - 30 | Light activity — a few exercises or just water |
| Silver | 31 - 60 | Moderate effort — multiple categories |
| Gold | 61 - 90 | Strong workout day |
| Platinum | 91+ | Outstanding — hitting multiple categories hard |

### Color Palettes

You can choose from **3 color palettes** in **Settings > Calendar Theme**:

| Palette | No Workout | Bronze | Silver | Gold | Platinum |
|---------|-----------|--------|--------|------|----------|
| Steel Blue | Light gray | Pale blue | Medium blue | Dark blue | Navy |
| Blue + Gold | Light gray | Light blue | Blue | Dark blue | Gold |
| Warm Maroon | Light gray | Rose | Maroon | Dark maroon | Gold |

Changes take effect immediately on the calendar.

### Calendar Display

- **Future days** have no background shading
- The **selected day** has a black circle outline
- The **legend** below the calendar shows the five tier colors for the active palette

## Editing Rules

- **Today** — Tap to Record or Edit workout
- **Yesterday** — Tap to Record or Edit workout
- **Older days with data** — Tap to View Workout (read-only)
- **Future days** — No action available

## Water Tracker

Below the calendar legend, 8 cup icons represent your daily water goal:

- Tap cups **left to right** to fill them sequentially
- Tap the **last filled cup** to remove it
- Each glass records a **timestamp** when tapped
- Water tracking is **editable for today and yesterday only**
- Older days show cups in read-only mode
- Drinking at least 4 glasses earns water points toward your daily score

### Water in CSV Export

Water data is exported as a separate "Water" row per day with:
- C1-C8 columns (1 = filled, 0 = unfilled)
- Start-Time (first glass timestamp)
- End-Time (last glass timestamp)
- Duration-Minutes (time between first and last glass)

## Monthly Summary

The **Monthly Summary** card appears below the water tracker and shows 5 stats for the currently displayed month:

| Stat | Description |
|------|-------------|
| Days | Total days with at least one workout |
| Strength | Total strength exercises logged |
| Cardio | Total cardio exercises logged |
| Stretch | Total stretching exercises logged |
| Water | Total water glasses across all days |

The summary updates in real-time as you navigate between months, save workouts, or log water.

## Recording a Workout

1. Select a date (today or yesterday)
2. Tap **"Record Workout"** (or **"Edit Workout"** if data exists)
3. Use the **dropdown** to add exercises from any category
4. Newest added exercises appear at the **top** of their category
5. Fill in sets, weight/minutes, and optional notes
6. Tap **"Return to Calendar"** to save — the calendar updates immediately

### Duplicate Prevention

You can't add the same exercise twice. The app checks by exercise ID (not display name), so even renamed exercises are properly detected.
