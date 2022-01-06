---
layout: guide
title: Calendar
description: Find out how to get involved in Bitcoin design
permalink: /calendar/
main_nav: true
nav_order: 3
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/calendar/calendar-preview.jpg
---

{% include picture.html
   image = "/assets/images/calendar/calendar.png"
   retina = "/assets/images/calendar/calendar@2x.png"
   mobile = "/assets/images/calendar/calendar-mobile.png"
   mobileRetina = "/assets/images/calendar/calendar-mobile@2x.png"
   alt-text = "Pencils and markers"
   width = 1600
   height = 900
   layout = "full-width"
%}

# The Bitcoin design calendar

Join community calls, design reviews, project discussions and other events. Our calendar makes it easy to stay in the loop.

[Subscribe to the calendar](https://raw.githubusercontent.com/BitcoinDesign/Meta/calendar/events.ical){: .button}

Design is about people. Slack, Github and Twitter are fantastic, and in addition we regularly get on video or audio chats and talk things through.

## What’s in the calendar?

<div class="emoji-boxes">
{% include emoji-box.html
    emoji = "🌎"
    title = "Community calls"
    description = "Open conversations around current topics. Every 3 weeks on Twitter Spaces."
    first = true
%}

{% include emoji-box.html
    emoji = "👀"
    title = "Design review calls"
    description = "A project team presents their work and design challenges and we provide feedback. Every 3 weeks on Jitsi."
%}

{% include emoji-box.html
    emoji = "🎨"
    title = "Design guide jam sessions"
    description = "We discuss the ongoing work on the guide. Every 3 weeks on Jitsi."
%}

{% include emoji-box.html
    emoji = "🙌"
    title = "Project calls"
    description = "Individual projects organize their own calls to hang out and discuss progress. Peek in if you’re curious."
    last = true
%}
</div>

## How to subscribe manually

Our [calendar](https://raw.githubusercontent.com/BitcoinDesign/Meta/calendar/events.ical) (an .iCal file) includes upcoming calls (community calls, design review calls, etc). Qualified issues are automatically added to the calendar, which you can then subscribe to via your favorite calendar tool.

- Copy this URL: [https://raw.githubusercontent.com/BitcoinDesign/Meta/calendar/events.ical](https://raw.githubusercontent.com/BitcoinDesign/Meta/calendar/events.ical)
- In Apple Calendar (desktop), use `File -> New calendar subscriptions`
- In Google Calendar (web), click the small `+` icon next to `Other calendars` in the sidebar and select `From URL`
- Paste the URL and save. New events (if there are any scheduled) should show up right away
- In Thunderbird (desktop), `New Calendar` > `On my network` > `iCalendar (ICS)` and paste the [calendar link](https://raw.githubusercontent.com/BitcoinDesign/Meta/calendar/events.ical) in the location field.
- Calendar tools regularly reload subscribed calendars for updates. How often this happens varies by tool

## Adding your own event

- The issue needs to include a `UTCTime` meta property following this format: `UTCTime: 2020-10-14 9:00 UTC -7`. You can seen an example [here](https://github.com/BitcoinDesign/Meta/issues/27)
- A maintainer needs to add the `call` label to the issue (this prevents spam)
- The calendar auto-updates whenever a new issue is created, or an existing issue is edited
