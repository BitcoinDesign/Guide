---
layout: guide
title: Calendar
description: Design crits, community calls, project sessions, and other events planned by the Bitcoin Design Community
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
   alt-text = "Two persons high-fiving each other"
   caption = 'Illustration via <a href="https://control.rocks" target="_blank">Control</a>'
   width = 1600
   height = 900
   layout = "full-width"
%}

# The Bitcoin design calendar

Join community calls, design reviews, project discussions and other events. Our calendar makes it easy to stay in the loop. Calls are open for anyone to join, and you can choose how much you want to participate.

### What’s in the calendar?

<div class="emoji-boxes">
{% include emoji-box.html
    emoji = "🌎"
    title = "Community calls"
    description = "Open conversations around current topics. Every 3 weeks on Twitter Spaces."
    first = true
    url = "https://github.com/BitcoinDesign/Meta/issues?q=is%3Aissue+is%3Aopen+%22community+call%22"
%}

{% include emoji-box.html
    emoji = "🎨"
    title = "Design guide jam sessions"
    description = "We discuss the ongoing work on the guide. Every 2 weeks on Jitsi."
    url = "https://github.com/BitcoinDesign/Meta/issues?q=is%3Aissue+is%3Aopen+%22jam+session%22+"
%}

{% include emoji-box.html
    emoji = "⚡️"
    title = "Bitcoin design sprints"
    description = "Our collaborative design sessions with lightning wallet projects."
    url = "https://github.com/BitcoinDesign/Meta/issues/244"
%}

{% include emoji-box.html
    emoji = "👩🏽‍🎓"
    title = "Learning bitcoin & design"
    description = "A series focused on open discussion of the fundamentals."
    last = true
    url = "https://github.com/BitcoinDesign/Meta/issues/269"
%}

{% include emoji-box.html
    emoji = "🙌"
    title = "Project calls"
    description = "Individual projects organize their own calls to hang out and discuss progress. Peek in if you’re curious."
    last = true
    url = "https://github.com/BitcoinDesign/Meta/issues"
%}

{% include emoji-box.html
    emoji = "🎯"
    title = "Bitcoin Design Crits"
    description = "Weekly design reviews of bitcoin products by the community."
    url = "https://github.com/BitcoinDesign/Meta/blob/master/Bitcoin-Design-Crits.md"
%}
</div>

### How to subscribe

Add our [calendar](https://raw.githubusercontent.com/BitcoinDesign/Meta/calendar/events.ical) (an .iCal file) to via your favorite calendar tool via the following steps:

- Copy this URL: [https://raw.githubusercontent.com/BitcoinDesign/Meta/calendar/events.ical](https://raw.githubusercontent.com/BitcoinDesign/Meta/calendar/events.ical)
- In Apple Calendar (desktop), use `File -> New calendar subscriptions`
- In Google Calendar (web), click the small `+` icon next to `Other calendars` in the sidebar and select `From URL`
- Paste the URL and save. New events (if there are any scheduled) should show up right away
- In Thunderbird (desktop), `New Calendar` > `On my network` > `iCalendar (ICS)` and paste the [calendar link](https://raw.githubusercontent.com/BitcoinDesign/Meta/calendar/events.ical) in the location field.
- Calendar tools regularly reload subscribed calendars for updates. How often this happens varies by tool

### Adding your own event

- Ensure the event is relevant to the broader community
- [Create a new issue](https://github.com/BitcoinDesign/Meta/issues/new/choose) using the call template
- The issue needs to include a `UTCTime` meta property following this format: `UTCTime: 2020-10-14 9:00 UTC -7`. You can seen an example [here](https://github.com/BitcoinDesign/Meta/issues/27)
- A maintainer needs to add the `call` label to the issue (this prevents spam)
- The calendar auto-updates whenever a new issue is created, or an existing issue is edited
- If you `Watch` the [BitcoinDesign/Meta repo](https://github.com/BitcoinDesign/Meta), you will also get emails when new events are created
