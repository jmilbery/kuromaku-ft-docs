---
sidebar_position: 6
title: Settings & Reminders
---

# Settings & Reminders

## Settings Screen

The Settings tab contains:

### Notifications
- **Daily Reminder** toggle — Enable/disable workout reminders

### Appearance
- **Calendar Theme** — Choose from Steel Blue, Blue + Gold, or Warm Maroon color palettes

### Exercises
- **Manage Exercises** — Rename any of the 30 exercises

### About
- **Help & Support** — Links to the support page
- **Version** — Current app version and build number

## Smart Reminders

When enabled, the reminder system works as follows:

### How It Works
- Schedules **3 silent notifications** at random times between **9 AM and 7 PM**
- Notifications are scheduled for **today and tomorrow** (6 total)
- Times are **randomized daily** — you won't get reminders at the same time each day
- Only requests **alert permission** (no sound)

### Auto-Cancel
- When you **save any workout**, all of today's remaining reminders are automatically cancelled
- This means you only get reminded on days you haven't worked out yet

### Scheduling
- Reminders reschedule when the app comes to the foreground
- Uses a date check to avoid re-randomizing on the same day
- Safe if the app opens multiple times per day

### Toggling Off
- Turning off the toggle immediately cancels all pending notifications
- No data is lost — your workout history is unaffected

## Calendar Theme

Access via **Settings > Calendar Theme**.

Choose from three color palettes that change how your calendar days are colored:

- **Steel Blue** — Cool blue progression from pale to navy
- **Blue + Gold** — Blue tones with a gold Platinum tier
- **Warm Maroon** — Rose-to-maroon progression with a gold Platinum tier

The change takes effect immediately — go back to the calendar to see the new colors.

## Manage Exercises

Access via **Settings > Manage Exercises**.

### Renaming
1. Tap the **pencil icon** next to any exercise
2. Enter your custom name
3. The change takes effect immediately in all views

### How It Works
- Custom names are stored separately from workout data
- Each exercise has a **stable internal ID** (e.g., `strength_1`)
- Renaming doesn't affect historical workout entries
- CSV exports use the **current display name** at time of export

### Resetting
- Tap **"Reset All to Defaults"** to restore all original exercise names
- Individual exercises can also be reset by clearing the custom name

## Version Info

The Settings screen shows the current version and build number (e.g., "3.0 (1)"). This is useful for support requests.
